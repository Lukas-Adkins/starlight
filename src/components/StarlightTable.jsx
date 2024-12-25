import React, { useState, useEffect } from "react";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

import { motion, AnimatePresence } from "framer-motion";

import ItemCard from "./ItemCard";
import Modal from "./Modal";
import LoadingSkeleton from "./LoadingSkeleton";
import Filters, { useFilters } from "./Filters";

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

  const sortedItems = useFilters(items, debouncedSearchTerm, selectedFilters, RARITY_ORDER);

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

        {/* Filters */}
        <Filters
          activeCategory={activeCategory}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          items={items}
          categoryFilters={CATEGORY_FILTERS}
          classCustomOrder={CLASS_CUSTOM_ORDER}
        />

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
          <LoadingSkeleton count={8} />
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

      <Modal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        renderFields={(item, fields) =>
          renderFields(item, FIELD_MAPPING[item.Type] || Object.keys(item))
        }
      />
    </div>
  );
};

export default StarlightTable;
