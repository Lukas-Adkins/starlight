export const RARITY_ORDER = {
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

export const getRarityColor = (rarity) =>
  RARITY_COLORS[rarity] || RARITY_COLORS.Default;

export const FULL_FIELD_NAMES = {
  Mag: "Magazine Size",
  Rld: "Reload Time",
  RoF: "Rate of Fire",
  "Wt.": "Weight",
  Pen: "Penetration",
  Dmg: "Damage",
  "Special / Notes": "Special",
  Location: "Location",
  Class: "Class",
  Price: "Price",
  Rarity: "Rarity",
  Range: "Range",
  "Max Ag": "Max Agility",
  AP: "Armor Points",
  Slots: "Cybernetic Slots",
  "Mech Slot": "Mech Slot",
  Type: "Type",
  Url: "Url",
  Description: "Description",
};

export const CLASS_CUSTOM_ORDER = ["Light, Ranged", "Basic, Ranged", "Heavy, Ranged"];

export const FIELD_MAPPING = {
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
  Explosive: [
    "Class",
    "Range",
    "Dmg",
    "Pen",
    "Special / Notes",
    "Wt.",
    "Price",
    "Description",
  ],
  Armor: [
    "Max Ag",
    "Special / Notes",
    "Covers",
    "AP",
    "Wt.",
    "Price",
    "Description",
  ],
  Cybernetic: ["Special / Notes", "Slots", "Price", "Description"],
  Miscellaneous: ["Special / Notes", "Price", "Wt.", "Description"],
  "Weapon Mod": ["Special / Notes", "Price", "Wt.", "Description"],
  "Special Ammo": ["Special / Notes", "Price", "Wt.", "Description"],
  Consumable: ["Special / Notes", "Price", "Wt.", "Description"],
  Mech: ["Special / Notes", "Price", "Wt.", "Description", "Url"],
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
    "Location",
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
    "Mech Slot",
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
    "Mech Slot",
  ],
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

export const CATEGORY_FILTERS = {
  "Ranged Weapon": [
    { field: "Class", display: "Class" },
    { field: "Special / Notes", display: "Special" },
  ],
  "Melee Weapon": [
    { field: "Class", display: "Class" },
    { field: "Special / Notes", display: "Special" },
  ],
  Armor: [
    { field: "Max Agility", display: "Max Agility" },
    { field: "Covers", display: "Covers" },
    { field: "Special / Notes", display: "Special" },
  ],
  Cybernetic: [{ field: "Slots", display: "Slots" }],
  "Mech Ranged Weapon": [
    { field: "Class", display: "Class" },
    { field: "Location", display: "Location" },
    { field: "Special / Notes", display: "Special" },
  ],
  "Mech Melee Weapon": [
    { field: "Class", display: "Class" },
    { field: "Location", display: "Location" },
    { field: "Special / Notes", display: "Special" },
  ],
  "Mech Utility": [{ field: "Location", display: "Location" }],
  "Mech Engine": [{ field: "Location", display: "Location" }],
};

export const COLLECTION_NAME = "starlight_items";
export const ITEM_STALE_TIME = 24 * 60 * 60 * 1000; // 1 day
export const ITEM_CACHE_ITEM = 24 * 60 * 60 * 1000; // 1 day
export const MAX_CACHE_SIZE = 14;
export const DEFAULT_CATEGORY = "Ranged Weapon";
export const CATEGORIES = {
  types: [
    "Ranged Weapon",
    "Melee Weapon",
    "Miscellaneous",
    "Armor",
    "Consumable",
    "Cybernetic",
    "Explosive",
    "Mech",
    "Mech Engine",
    "Mech Melee Weapon",
    "Mech Ranged Weapon",
    "Mech Utility",
    "Special Ammo",
    "Weapon Mod",
  ],
};

export const TRAIT_TOOLTIPS = {
  Accurate:
    "+10 to hit with Aim; Basic weapons gain +1d10 damage per 2 DoS (max +2d10) on single shot.",
  Balanced: "+10 to Parry tests.",
  Blast: "Hits all in radius; roll damage individually.",
  Concussive:
    "Target tests Toughness with -10 per level; failure stuns per DoF.",
  Corrosive: "Armor reduced by 1d10; excess damage applies directly.",
  Crippling:
    "Taking more than a half action deals damage per level, ignoring armor.",
  Defensive: "+15 to Parry, -10 to hit when attacking.",
  Felling: "Reduces target's Unnatural Toughness bonus by level.",
  Flame:
    "Fail Agility test to avoid being set on fire; fire deals 1d10 damage, 1 Fatigue per round.",
  Flexible: "Cannot be parried.",
  Nethari:
    "Bonus energy damage and Pen equal to Psi Rating; can deal extra damage with Focus Power.",
  Hallucinogenic:
    "Fail Toughness test by level to roll on Hallucinogenic Effects table.",
  EMP: "Disables unshielded tech in radius for 1d5 rounds; affects nearest mech systems.",
  Inaccurate: "No aim bonus.",
  Maximal:
    "Optional +10 range, +1d10 damage, +2 Pen, +2 Blast radius; uses triple ammo and adds Recharge.",
  Overheats:
    "Roll 91+ deals Energy damage to arm and disables weapon for a round.",
  Takedown: "Target must test Toughness or be Stunned and knocked prone.",
  "Power Field": "On Parry, 26+ destroys enemy weapon (GM discretion).",
  Proven: "Damage dice roll no lower than set minimum.",
  "RazorS harp": "Double Pen with 3+ DoS.",
  Recharge: "Cannot attack again until next round.",
  Reliable: "Jams only on 100.",
  Scatter: "+10 to hit and +3 damage at Point Blank; -3 damage at long range.",
  Shocking:
    "Fail Toughness test to gain Fatigue and be Stunned for level rounds.",
  Shield: "Adds AP to body and arm.",
  Smoke: "Creates smoke cloud lasting 1d10+10 rounds.",
  Snare:
    "Fail Agility test to be Immobilized, requiring another test to escape.",
  Spray: "Hits all in a 30° cone; targets test Agility to avoid.",
  Storm: "Doubles hits and ammo use.",
  Tearing: "Roll extra damage die; discard lowest.",
  Toxic: "Fail Toughness test by level to take 1d10 extra damage.",
  Unbalanced: "-10 to Parry; no lightning attack.",
  Unreliable: "Jams on 91+.",
  Unwieldy: "Cannot Parry or make lightning attacks.",
  Vengeful: "Additional critical hit value.",
  Oxygen: "Provides breathable oxygen for a set number of hours.",
  "Self-Sealing": "Nanomachines repair damage to maintain pressurization.",
  "EMP Shield": "Immune to EMP effects.",
  "RCS Controls": "Allows free maneuvering in 0 g up to half movement speed.",
  "Thermal Sight": "Negates sight penalties from smoke or darkness.",
  "Air Filtration": "Grants immunity to gas or air-based hazards.",
  Autodoctor:
    "Onboard AI ensures wearer is Lightly Damaged for healing; injects drugs as needed.",
  Compact: "-20 to tests made to find.",
};

export const ALLOWED_TOOLTIP_CATEGORIES = [
  "Ranged Weapon",
  "Melee Weapon",
  "Armor",
  "Explosive",
  "Special Ammo",
  "Mech Ranged Weapon",
  "Mech Melee Weapon",
  "Mech Utility",
];
