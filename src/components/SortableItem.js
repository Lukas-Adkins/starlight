import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, item, handleEditItem, setConfirmDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="relative bg-dark-field p-4 rounded-lg shadow-lg group border border-dark-highlight"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-dark-textPrimary">{item.itemName}</h2>
        <span className="text-sm text-dark-textSecondary">x{item.quantity}</span>
      </div>
      {/* Hover-based buttons */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => handleEditItem(item)}
          className="mr-2 text-dark-primary hover:text-dark-highlight"
        >
          Edit
        </button>
        <button
          onClick={() => setConfirmDelete(item.id)}
          className="text-dark-error hover:text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SortableItem;
