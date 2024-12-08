import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { collection, query, getDocs, limit, startAfter } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ITEMS_PER_PAGE = 10;

const fetchItems = async ({ lastDoc }) => {
  let q = query(collection(db, "starlight_items"), limit(ITEMS_PER_PAGE));
  if (lastDoc) {
    q = query(collection(db, "starlight_items"), startAfter(lastDoc), limit(ITEMS_PER_PAGE));
  }

  const snapshot = await getDocs(q);
  const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const lastVisible = snapshot.docs[snapshot.docs.length - 1];
  return { items, lastVisible };
};

const StarlightTable = () => {
  const [lastDoc, setLastDoc] = useState(null);
  const [items, setItems] = useState([]);

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["starlightItems", lastDoc],
    queryFn: () => fetchItems({ lastDoc }),
    enabled: false, // Disabled initially; we'll trigger it manually
  });

  const loadMore = async () => {
    const result = await refetch();
    if (result.data) {
      setItems((prevItems) => [...prevItems, ...result.data.items]);
      setLastDoc(result.data.lastVisible);
    }
  };

  // Load initial items on mount
  React.useEffect(() => {
    loadMore();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Starlight Items</h1>
      {isError && <p className="text-red-500">Error loading items. Please try again later.</p>}
      <table className="table-auto w-full border-collapse border border-gray-800 text-white">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-800 px-4 py-2">Name</th>
            <th className="border border-gray-800 px-4 py-2">Rarity</th>
            <th className="border border-gray-800 px-4 py-2">Class</th>
            <th className="border border-gray-800 px-4 py-2">Range</th>
            <th className="border border-gray-800 px-4 py-2">Damage</th>
            <th className="border border-gray-800 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={`${item.Name}-${item.Rarity}`} className="hover:bg-gray-600">
              <td className="border border-gray-800 px-4 py-2">{item.Name}</td>
              <td className="border border-gray-800 px-4 py-2">{item.Rarity}</td>
              <td className="border border-gray-800 px-4 py-2">{item.Class}</td>
              <td className="border border-gray-800 px-4 py-2">{item.Range}</td>
              <td className="border border-gray-800 px-4 py-2">{item.Dmg}</td>
              <td className="border border-gray-800 px-4 py-2">{item.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
        <button
          onClick={loadMore}
          disabled={isFetching}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-600"
        >
          {isFetching ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default StarlightTable;
