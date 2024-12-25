import React, { useState, useEffect } from "react";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

import { motion, AnimatePresence } from "framer-motion";

import ItemCard from "./ItemCard";

import fetchItemsByCategory from "../utils/fetchItemsByCategory";
import formatPrice from "../utils/formatPrice";
import useBodyScrollLock from "../utils/useBodyScrollLock";
import highlightWithTooltips from "../utils/highlightWithToolTips";

import {
  CATEGORIES,
  RARITY_ORDER,
  FULL_FIELD_NAMES,
  FIELD_MAPPING,
  CUSTOM_TYPE_ORDER,
  ITEM_STALE_TIME,
  ITEM_CACHE_ITEM,
  CATEGORY_FILTERS,
  CLASS_CUSTOM_ORDER,
} from "../constants/appConfig";

const StarlightTable = () => {
  const categories = [
    ...CATEGORIES.types.sort((a, b) => {
      return CUSTOM_TYPE_ORDER.indexOf(a) - CUSTOM_TYPE_ORDER.indexOf(b);
    }),
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Ranged Weapon");
  const [selectedItem, setSelectedItem] = useState(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});

  useBodyScrollLock(!!selectedItem);

  const {
    data: items = [],
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["starlightItems", activeCategory],
    queryFn: () => fetchItemsByCategory(activeCategory),
    staleTime: ITEM_STALE_TIME,
    cacheTime: ITEM_CACHE_ITEM,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms delay
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    setSelectedFilters({});
  }, [activeCategory]);

  const filteredItems = React.useMemo(() => {
    if (!debouncedSearchTerm && Object.keys(selectedFilters).length === 0)
      return items;

    return items.filter((item) => {
      // Match search term
      const matchesSearch = item.Name.toLowerCase().includes(
        debouncedSearchTerm.toLowerCase()
      );

      // Match selected filters
      const matchesFilters = Object.entries(selectedFilters).every(
        ([key, value]) => {
          if (!value) return true; // Ignore empty filters
          if (key === "Special / Notes") {
            const specialValues = item["Special / Notes"]
              ? item["Special / Notes"].split(",").map((phrase) =>
                  phrase
                    .trim()
                    .replace(/\s*\(.*\)/, "")
                    .toLowerCase()
                )
              : [];
            return specialValues.includes(value.toLowerCase());
          }
          return item[key]?.toString().toLowerCase() === value.toLowerCase();
        }
      );

      return matchesSearch && matchesFilters;
    });
  }, [items, debouncedSearchTerm, selectedFilters]);

  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (a.Type < b.Type) return -1;
      if (a.Type > b.Type) return 1;
      const rarityA = RARITY_ORDER[a.Rarity] || 100;
      const rarityB = RARITY_ORDER[b.Rarity] || 100;
      return rarityA - rarityB;
    });
  }, [filteredItems]);

  const renderCategoryFilters = () => {
    const filters = CATEGORY_FILTERS[activeCategory] || [];

    const getOptionsForFilter = (field) => {
      if (field === "Class") {
        const uniqueClasses = Array.from(
          new Set(items.map((item) => item[field]).filter(Boolean))
        );

        // Custom sort order for "Class"
        return [
          "All (Show All)",
          ...uniqueClasses.sort((a, b) => {
            const indexA = CLASS_CUSTOM_ORDER.indexOf(a);
            const indexB = CLASS_CUSTOM_ORDER.indexOf(b);

            // If both are in the custom order, sort by index
            if (indexA !== -1 && indexB !== -1) {
              return indexA - indexB;
            }

            // If one is in the custom order, it comes first
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;

            // Fallback to alphabetical sorting for others
            return a.localeCompare(b);
          }),
        ];
      }

      if (field === "Special / Notes") {
        const uniquePhrases = Array.from(
          new Set(
            items
              .flatMap((item) =>
                item["Special / Notes"]
                  ?.split(",")
                  .map((phrase) => phrase.trim().replace(/\s*\(.*\)/, ""))
              )
              .filter(Boolean)
          )
        );
        return [
          "All (Show All)",
          ...uniquePhrases.sort((a, b) => a.localeCompare(b)),
        ];
      }

      return [
        "All (Show All)",
        ...Array.from(
          new Set(items.map((item) => item[field]).filter(Boolean))
        ).sort((a, b) => {
          if (!isNaN(a) && !isNaN(b)) {
            return Number(a) - Number(b);
          }
          return a.localeCompare(b);
        }),
      ];
    };

    return (
      <div className="flex flex-wrap gap-4 items-center">
        {filters.map(({ field, display }) => (
          <div key={field} className="w-48">
            <select
              id={field}
              value={selectedFilters[field] || "All (Show All)"} // Default to "All" if no filter is selected
              onChange={(e) =>
                setSelectedFilters((prev) => ({
                  ...prev,
                  [field]:
                    e.target.value === "All (Show All)" ? "" : e.target.value, // Clear filter when "All" is selected
                }))
              }
              className="p-2 bg-gray-800 border border-gray-700 text-white rounded w-full"
            >
              {getOptionsForFilter(field).map((option) => (
                <option key={option} value={option}>
                  {option === "All (Show All)" ? `All ${display}` : option}
                </option>
              ))}
            </select>
          </div>
        ))}
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

      // Special case for 'Special / Notes'
      if (field === "Special / Notes") {
        const fieldValue =
          typeof item[field] === "string" ? item[field] : String(item[field]);

        return (
          <div
            key={field}
            className="bg-gray-800 p-4 rounded-lg shadow-inner col-span-1 sm:col-span-2 text-gray-300"
          >
            <strong className="text-gray-400 block mb-2">
              {fullFieldName}:
            </strong>
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
            <strong className="text-gray-400 block mb-2">
              {fullFieldName}:
            </strong>
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
            ? highlightWithTooltips(text, activeCategory)
            : highlightWithTooltips(truncatedText, activeCategory);
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

  return (
    <div className="container mx-auto px-4">
      {/* Search Bar and Dropdown */}
      <div className="flex flex-wrap gap-4 items-center mb-4">
        {/* Search Bar */}
        <div className="flex-grow">
          <div className="flex items-center relative">
            <FaSearch className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 p-2 bg-gray-800 border border-gray-700 text-white rounded"
            />
          </div>
        </div>

        {/* Dynamic Filters */}
        <div className="flex flex-wrap gap-4">{renderCategoryFilters()}</div>

        {/* Category Dropdown */}
        <div>
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 text-white rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isError && (
        <p className="text-red-500">
          Error loading items. Please try again later.
        </p>
      )}

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
              <h2 className="text-2xl font-bold text-white mb-6">
                {selectedItem.Name}
              </h2>

              {/* Item Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {renderFields(
                  selectedItem,
                  FIELD_MAPPING[selectedItem.Type] || Object.keys(selectedItem)
                ).map((field, index) =>
                  field ? (
                    React.isValidElement(field) &&
                    (field.key === "Description" ||
                      field.key === "Special / Notes") ? (
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
