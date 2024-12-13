import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Example rulebook data
const rulebookData = {
  introduction: `
    Welcome to the rulebook. This section introduces the game system, its core concepts, and how players interact with the world. 
    Be ready for an exciting journey into a richly detailed universe!
  `,
  character: `
    Characters are the heart of any adventure. Build your character by choosing attributes, skills, and abilities.
    Use the table below to allocate your starting points:
  `,
  gear: `
    Gear helps your characters survive and thrive. From swords to futuristic blasters, gear matters!
    Here's an example of item stats:
  `,
  mechs: `
    Mechs are powerful machines piloted by characters. Choose your model and customize it with weapons, shields, and upgrades.
    See the mech specs table for an overview:
  `,
  "personal-combat": `
    Engage in thrilling personal combat scenarios. Use the rules below to determine attack outcomes.
  `,
  "talents-traits": `
    Talents and traits define your character’s unique capabilities. Choose wisely to craft a balanced or specialized adventurer.
  `,
  "elite-advances": `
    Elite advances are for experienced characters ready to face the toughest challenges.
  `,
  psionics: `
    Psionics allow characters to wield mental powers. Master these abilities to outsmart your foes and overcome obstacles.
  `,
  "critical-damage": `
    Critical damage can change the course of a battle. Learn how to deal and survive devastating blows.
  `,
};

const sampleTables = {
  character: [
    { Attribute: "Strength", Points: 10 },
    { Attribute: "Dexterity", Points: 8 },
    { Attribute: "Intelligence", Points: 12 },
  ],
  gear: [
    { Item: "Longsword", Damage: "1d8", Cost: "50gp" },
    { Item: "Blaster", Damage: "2d6", Cost: "200gp" },
  ],
  mechs: [
    { Model: "Titan", Armor: "100", Speed: "40" },
    { Model: "Hawk", Armor: "80", Speed: "60" },
  ],
};

const Rulebook = () => {
  const { section } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const content = rulebookData[section?.toLowerCase()] || "Section not found.";

  const filteredSections = Object.keys(rulebookData).filter(
    (key) =>
      key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rulebookData[key].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderTable = () => {
    const tableData = sampleTables[section?.toLowerCase()];
    if (!tableData) return null;

    return (
      <table className="w-full mt-4 bg-gray-700 text-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-800">
            {Object.keys(tableData[0]).map((header) => (
              <th key={header} className="px-4 py-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => (
            <tr key={idx} className="border-t border-gray-600">
              {Object.values(row).map((value, colIdx) => (
                <td key={colIdx} className="px-4 py-2">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="relative max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search the rulebook..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-700 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Search Icon */}
          <svg
            className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
            />
          </svg>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
            >
              ✕
            </button>
          )}
          {searchTerm && (
            <ul className="absolute w-full bg-gray-800 mt-2 shadow-md rounded-lg z-10">
              {filteredSections.length ? (
                filteredSections.map((key) => (
                  <li key={key}>
                    <button
                      onClick={() => {
                        setSearchTerm(""); // Clear the search term
                        navigate(`/rulebook/${key.toLowerCase()}`); // Navigate to the section
                      }}
                      className="block px-4 py-2 hover:bg-gray-700 text-gray-300 w-full text-left"
                    >
                      {key}
                    </button>
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No matches found</li>
              )}
            </ul>
          )}
        </div>
      </div>
  
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-800 p-8 shadow-md rounded-lg">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-6 capitalize text-center">
            {section || "Rulebook"}
          </h2>
  
          {/* Content */}
          <p className="leading-relaxed text-gray-300">{content}</p>
  
          {/* Table */}
          {renderTable()}
        </div>
      </div>
    </div>
  );
  
};

export default Rulebook;
