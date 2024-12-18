import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence} from "framer-motion";
import { Tooltip } from "react-tooltip";
import {
  TRAIT_TOOLTIPS,
  ALLOWED_TOOLTIP_CATEGORIES,
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
    const body = document.body;
    if (isLocked) {
      body.style.transition = "overflow 0.3s ease";
      body.classList.add("overflow-hidden");
    } else {
      body.style.transition = "overflow 0.3s ease";
      body.classList.remove("overflow-hidden");
    }
    return () => body.classList.remove("overflow-hidden");
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

  useBodyScrollLock(!!selectedItem);

  const fetchItemsByCategory = async (category) => {
    const cacheKey = `categoryCache_${category}`; // Unique key for each category
    const cachedData = localStorage.getItem(cacheKey);
    const now = Date.now(); // Current timestamp

  
    if (cachedData) {
      try {
        const parsedData = JSON.parse(cachedData);
  
        // Check if timestamp exists and if the cache is still valid
        if (parsedData.timestamp && now - parsedData.timestamp < MAX_CACHE_SIZE) {
          return parsedData.items; // Return valid cached items
        }
  
        // If no timestamp or cache is stale, fall through to fetch fresh data
      } catch (error) {
        console.error("Error parsing cached data, fetching fresh data:", error);
      }
    }
  
    // Fetch fresh data from Firestore
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
  
    // Save the result to localStorage with a timestamp
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ timestamp: now, items })
    );
  
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
      <motion.div
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
      </motion.div>
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

  
const renderFields = (item, fields) => {

  const reorderedFields = fields
  .filter((field) => field !== "Special / Notes" && field !== "Description")
  .concat(["Special / Notes", "Description"]);

  return reorderedFields.map((field) => {
    const fullFieldName = FULL_FIELD_NAMES[field] || field;

    // Skip empty or undefined fields
    if (!item[field] || item[field] === "N/A") return null;

    // Special case for 'Special / Notes'
    if (field === "Special / Notes") {
      const fieldValue =
        typeof item[field] === "string" ? item[field] : String(item[field]);

      return (
        <div
          key={field}
          className="bg-gray-800 p-4 rounded-lg shadow-inner col-span-1 sm:col-span-2 text-gray-300"
        >
          <strong className="text-gray-400 block mb-2">{fullFieldName}:</strong>
          <DescriptionField text={fieldValue} enableTooltips={true} />
        </div>
      );
    }

    // Handle 'Description' without tooltips
    if (field === "Description") {
      const fieldValue =
        typeof item[field] === "string" ? item[field] : String(item[field]);

      return (
        <div
          key={field}
          className="bg-gray-800 p-4 rounded-lg shadow-inner col-span-1 sm:col-span-2 text-gray-300"
        >
          <strong className="text-gray-400 block mb-2">{fullFieldName}:</strong>
          <DescriptionField text={fieldValue} enableTooltips={false} />
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
const DescriptionField = ({ text, enableTooltips = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const renderContent = () => {
    if (typeof text === "string") {
      const truncatedText =
        text.length > 300 ? text.slice(0, 300) + "..." : text;

      if (enableTooltips) {
        return isExpanded
          ? highlightWithTooltips(text)
          : highlightWithTooltips(truncatedText);
      } else {
        return isExpanded ? text : truncatedText;
      }
    }

    // If `text` is already JSX, render it directly
    return text;
  };

  return (
    <div>
      <div className="text-gray-200 leading-relaxed">{renderContent()}</div>
      {typeof text === "string" && text.length > 300 && (
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

const highlightWithTooltips = (text) => {
  if (!ALLOWED_TOOLTIP_CATEGORIES.includes(activeCategory)) return text;

  if (typeof text !== "string") return text;

  const sortedTraits = Object.keys(TRAIT_TOOLTIPS).sort((a, b) => b.length - a.length);

  let tokens = [text];

  sortedTraits.forEach((trait) => {
    const tooltip = TRAIT_TOOLTIPS[trait];
    const regex = new RegExp(`\\b${trait}\\b`, "gi");

    tokens = tokens.flatMap((token) => {
      if (typeof token === "string") {
        return token.split(regex).flatMap((part, i, arr) =>
          i < arr.length - 1
            ? [
                part,
                <span
                  key={`${trait}-${i}`}
                  data-tooltip-id={`tooltip-${trait}`}
                  data-tooltip-content={tooltip}
                  className="border-b border-dashed border-gray-400 cursor-help"
                >
                  {trait}
                  <Tooltip
                    id={`tooltip-${trait}`}
                    place="top" // Adjust position (e.g., top, bottom, left, right)
                    style={{
                      maxWidth: "90vw", // Constrain width on mobile
                      whiteSpace: "normal", // Allow line breaks for longer text
                      overflowWrap: "break-word", // Prevent text from breaking out
                    }}
                  />
                </span>,
              ]
            : [part]
        );
      }
      return token;
    });
  });

  return <>{tokens}</>;
};



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
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div>
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
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

      <AnimatePresence mode="wait">
        {isFetching ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {Array(8)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded animate-pulse"
                >
                  <div className="h-4 bg-gray-500 rounded mb-2"></div>
                  <div className="h-3 bg-gray-600 rounded w-3/4"></div>
                </div>
              ))}
          </motion.div>
        ) : sortedItems.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 text-center"
          >
            No items match your search or category.
          </motion.div>
        ) : (
          <motion.div
            key={activeCategory} // Unique key for re-render
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {sortedItems.map((item) => (
              <ItemCard key={item.id} item={item} onSelect={setSelectedItem} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>


      {/* Modal */}
      {selectedItem && (
        <AnimatePresence>
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
        </AnimatePresence>
      )}
    </div>
    
  );
  
};

export default StarlightTable;
