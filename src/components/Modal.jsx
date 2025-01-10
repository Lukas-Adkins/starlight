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
      <div className="text-dark-textSecondary leading-relaxed">{renderContent()}</div>
      {typeof text === "string" && text.length > 300 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-dark-primary hover:underline"
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
          className="bg-dark-field p-4 rounded-lg shadow-inner col-span-1 sm:col-span-2 text-dark-textSecondary"
        >
          <strong className="text-dark-textPrimary block mb-2">{fullFieldName}:</strong>
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
          className="bg-dark-field p-4 rounded-lg shadow-inner col-span-1 sm:col-span-2 text-dark-textSecondary"
        >
          <strong className="text-dark-textPrimary block mb-2">{fullFieldName}:</strong>
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
          className="bg-dark-field p-4 rounded-lg shadow-inner text-dark-textSecondary flex items-center gap-2"
        >
          <strong className="text-dark-textPrimary">{fullFieldName}:</strong>
          <a
            href={item[field]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-primary hover:underline flex items-center"
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
        className="bg-dark-field p-4 rounded-lg shadow-inner text-dark-textSecondary flex justify-between items-center"
      >
        <span className="font-semibold text-dark-textPrimary">{fullFieldName}:</span>
        <span className="text-dark-textPrimary">
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
        className="fixed inset-0 bg-dark-background bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-0"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="bg-dark-surface p-6 rounded-lg shadow-xl w-full max-w-3xl relative max-h-screen overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-dark-textSecondary hover:text-dark-textPrimary text-2xl p-2 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Modal Title */}
          <h2 className="text-2xl font-bold text-dark-textPrimary mb-6">{item.Name}</h2>

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
