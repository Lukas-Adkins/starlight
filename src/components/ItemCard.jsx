import React from "react";
import { motion } from "framer-motion";
import formatPrice from "../utils/formatPrice";

import {
    getRarityColor
} from "../constants/appConfig";

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

  export default ItemCard;