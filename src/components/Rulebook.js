import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RULEBOOK_DATA } from "../constants/rulebook";

const Rulebook = () => {
  const { section } = useParams();
  const [searchTerm] = useState("");
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
    if (!sectionData) {
      return <p>Section not found.</p>;
    }
  
    // Check for `sections` array and render its content
    if (Array.isArray(sectionData.sections)) {
      return sectionData.sections.map((sec, idx) => (
        <div key={idx} className="space-y-4">
          {sec.heading && (
            <h3 className="text-xl font-semibold text-blue-400">{sec.heading}</h3>
          )}
          {sec.content && (
            <p className="text-gray-300 whitespace-pre-line">{sec.content}</p>
          )}
          {sec.table && (
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-gray-300">
                <thead>
                  <tr>
                    {sec.table.columns.map((col, colIdx) => (
                      <th
                        key={colIdx}
                        className="sticky top-0 border-b border-gray-600 px-4 py-2 text-left bg-gray-800"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.table.rows.map((row, rowIdx) => (
                    <tr
                      key={rowIdx}
                      className={rowIdx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
                    >
                      <td className="border-b border-gray-600 px-4 py-2">
                        {row.crit}
                      </td>
                      <td className="border-b border-gray-600 px-4 py-2">
                          {row.effect.length > 500
                            ? `${row.effect.slice(0, 500)}...`
                            : row.effect}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ));
    }
  
    // Check for plain string content
    if (typeof sectionData === "string") {
      return <p className="text-gray-300 whitespace-pre-line">{sectionData}</p>;
    }
  
    // Check for standalone `table` data
    if (sectionData.table) {
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-gray-300">
            <thead>
              <tr>
                {sectionData.table.columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="sticky top-0 border-b border-gray-600 px-4 py-2 text-left bg-gray-800"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sectionData.table.rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
                >
                  <td className="border-b border-gray-600 px-4 py-2">{row.crit}</td>
                  <td className="border-b border-gray-600 px-4 py-2">
                    <span title={row.effect}>
                      {row.effect.length > 50
                        ? `${row.effect.slice(0, 50)}...`
                        : row.effect}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  
    // Fallback for invalid formats
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
