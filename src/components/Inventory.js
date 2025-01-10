import React, { useState, useReducer, useEffect } from "react";
import {
  useFetchInventory,
  useAddInventoryItem,
  useDeleteInventoryItem,
  useUpdateInventoryItem,
} from "../firebase/api";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEdit, FaTrash, FaBox } from "react-icons/fa";

const categories = [
  "Weapons",
  "Armor",
  "Magic Items",
  "Currencies",
  "Treasure",
  "Consumables",
  "Clothes",
  "Miscellaneous",
];

// Helper Modal Reducer
const initialModalState = { isOpen: false, mode: null, item: null };
const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_ADD":
      return { isOpen: true, mode: "add", item: null };
    case "OPEN_EDIT":
      return { isOpen: true, mode: "edit", item: action.payload };
    case "CLOSE":
      return initialModalState;
    default:
      return state;
  }
};

const InventoryItem = ({ item, onEdit, onDelete }) => (
  <motion.div
    className="bg-dark-surface p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 relative group"
    layout
  >
    {/* Item Name */}
    <div>
      <h2 className="text-lg font-medium text-dark-textPrimary">{item.itemName}</h2>
    </div>

    {/* Quantity Badge */}
    <div className="absolute top-4 right-4 bg-dark-highlight text-dark-textSecondary px-3 py-1 rounded-full text-sm flex items-center">
      <FaBox className="mr-1 text-dark-textPrimary" />
      <span>{item.quantity}</span>
    </div>

    {/* Edit & Delete Buttons */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-dark-background bg-opacity-50 rounded-lg">
      <button
        onClick={() => onEdit(item)}
        className="text-dark-primary hover:text-dark-highlight transition-colors duration-200 mx-2"
        title="Edit"
      >
        <FaEdit size={24} />
      </button>
      <button
        onClick={() => onDelete(item.id)}
        className="text-dark-error hover:text-dark-highlight transition-colors duration-200 mx-2"
        title="Delete"
      >
        <FaTrash size={24} />
      </button>
    </div>
  </motion.div>
);

const Modal = ({ isOpen, mode, item, onClose, onSave }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (mode === "add") {
        setItemName("");
        setQuantity(1);
        setCategory(""); // Reset to empty for "add" mode
      } else if (mode === "edit" && item) {
        setItemName(item?.itemName ?? ""); // Load existing itemName
        setQuantity(item?.quantity ?? 1); // Load existing quantity
        setCategory(item?.category ?? ""); // Load existing category
      }
    }
  }, [isOpen, mode, item]);

  const handleSave = () => {
    if (!category) {
      alert("Please select a category.");
      return;
    }

    if (itemName.trim() && quantity > 0) {
      onSave({ itemName, quantity, category, id: item?.id });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-dark-background bg-opacity-75 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <div className="bg-dark-surface p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-dark-textPrimary mb-4">
              {mode === "add" ? "Add New Item" : "Edit Item"}
            </h2>
            <input
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full p-2 mb-4 bg-dark-highlight text-dark-textPrimary rounded-md"
            />
            <input
              type="number"
              placeholder="Quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-2 mb-4 bg-dark-highlight text-dark-textPrimary rounded-md"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 mb-4 bg-dark-highlight text-dark-textPrimary rounded-md"
            >
              <option value="" disabled>
                Select a Category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleSave}
                className="bg-dark-primary px-4 py-2 rounded-md hover:bg-dark-highlight text-dark-textPrimary"
              >
                Save
              </button>
              <button
                onClick={onClose}
                className="bg-dark-highlight px-4 py-2 rounded-md hover:bg-dark-surface text-dark-textPrimary"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Inventory = () => {
  const { characterId } = useParams();
  const { user } = useAuth();
  const userId = user?.uid;
  const location = useLocation();

  // Extract character name from state
  const characterName = location.state?.name || "Character";

  const [modalState, dispatchModal] = useReducer(
    modalReducer,
    initialModalState
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: inventory = [], isLoading } = useFetchInventory({
    userId,
    characterId,
  });
  const addItemMutation = useAddInventoryItem({ userId, characterId });
  const deleteItemMutation = useDeleteInventoryItem({ userId, characterId });
  const updateItemMutation = useUpdateInventoryItem({ userId, characterId });

  const handleSaveItem = (itemData) => {
    if (modalState.mode === "add") {
      addItemMutation.mutate(itemData);
    } else if (modalState.mode === "edit") {
      updateItemMutation.mutate({ itemId: itemData.id, updatedData: itemData });
    }
    dispatchModal({ type: "CLOSE" });
  };

  const handleDeleteItem = (id) => {
    deleteItemMutation.mutate({ itemId: id });
  };

  const filteredInventory =
    activeCategory === "All"
      ? inventory
      : inventory.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-dark-background text-dark-textPrimary flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-8">{`${characterName}'s Inventory`}</h1>

      {isLoading ? (
        <p className="text-dark-textSecondary">Loading...</p>
      ) : (
        <div className="w-full max-w-6xl">
          {/* Category Tabs */}
          <div className="flex space-x-4 mb-6 overflow-x-auto">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md ${
                  activeCategory === cat
                    ? "bg-dark-primary text-dark-textPrimary"
                    : "bg-dark-surface text-dark-textSecondary hover:bg-dark-highlight"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items Section */}
          {filteredInventory.length === 0 ? (
            <p className="text-dark-textSecondary text-center">
              No items found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInventory.map((item) => (
                <InventoryItem
                  key={item.id}
                  item={item}
                  onEdit={(item) =>
                    dispatchModal({ type: "OPEN_EDIT", payload: item })
                  }
                  onDelete={handleDeleteItem}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Add Item Button */}
      <button
        onClick={() => dispatchModal({ type: "OPEN_ADD" })}
        className="fixed bottom-8 right-8 bg-dark-primary px-6 py-3 rounded-full shadow-lg hover:bg-dark-highlight text-dark-textPrimary"
      >
        + Add Item
      </button>

      {/* Modals */}
      <Modal
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        item={modalState.item}
        onClose={() => dispatchModal({ type: "CLOSE" })}
        onSave={handleSaveItem}
      />
    </div>
  );
};

export default Inventory;
