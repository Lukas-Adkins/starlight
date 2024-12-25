import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { MAX_CACHE_SIZE, COLLECTION_NAME } from "../constants/appConfig";

const fetchItemsByCategory = async (category) => {
    const cacheKey = `categoryCache_${category}`; // Unique key for each category
    const cachedData = localStorage.getItem(cacheKey);
    const now = Date.now(); // Current timestamp
  
    if (cachedData) {
      try {
        const parsedData = JSON.parse(cachedData);
  
        // Check if timestamp exists and if the cache is still valid
        if (
          parsedData.timestamp &&
          now - parsedData.timestamp < MAX_CACHE_SIZE
        ) {
          console.log("Cache hit:", parsedData);
          return parsedData.items; // Return valid cached items
        }
      } catch (error) {
        console.error("Error parsing cached data, clearing cache:", error);
        localStorage.removeItem(cacheKey); // Clear corrupted data
      }
    }
  
    console.log("Cache miss, fetching fresh data...");
    
    // Fetch fresh data from Firestore
    const queryConstraints = [
      where("Type", "==", category === "Miscellaneous" ? "Misc" : category),
    ];
    const itemsQuery = query(
      collection(db, COLLECTION_NAME),
      ...queryConstraints
    );
    const snapshot = await getDocs(itemsQuery);
  
    const items = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        Type:
          data.Type === "Misc" ? "Miscellaneous" : data.Type || "Miscellaneous",
      };
    });
  
    localStorage.setItem(cacheKey, JSON.stringify({ timestamp: now, items }));
  
    return items;
  };  

export default fetchItemsByCategory;
