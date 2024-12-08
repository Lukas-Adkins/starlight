import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const rarityOrder = {
  Unique: 11,
  "Near Unique": 10,
  "Extremely Rare": 9,
  "Very Rare": 8,
  Rare: 7,
  Scarce: 6,
  Average: 5,
  Common: 4,
  Plentiful: 3,
  Abundant: 2,
  Ubiquitous: 1,
};

const getRarityColor = (rarity) => {
  switch (rarity) {
    case "Unique":
      return "text-yellow-500"; // Unique = yellow
    case "Near Unique":
      return "text-orange-500"; // Near Unique = orange
    case "Extremely Rare":
      return "text-red-500"; // Extremely Rare = red
    case "Very Rare":
      return "text-pink-500"; // Very Rare = pink
    case "Rare":
      return "text-purple-500"; // Rare = purple
    case "Scarce":
      return "text-blue-500"; // Scarce = blue
    case "Average":
      return "text-green-500"; // Average = green
    case "Common":
      return "text-gray-500"; // Common = gray
    case "Plentiful":
      return "text-teal-500"; // Plentiful = teal
    case "Abundant":
      return "text-lime-500"; // Abundant = lime
    case "Ubiquitous":
      return "text-emerald-500"; // Ubiquitous = emerald
    default:
      return "text-gray-500"; // Default gray if no rarity
  }
};

const fullFieldNames = {
  "Mag": "Magazine Size",
  "Rld": "Reload Time",
  "RoF": "Rate of Fire",
  "Wt.": "Weight",
  "Pen": "Penetration",
  "Dmg": "Damage",
  "Special / Notes": "Special",
  "Location": "Location",
  "Class": "Class",
  "Price": "Price",
  "Rarity": "Rarity",
  "Range": "Range",
  "Max Ag": "Max Agility",
  "AP": "Armor Points",
  "Slots": "Cybernetic Slots",
  "Mech Slot": "Mech Slot",
  "Type": "Type",
  "Url": "Url",
  "Description": "Description",
};

const fieldMapping = {
  "Ranged Weapon": [
    "Class",
    "Range",
    "RoF",
    "Dmg",
    "Pen",
    "Mag",
    "Rld",
    "Special / Notes",
    "Wt.",
    "Price",
    "Description",
  ],
  "Melee Weapon": [
    "Class",
    "Dmg",
    "Pen",
    "Special / Notes",
    "Wt.",
    "Range",
    "Price",
    "Description",
  ],
  "Explosive": [
    "Class",
    "Range",
    "Dmg",
    "Pen",
    "Special / Notes",
    "Wt.",
    "Price",
    "Description",
  ],
  "Armor": [
    "Max Ag",
    "Special / Notes",
    "Covers",
    "AP",
    "Wt.",
    "Price",
    "Description",
  ],
  "Cybernetic": [
    "Special / Notes",
    "Slots",
    "Price",
    "Description",
  ],
  "Miscellaneous": [
    "Special / Notes",
    "Price",
    "Wt.",
    "Description",
  ],
  "Weapon Mod": [
    "Special / Notes",
    "Price",
    "Wt.",
    "Description",
  ],
  "Special Ammo": [
    "Special / Notes",
    "Price",
    "Wt.",
    "Description",
  ],
  "Consumable": [
    "Special / Notes",
    "Price",
    "Wt.",
    "Description",
  ],
  "Mech": [
    "Special / Notes",
    "Price",
    "Wt.",
    "Description",
    "Url"
  ],
  "Mech Ranged Weapon": [
    "Class",
    "Range",
    "RoF",
    "Dmg",
    "Pen",
    "Mag",
    "Rld",
    "Special / Notes",
    "Wt.",
    "Price",
    "Description",
    "Location"
  ],
  "Mech Melee Weapon": [
    "Class",
    "Dmg",
    "Pen",
    "Special / Notes",
    "Wt.",
    "Price",
    "Description",
    "Range",
    "Location",
  ],
  "Mech Utility": [
    "Class",
    "Dmg",
    "Pen",
    "Special / Notes",
    "Wt.",
    "Price",
    "Description",
    "Location",
    "Mech Slot"
  ],
  "Mech Engine": [
    "Class",
    "Dmg",
    "Pen",
    "Special / Notes",
    "Wt.",
    "Price",
    "Description",
    "Location",
    "Mech Slot"
  ],
};

  // Custom sorting order for item types
  const customTypeOrder = [
    "Ranged Weapon",
    "Melee Weapon",
    "Explosive",
    "Armor",
    "Cybernetic",
    "Miscellaneous",
    "Weapon Mod",
    "Special Ammo",
    "Consumable",
    "Mech",
    "Mech Ranged Weapon",
    "Mech Melee Weapon",
    "Mech Utility",
    "Mech Engine",
  ];

const fetchAllItems = async () => {
  const snapshot = await getDocs(collection(db, "starlight_items"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      Type: data.Type === "Misc" ? "Miscellaneous" : data.Type || "Miscellaneous", // Replace 'Misc' with 'Miscellaneous'
    };
  });
};

const StarlightTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Ranged Weapon");
  const [selectedItem, setSelectedItem] = useState(null);

  const { data: items = [], isFetching, isError } = useQuery({
    queryKey: ["starlightItems"],
    queryFn: fetchAllItems,
    staleTime: 60 * 60 * 1000,
  });

  const categories = React.useMemo(() => {
    const uniqueTypes = [...new Set(items.map((item) => item.Type).filter(Boolean))];
    return ["All", ...uniqueTypes.filter((type) => customTypeOrder.includes(type))].sort(
      (a, b) => customTypeOrder.indexOf(a) - customTypeOrder.indexOf(b)
    );
  }, [items]);

  const filteredItems = items.filter((item) => {
    // If search term is active, ignore category filter
    const matchesSearch = item.Name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || (item.Type || "Miscellaneous") === activeCategory;
  
    // If there's a search term, only match the search. Otherwise, apply category filter as well.
    return matchesSearch && (searchTerm ? true : matchesCategory);
  });
  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (a.Type < b.Type) return -1;
      if (a.Type > b.Type) return 1;
      const rarityA = rarityOrder[a.Rarity] || 100;
      const rarityB = rarityOrder[b.Rarity] || 100;
      return rarityA - rarityB;
    });
  }, [filteredItems]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && selectedItem) {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedItem]);

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
        <p className="text-gray-400 text-center">Loading items...</p>
      ) : sortedItems.length === 0 ? (
        <p className="text-gray-400 text-center">No items match your search or category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded shadow hover:shadow-lg cursor-pointer flex justify-between items-center"
            onClick={() => setSelectedItem(item)}
          >
          <div>
            <h2 className="text-md font-bold text-white">{item.Name}</h2>
            <p className="text-gray-400 text-xs">{item.Type}</p>
          </div>
            <p
              className={`text-xs font-semibold ${getRarityColor(item.Rarity)}`}
            >
              {item.Rarity}
            </p>
          </div>
        ))}
      </div>      
      )}

      {/* Modal */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)} // Close modal when clicking the overlay
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="bg-gray-800 p-6 rounded shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-3xl p-2 hover:bg-gray-700 rounded-full"
            >
              ✕
            </button>

            {/* Item Name */}
            <h2 className="text-xl font-bold text-white mb-4">{selectedItem.Name}</h2>

            {/* Render Fields Dynamically */}
            {renderFields(selectedItem, fieldMapping[selectedItem.Type] || Object.keys(selectedItem))}
          </div>
        </motion.div>
      )}

    </div>
  );
};

const renderFields = (item, fields) => {
  return fields.map((field) => {
    const fullFieldName = fullFieldNames[field] || field;  // Replace short name with full name
    if (!item[field] || item[field] === "N/A") return null; // Skip empty fields

    // Special handling for the 'Url' field to display "Link" without the category
    if (field === "Url" && item[field]) {
      return (
        <div key={field} className="text-gray-300 text-sm mb-2">
          <a
            href={item[field]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center"
          >
            Link <FaExternalLinkAlt className="ml-1 text-gray-500" />
          </a>
        </div>
      );
    }

    return (
      <div key={field} className="text-gray-300 text-sm mb-2 grid grid-cols-[25%,75%] gap-4">
        <div>
          <strong>{fullFieldName}:</strong>
        </div>
        <div>{item[field]}</div>
      </div>
    );
  });
};


export default StarlightTable;
