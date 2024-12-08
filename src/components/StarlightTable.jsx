import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  MAX_CACHE_SIZE,
  CATEGORIES,
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

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLocked]);
};

const StarlightTable = () => {
  const categories = [...CATEGORIES.types.sort((a, b) => {
    return CUSTOM_TYPE_ORDER.indexOf(a) - CUSTOM_TYPE_ORDER.indexOf(b);
  })];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Ranged Weapon");
  const [selectedItem, setSelectedItem] = useState(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [setCategoryCache] = useState({});

  useBodyScrollLock(!!selectedItem);

  const fetchItemsByCategory = async (category) => {
    const cacheKey = `categoryCache_${category}`; // Unique key for each category
  
    // Check if data exists in localStorage
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData); // Return parsed data if available
    }
  
    // Fetch from Firestore if not in localStorage
    const queryConstraints = [where("Type", "==", category === "Miscellaneous" ? "Misc" : category)];
    const itemsQuery = query(collection(db, COLLECTION_NAME), ...queryConstraints);
    const snapshot = await getDocs(itemsQuery);
  
    const items = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        Type: data.Type === "Misc" ? "Miscellaneous" : data.Type || "Miscellaneous",
      };
    });
  
    // Save the result to localStorage
    localStorage.setItem(cacheKey, JSON.stringify(items));
  
    // Optionally, update in-memory cache
    setCategoryCache((prevCache) => {
      const newCache = { ...prevCache, [category]: items };
  
      // Limit cache size
      if (Object.keys(newCache).length > MAX_CACHE_SIZE) {
        delete newCache[Object.keys(newCache)[0]]; // Remove the oldest entry
      }
  
      return newCache;
    });
  
    return items;
  };  

  const { data: items = [], isFetching, isError } = useQuery({
    queryKey: ["starlightItems", activeCategory],
    queryFn: () => fetchItemsByCategory(activeCategory),
    staleTime: ITEM_STALE_TIME,
    cacheTime: ITEM_CACHE_ITEM,
  });
  
  const ItemCard = React.memo(({ item, onSelect }) => {
    return (
      <div
        key={item.id}
        className="bg-gray-800 p-4 rounded shadow hover:shadow-lg hover:bg-gray-700 cursor-pointer flex justify-between transition-transform transform hover:scale-105"
        onClick={() => onSelect(item)}
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
          <p className="text-gray-400 text-sm mt-1">
            {item.Price ? `₵${formatPrice(item.Price)}` : "Price: N/A"}
          </p>
        </div>
      </div>
    );
  });  

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms delay
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredItems = React.useMemo(() => {
    if (!debouncedSearchTerm) return items;
    return items.filter((item) =>
      item.Name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [items, debouncedSearchTerm]);
  
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
        // MEMO
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedItems.map((item) => (
            <ItemCard key={item.id} item={item} onSelect={setSelectedItem} />
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-0"
          onClick={() => setSelectedItem(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-3xl relative max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl p-2 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Item Name */}
            <h2 className="text-2xl font-bold text-white mb-6">{selectedItem.Name}</h2>

            {/* Item Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderFields(
                selectedItem,
                FIELD_MAPPING[selectedItem.Type] || Object.keys(selectedItem)
              ).map((field, index) =>
                field ? (
                  React.isValidElement(field) &&
                  (field.key === "Description" || field.key === "Special / Notes") ? (
                    // Wide fields (e.g., Description)
                    <div key={index} className="col-span-1 sm:col-span-2">
                      {field}
                    </div>
                  ) : (
                    // Regular fields
                    <div key={index} className="col-span-1">
                      {field}
                    </div>
                  )
                ) : null
              )}
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};

const renderFields = (item, fields) => {

  const reorderedFields = fields
  .filter((field) => field !== "Special / Notes" && field !== "Description")
  .concat(["Special / Notes", "Description"]);

  return reorderedFields.map((field) => {
    const fullFieldName = FULL_FIELD_NAMES[field] || field;

    // Skip empty or undefined fields
    if (!item[field] || item[field] === "N/A") return null;

    // Special case for 'Description'
    if (field === "Description" || field === "Special / Notes") {
      return (
        <div
          key={field}
          className="bg-gray-800 p-4 rounded-lg shadow-inner col-span-1 sm:col-span-2 text-gray-300"
        >
          <strong className="text-gray-400 block mb-2">{fullFieldName}:</strong>
          <DescriptionField text={item[field]} />
        </div>
      );
    }

    // Special case for 'URL'
    if (field === "Url") {
      return (
        <div
          key={field}
          className="bg-gray-800 p-4 rounded-lg shadow-inner text-gray-300 flex items-center gap-2"
        >
          <strong className="text-gray-400">{fullFieldName}:</strong>
          <a
            href={item[field]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center"
          >
            Image <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      );
    }

    // Default field layout for other fields
    return (
      <div
        key={field}
        className="bg-gray-800 p-4 rounded-lg shadow-inner text-gray-300 flex justify-between items-center"
      >
        <span className="font-semibold text-gray-400">{fullFieldName}:</span>
        <span className="text-gray-100">
          {field === "Price" ? `₵${formatPrice(item[field])}` : item[field]}
        </span>
      </div>
    );
  });
};




// Component for handling expandable/collapsible text
const DescriptionField = ({ text }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const truncatedText = text.length > 300 ? text.slice(0, 300) + "..." : text;

  return (
    <div>
      <p className="text-gray-200 leading-relaxed">
        {isExpanded ? text : truncatedText}
      </p>
      {text.length > 300 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-blue-500 hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};



export default StarlightTable;
