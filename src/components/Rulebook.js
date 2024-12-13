import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RULEBOOK_DATA } from "../constants/rulebook";

const Rulebook = () => {
  const { section } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const navigate = useNavigate();

  // Determine the content for the current section
  const sectionData = RULEBOOK_DATA[section?.toLowerCase()];

  // Filter sections based on search term
  const filteredSections = Object.keys(RULEBOOK_DATA).filter(
    (key) =>
      key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (RULEBOOK_DATA[key]?.title || key)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    if (!sectionData) return <p>Section not found.</p>;

    // Handle structured sections (with `sections` array)
    if (sectionData.sections) {
      return sectionData.sections.map((sec, idx) => (
        <div key={idx} className="space-y-4">
          {sec.heading && (
            <h3 className="text-xl font-semibold text-blue-400">
              {sec.heading}
            </h3>
          )}
          {sec.content && <p className="text-gray-300">{sec.content}</p>}
        </div>
      ));
    }

    // Handle plain string content
    if (typeof sectionData === "string") {
      return <p className="text-gray-300 whitespace-pre-line">{sectionData}</p>;
    }

    return <p>Invalid section format.</p>;
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-gray-800 p-4 h-full z-40 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:sticky lg:top-16`}
      >
        <h2 className="text-lg font-bold text-gray-300 mb-4">
          Table of Contents
        </h2>

        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-700 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
        </div>

        <ul className="space-y-2">
          {filteredSections.map((key) => (
            <li key={key}>
              <button
                onClick={() => {
                  setIsSidebarOpen(false); // Close sidebar on selection
                  navigate(`/rulebook/${key.toLowerCase()}`);
                }}
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  section?.toLowerCase() === key.toLowerCase()
                    ? "bg-blue-600 text-white"
                    : "bg-gray-900 hover:bg-gray-700 text-gray-300"
                }`}
              >
                {RULEBOOK_DATA[key]?.title || key}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Sidebar Toggle for Mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-gray-100 p-2 rounded-md"
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Main Content */}
      <main className="flex-1 lg: p-8">
        <div className="bg-gray-800 p-8 shadow-md rounded-lg">
          <h2 className="text-3xl font-bold mb-6 capitalize text-center">
            {sectionData?.title || "Rulebook"}
          </h2>
          <div className="leading-relaxed space-y-6">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
};

export default Rulebook;
