import React, { useMemo } from "react";

const Filters = ({
  activeCategory,
  selectedFilters,
  setSelectedFilters,
  items,
  categoryFilters,
  classCustomOrder,
}) => {
  const getOptionsForFilter = (field) => {
    if (field === "Class") {
      const uniqueClasses = Array.from(
        new Set(items.map((item) => item[field]).filter(Boolean))
      );

      return [
        "All (Show All)",
        ...uniqueClasses.sort((a, b) => {
          const indexA = classCustomOrder.indexOf(a);
          const indexB = classCustomOrder.indexOf(b);

          if (indexA !== -1 && indexB !== -1) return indexA - indexB;
          if (indexA !== -1) return -1;
          if (indexB !== -1) return 1;

          return a.localeCompare(b);
        }),
      ];
    }

    if (field === "Special / Notes") {
      const uniquePhrases = Array.from(
        new Set(
          items
            .flatMap((item) =>
              item["Special / Notes"]
                ?.split(",")
                .map((phrase) => phrase.trim().replace(/\s*\(.*\)/, ""))
            )
            .filter(Boolean)
        )
      );
      return [
        "All (Show All)",
        ...uniquePhrases.sort((a, b) => a.localeCompare(b)),
      ];
    }

    return [
      "All (Show All)",
      ...Array.from(
        new Set(items.map((item) => item[field]).filter(Boolean))
      ).sort((a, b) =>
        !isNaN(a) && !isNaN(b) ? Number(a) - Number(b) : a.localeCompare(b)
      ),
    ];
  };

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {(categoryFilters[activeCategory] || []).map(({ field, display }) => (
        <div key={field} className="w-48">
          <select
            id={field}
            value={selectedFilters[field] || "All (Show All)"}
            onChange={(e) =>
              setSelectedFilters((prev) => ({
                ...prev,
                [field]:
                  e.target.value === "All (Show All)" ? "" : e.target.value,
              }))
            }
            className="p-2 bg-gray-800 border border-gray-700 text-white rounded w-full"
          >
            {getOptionsForFilter(field).map((option) => (
              <option key={option} value={option}>
                {option === "All (Show All)" ? `All ${display}` : option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export const useFilters = (
  items,
  debouncedSearchTerm,
  selectedFilters,
  rarityOrder
) => {
  const filteredItems = useMemo(() => {
    if (!debouncedSearchTerm && Object.keys(selectedFilters).length === 0)
      return items;

    return items.filter((item) => {
      const matchesSearch = item.Name.toLowerCase().includes(
        debouncedSearchTerm.toLowerCase()
      );
      const matchesFilters = Object.entries(selectedFilters).every(
        ([key, value]) => {
          if (!value) return true;
          if (key === "Special / Notes") {
            const specialValues = item["Special / Notes"]
              ? item["Special / Notes"].split(",").map((phrase) =>
                  phrase
                    .trim()
                    .replace(/\s*\(.*\)/, "")
                    .toLowerCase()
                )
              : [];
            return specialValues.includes(value.toLowerCase());
          }
          return item[key]?.toString().toLowerCase() === value.toLowerCase();
        }
      );
      return matchesSearch && matchesFilters;
    });
  }, [items, debouncedSearchTerm, selectedFilters]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (a.Type < b.Type) return -1;
      if (a.Type > b.Type) return 1;
      const rarityA = rarityOrder[a.Rarity] || 100;
      const rarityB = rarityOrder[b.Rarity] || 100;
      return rarityA - rarityB;
    });
  }, [filteredItems, rarityOrder]);

  return sortedItems;
};

export default Filters;
