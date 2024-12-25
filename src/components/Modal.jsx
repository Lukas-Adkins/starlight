import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ item, onClose, renderFields }) => {
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
            {renderFields(
              item,
              renderFields(item.Type) || Object.keys(item)
            ).map((field, index) =>
              field ? (
                React.isValidElement(field) &&
                (field.key === "Description" || field.key === "Special / Notes") ? (
                  // Wide fields
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
  );
};

export default Modal;
