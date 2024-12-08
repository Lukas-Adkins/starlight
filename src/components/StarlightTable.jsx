import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { FaSearch } from "react-icons/fa";

const rarityOrder = {
  Unique: 11,
  "Near Unique": 10,
  "Extremely Rare": 9,
  "Very Rare": 8,
  Rare: 7,
  Scarce: 6,
  Average: 5,
  Common: 4,
  Plentiful: 3,
  Abundant: 2,
  Ubiquitous: 1,
};

// Fetch all items from Firestore
const fetchAllItems = async () => {
  const snapshot = await getDocs(collection(db, "starlight_items"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      Type: data.Type || "Miscellaneous", // Default to 'Miscellaneous' if Type is missing
    };
  });
};

const StarlightTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch items
  const { data: items = [], isFetching, isError } = useQuery({
    queryKey: ["starlightItems"],
    queryFn: fetchAllItems,
    staleTime: 60 * 60 * 1000, // Cache for 60 minutes
  });

  // Dynamically derive categories from cached items
  const categories = React.useMemo(() => {
    const uniqueTypes = [...new Set(items.map((item) => item.Type).filter(Boolean))].sort();
    return ["All", ...uniqueTypes];
  }, [items]);

  // Filter items by search term and category
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || (item.Type || "Miscellaneous") === activeCategory;
    const matchesSearch = item.Name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort items first by Type, then by Rarity
  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      // Primary sorting by Type
      if (a.Type < b.Type) return -1;
      if (a.Type > b.Type) return 1;
  
      // Secondary sorting by Rarity
      const rarityA = rarityOrder[a.Rarity] || 100;
      const rarityB = rarityOrder[b.Rarity] || 100;
      if (rarityA !== rarityB) return rarityA - rarityB;
  
      // Tertiary sorting by Cost (Price)
      const priceA = parseFloat(a.Price) || 0; // Ensure numeric comparison, fallback to 0
      const priceB = parseFloat(b.Price) || 0;
      return priceA - priceB;
    });
  }, [filteredItems]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Starlight Items</h1>

      {/* Search Bar and Dropdown for Categories */}
      <div className="flex items-center mb-4 gap-4">
        <div className="flex items-center relative flex-grow">
          <FaSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        <div>
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Error Message */}
      {isError && <p className="text-red-500">Error loading items. Please try again later.</p>}

      {/* Items Table */}
      {isFetching ? (
        <p className="text-gray-400 text-center">Loading items...</p>
      ) : sortedItems.length === 0 ? (
        <p className="text-gray-400 text-center">No items match your search or category.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-800 text-white">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-800 px-4 py-2">Name</th>
                <th className="border border-gray-800 px-4 py-2">Item Type</th>
                <th className="border border-gray-800 px-4 py-2">Rarity</th>
                <th className="border border-gray-800 px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-600">
                  <td className="border border-gray-800 px-4 py-2">{item.Name}</td>
                  <td className="border border-gray-800 px-4 py-2">{item.Type}</td>
                  <td className="border border-gray-800 px-4 py-2">{item.Rarity}</td>
                  <td className="border border-gray-800 px-4 py-2">{item.Price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StarlightTable;
