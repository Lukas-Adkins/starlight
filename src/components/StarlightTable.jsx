import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  RARITY_ORDER,
  FULL_FIELD_NAMES,
  FIELD_MAPPING,
  CUSTOM_TYPE_ORDER,
  COLLECTION_NAME,
  ITEM_STALE_TIME,
  ITEM_CACHE_ITEM,
  getRarityColor,
} from "../constants/appConfig";

const formatPrice = (price) => {
  if (!price || isNaN(price)) return "N/A"; // Handle invalid or missing prices
  return price.toLocaleString("en-US"); // Format number with commas
};

const fetchCategories = async () => {
  const snapshot = await getDocs(collection(db, COLLECTION_NAME));
  const types = new Set(
    snapshot.docs.map((doc) => {
      const type = doc.data().Type || "Miscellaneous";
      return type === "Misc" ? "Miscellaneous" : type;
    })
  );

  if (!types.has("Ranged Weapon")) types.add("Ranged Weapon");
  if (!types.has("Miscellaneous")) types.add("Miscellaneous");

  return ["All", ...Array.from(types).filter((type) => CUSTOM_TYPE_ORDER.includes(type) || type === "Miscellaneous")]
    .sort((a, b) => CUSTOM_TYPE_ORDER.indexOf(a) - CUSTOM_TYPE_ORDER.indexOf(b));
};

const fetchItemsByCategory = async (category) => {
  const queryConstraints =
    category && category !== "All" ? [where("Type", "==", category === "Miscellaneous" ? "Misc" : category)] : [];
  const itemsQuery = query(collection(db, COLLECTION_NAME), ...queryConstraints);
  const snapshot = await getDocs(itemsQuery);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      Type: data.Type === "Misc" ? "Miscellaneous" : data.Type || "Miscellaneous",
    };
  });
};

const StarlightTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Ranged Weapon");
  const [selectedItem, setSelectedItem] = useState(null);

  const queryClient = useQueryClient();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: ITEM_STALE_TIME,
    cacheTime: ITEM_CACHE_ITEM
  });

  const { data: items = [], isFetching, isError } = useQuery({
    queryKey: ["starlightItems", activeCategory],
    queryFn: () => fetchItemsByCategory(activeCategory),
    staleTime: ITEM_STALE_TIME,
    cacheTime: ITEM_CACHE_ITEM
  });

  useEffect(() => {
    if (categories.length > 0) {
      queryClient.prefetchQuery(["starlightItems", "All"], () => fetchItemsByCategory("All"));
    }
  }, [categories, queryClient]);

  const filteredItems = React.useMemo(() => {
    if (!searchTerm) return items;
    return items.filter((item) =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (a.Type < b.Type) return -1;
      if (a.Type > b.Type) return 1;
      const rarityA = RARITY_ORDER[a.Rarity] || 100;
      const rarityB = RARITY_ORDER[b.Rarity] || 100;
      return rarityA - rarityB;
    });
  }, [filteredItems]);

  return (
    <div className="container mx-auto px-4">
      {/* Search Bar and Dropdown */}
      <div className="flex items-center mb-4 gap-4">
        <div className="flex items-center relative flex-grow">
          <FaSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 p-2 bg-gray-800 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isError && <p className="text-red-500">Error loading items. Please try again later.</p>}

      {isFetching ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(8).fill().map((_, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded animate-pulse">
              <div className="h-4 bg-gray-500 rounded mb-2"></div>
              <div className="h-3 bg-gray-600 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : sortedItems.length === 0 ? (
        <p className="text-gray-400 text-center">No items match your search or category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 p-4 rounded shadow hover:shadow-lg hover:bg-gray-700 cursor-pointer flex justify-between transition-transform transform hover:scale-105"
              onClick={() => setSelectedItem(item)}
            >
              {/* Left Column: Item Name and Type */}
              <div className="flex flex-col justify-between">
                <h2
                  className="text-lg font-semibold text-white leading-tight break-words max-w-full sm:truncate sm:max-w-[150px] md:max-w-[200px]"
                  title={item.Name} // Show full title on hover
                >
                  {item.Name}
                </h2>
                <p className="text-gray-500 text-sm">{item.Type}</p>
              </div>

              {/* Right Column: Rarity and Price */}
              <div className="flex flex-col items-end justify-between">
                <p className={`text-sm font-medium ${getRarityColor(item.Rarity)}`}>
                  {item.Rarity}
                </p>
                <p className="text-gray-400 text-sm mt-1">{item.Price ? `₵${formatPrice(item.Price)}` : "Price: N/A"}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="bg-gray-800 p-6 rounded shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-3xl p-2 hover:bg-gray-700 rounded-full"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-white mb-4">{selectedItem.Name}</h2>
            {renderFields(selectedItem, FIELD_MAPPING[selectedItem.Type] || Object.keys(selectedItem))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

const renderFields = (item, fields) => {
  return fields.map((field) => {
    const fullFieldName = FULL_FIELD_NAMES[field] || field;
    if (!item[field] || item[field] === "N/A") return null;

    if (field === "Url" && item[field]) {
      return (
        <div key={field} className="text-gray-300 text-sm mb-2">
          <a
            href={item[field]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center"
          >
            Link <FaExternalLinkAlt className="ml-1 text-gray-500" />
          </a>
        </div>
      );
    }

    // Special handling for the 'Price' field
    if (field === "Price") {
      return (
        <div key={field} className="text-gray-300 text-sm mb-2 grid grid-cols-[25%,75%] gap-4">
          <div>
            <strong>{fullFieldName}:</strong>
          </div>
          <div>{`₵${formatPrice(item[field])}`}</div>
        </div>
      );
    }
    return (
      <div key={field} className="text-gray-300 text-sm mb-2 grid grid-cols-[25%,75%] gap-4">
        <div>
          <strong>{fullFieldName}:</strong>
        </div>
        <div>{item[field]}</div>
      </div>
    );
  });
};

export default StarlightTable;
