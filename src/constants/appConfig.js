export const RARITY_ORDER = {
    "Unique": 11,
    "Near Unique": 10,
    "Extremely Rare": 9,
    "Very Rare": 8,
    "Rare": 7,
    "Scarce": 6,
    "Average": 5,
    "Common": 4,
    "Plentiful": 3,
    "Abundant": 2,
    "Ubiquitous": 1,
};
  
export const RARITY_COLORS = {
    Unique: "text-yellow-500",
    "Near Unique": "text-orange-500",
    "Extremely Rare": "text-red-500",
    "Very Rare": "text-pink-500",
    Rare: "text-purple-500",
    Scarce: "text-blue-500",
    Average: "text-green-500",
    Common: "text-gray-500",
    Plentiful: "text-teal-500",
    Abundant: "text-lime-500",
    Ubiquitous: "text-emerald-500",
    Default: "text-gray-500",
};

export const getRarityColor = (rarity) => RARITY_COLORS[rarity] || RARITY_COLORS.Default;

export const FULL_FIELD_NAMES = {
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
  
export const FIELD_MAPPING = {
    "Ranged Weapon": ["Class", "Range", "RoF", "Dmg", "Pen", "Mag", "Rld", "Special / Notes", "Wt.", "Price", "Description"],
    "Melee Weapon": ["Class", "Dmg", "Pen", "Special / Notes", "Wt.", "Range", "Price", "Description"],
    "Explosive": ["Class", "Range", "Dmg", "Pen", "Special / Notes", "Wt.", "Price", "Description"],
    "Armor": ["Max Ag", "Special / Notes", "Covers", "AP", "Wt.", "Price", "Description"],
    "Cybernetic": ["Special / Notes", "Slots", "Price", "Description"],
    "Miscellaneous": ["Special / Notes", "Price", "Wt.", "Description"],
    "Weapon Mod": ["Special / Notes", "Price", "Wt.", "Description"],
    "Special Ammo": ["Special / Notes", "Price", "Wt.", "Description"],
    "Consumable": ["Special / Notes", "Price", "Wt.", "Description"],
    "Mech": ["Special / Notes", "Price", "Wt.", "Description", "Url"],
    "Mech Ranged Weapon": ["Class", "Range", "RoF", "Dmg", "Pen", "Mag", "Rld", "Special / Notes", "Wt.", "Price", "Description", "Location"],
    "Mech Melee Weapon": ["Class", "Dmg", "Pen", "Special / Notes", "Wt.", "Price", "Description", "Range", "Location"],
    "Mech Utility": ["Class", "Dmg", "Pen", "Special / Notes", "Wt.", "Price", "Description", "Location", "Mech Slot"],
    "Mech Engine": ["Class", "Dmg", "Pen", "Special / Notes", "Wt.", "Price", "Description", "Location", "Mech Slot"],
  };

export const CUSTOM_TYPE_ORDER = [
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
  
  export const COLLECTION_NAME = "starlight_items";
  export const ITEM_STALE_TIME = 2 * 24 * 60 * 60 * 1000 // 2 days
  export const ITEM_CACHE_ITEM = 2 * 24 * 60 * 60 * 1000 // 2 days
  export const MAX_CACHE_SIZE = 14;
  export const DEFAULT_CATEGORY = "Ranged Weapon";
  export const CATEGORIES = {
    "types": ["Ranged Weapon", "Melee Weapon", "Miscellaneous", "Armor", "Consumable", "Cybernetic", "Explosive", "Mech", "Mech Engine", "Mech Melee Weapon", "Mech Ranged Weapon", "Mech Utility", "Special Ammo", "Weapon Mod"]
  }