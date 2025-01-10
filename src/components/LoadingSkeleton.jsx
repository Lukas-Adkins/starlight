import React from "react";
import { motion } from "framer-motion";

const LoadingSkeleton = ({ count = 8, className = "" }) => {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
    >
      {Array(count)
        .fill()
        .map((_, index) => (
          <div key={index} className="bg-dark-surface p-4 rounded animate-pulse">
            <div className="h-4 bg-dark-highlight rounded mb-2"></div>
            <div className="h-3 bg-dark-border rounded w-3/4"></div>
          </div>
        ))}
    </motion.div>
  );
};

export default LoadingSkeleton;
