import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ITEM_FULL_FIELD_NAMES,
  ITEM_FIELD_MAPPING,
} from "../constants/appConfig";
import { FaExternalLinkAlt } from "react-icons/fa";
import formatPrice from "../utils/formatPrice";
import highlightWithTooltips from "../utils/highlightWithToolTips";

const DescriptionField = ({ text, enableTooltips = false, activeCategory }) => {
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

    return text; // Render JSX directly if `text` is JSX
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

// Export renderFields for use in other components
export const renderFields = (item, activeCategory) => {
  const fields = ITEM_FIELD_MAPPING[item.Type] || Object.keys(item); // Use FIELD_MAPPING if available
  const reorderedFields = fields
    .filter((field) => field !== "Special / Notes" && field !== "Description")
    .concat(["Special / Notes", "Description"]);

  return reorderedFields.map((field) => {
    const fullFieldName = ITEM_FULL_FIELD_NAMES[field] || field;

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
          <DescriptionField
            text={fieldValue}
            enableTooltips={true}
            activeCategory={activeCategory}
          />
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
          <DescriptionField
            text={fieldValue}
            enableTooltips={false}
            activeCategory={activeCategory}
          />
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

const Modal = ({ item, onClose, activeCategory }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-0"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-3xl relative max-h-screen overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl p-2 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Modal Title */}
          <h2 className="text-2xl font-bold text-white mb-6">{item.Name}</h2>

          {/* Modal Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderFields(item, activeCategory)}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
