import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { MAX_CACHE_SIZE, COLLECTION_NAME } from "../constants/appConfig";

/**
 * Fetches items from Firestore by category, with a localStorage cache.
 *
 * @param {string} category - The item category to filter on.
 * @returns {Promise<Array>} Resolves to an array of item objects.
 */
export default async function fetchItemsByCategory(category) {
  // Unique key for each category to store in localStorage
  const cacheKey = `categoryCache_${category}`;

  // Attempt to load from localStorage (if available)
  if (typeof localStorage !== "undefined") {
    const cachedData = localStorage.getItem(cacheKey);
    const now = Date.now(); // Current timestamp

    if (cachedData) {
      try {
        const parsedData = JSON.parse(cachedData);

        // Validate cache by checking timestamp
        if (
          parsedData?.timestamp &&
          now - parsedData.timestamp < MAX_CACHE_SIZE &&
          Array.isArray(parsedData.items)
        ) {
          console.log("Cache hit:", parsedData);
          return parsedData.items;
        }
      } catch (error) {
        console.error("Error parsing cached data, clearing cache:", error);
        localStorage.removeItem(cacheKey); // Clear corrupted data
      }
    }

    console.log("Cache miss, fetching fresh data...");
  } else {
    console.warn("localStorage is not available; skipping cache checks.");
  }

  // Firestore filter logic: "Miscellaneous" => "Misc"
  const filterValue = category === "Miscellaneous" ? "Misc" : category;
  const constraints = [where("Type", "==", filterValue)];

  // Construct Firestore query
  const itemsQuery = query(collection(db, COLLECTION_NAME), ...constraints);
  const snapshot = await getDocs(itemsQuery);

  // Transform docs into array of items
  const items = snapshot.docs.map((doc) => {
    const data = doc.data() || {};
    return {
      id: doc.id,
      ...data,
      // Firestore "Misc" is interpreted as "Miscellaneous"
      Type: data.Type === "Misc" ? "Miscellaneous" : data.Type || "Miscellaneous",
    };
  });

  // If localStorage is available, store fresh results
  if (typeof localStorage !== "undefined") {
    const now = Date.now();
    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ timestamp: now, items })
      );
    } catch (error) {
      console.error(`Failed to cache data for key "${cacheKey}":`, error);
    }
  }

  return items;
}
