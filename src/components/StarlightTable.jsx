import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

import { motion, AnimatePresence } from "framer-motion";

import ItemCard from "./ItemCard";
import Modal from "./Modal";
import LoadingSkeleton from "./LoadingSkeleton";
import Filters, { useFilters } from "./Filters";

import fetchItemsByCategory from "../utils/fetchItemsByCategory";
import useBodyScrollLock from "../utils/useBodyScrollLock";

import {
  CATEGORIES,
  RARITY,
  CUSTOM_TYPE_ORDER,
  ITEM_STALE_TIME,
  ITEM_CACHE_ITEM,
  ITEM_CATEGORY_FILTERS,
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

  const sortedItems = useFilters(
    items,
    debouncedSearchTerm,
    selectedFilters,
    RARITY.ORDER
  );

  return (
    <div className="container mx-auto px-4">
      {/* Search Bar and Dropdown */}
      <div className="flex flex-wrap gap-4 items-center mb-4">
        {/* Search Bar */}
        <div className="flex-grow">
          <div className="flex items-center relative">
            <FaSearch className="absolute left-3 text-dark-textSecondary" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 p-2 bg-dark-field border border-dark-border text-dark-textPrimary rounded"
            />
          </div>
        </div>

        {/* Filters */}
        <Filters
          activeCategory={activeCategory}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          items={items}
          categoryFilters={ITEM_CATEGORY_FILTERS}
          classCustomOrder={CLASS_CUSTOM_ORDER}
        />

        {/* Category Dropdown */}
        <div>
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="p-2 bg-dark-field border border-dark-border text-dark-textPrimary rounded"
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
        <p className="text-dark-error">
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
            className="text-dark-textSecondary text-center"
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
        activeCategory={activeCategory}
      />
    </div>
  );
};

export default StarlightTable;
