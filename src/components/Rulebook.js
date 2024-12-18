import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RULEBOOK_DATA } from "../constants/rulebook";


const Rulebook = () => {
  const { section } = useParams();
  const [searchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const navigate = useNavigate();

  const handleNavigate = (key) => {
    const route = `/rulebook/${key.toLowerCase().replace(" ", "-")}`;
    if (route !== window.location.pathname) {
      navigate(route);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    }
  };
  

  // Force re-render when `section` changes
  useEffect(() => {
    setIsSidebarOpen(false); // Close the sidebar on navigation change (optional)
  }, [section]);

  // Determine the content for the current section
  const sectionData = RULEBOOK_DATA[section?.toLowerCase()];

  const renderContent = () => {
    if (!sectionData) {
      return (
        <p className="text-lg text-gray-400 italic text-center">
          Section not found.
        </p>
      );
    }
  
    if (Array.isArray(sectionData.sections)) {
      // Count sections with headings
      const headingCount = sectionData.sections.filter(sec => sec.heading).length;
  
      return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-10">
          {sectionData.sections.map((sec, idx) => {
            const anchorId = `section-${idx}`; // Add this line
            const isTable = !!sec.table; // Check if the section contains a table
            const isSoleBox = headingCount < 2; // Determine if this is the sole box
  
            return (
              <div
                key={idx}
                id={anchorId} // Add the anchor ID here
                className={`${
                  isSoleBox || isTable ? "lg:col-span-2" : ""
                } space-y-6 p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700`}
              >
                {sec.heading && (
                  <h3 className="text-3xl font-extrabold text-gray-100 border-b border-gray-700 pb-3">
                    {sec.heading}
                  </h3>
                )}
                {sec.content && (
                  <p className="text-gray-300 leading-relaxed">{sec.content}</p>
                )}
                {sec.table && renderTable(sec.table)}
              </div>
            );
          })}
        </div>
      );
    }
  
    if (typeof sectionData === "string") {
      return (
        <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto px-6 py-8 bg-gray-800 rounded-lg shadow-md border border-gray-700">
          {sectionData}
        </p>
      );
    }
  
    if (sectionData.table) {
      return (
        <div className="lg:col-span-2">
          {renderTable(sectionData.table)}
        </div>
      );
    }
  
    return (
      <p className="text-lg text-gray-400 italic text-center">
        Invalid section format.
      </p>
    );
  };
  
  
  const renderTable = (tableData) => {
    if (!tableData?.columns || !tableData?.rows) {
      return <p className="text-gray-400 italic">Invalid table data.</p>;
    }
  
    return (
      <div className="overflow-x-auto bg-gray-900 rounded-lg shadow-lg">
        <table className="w-full border-collapse text-gray-300 border border-gray-600">
          <thead>
            <tr className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
              {tableData.columns.map((col, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 text-left font-bold border-b border-gray-600"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={`${
                  rowIdx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                } hover:bg-gray-600 transition duration-300 ease-in-out`}
              >
                {Object.values(row).map((value, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-4 py-3 border-b border-gray-600 text-gray-300 break-words ${
                      colIdx === 0 ? "font-bold" : ""
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside
  className={`fixed top-0 left-0 w-64 bg-gray-800 p-4 h-full z-40 transition-transform transform ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0 lg:sticky lg:top-16 overflow-y-auto`}
  style={{ maxHeight: "calc(100vh - 4rem)" }} // Adjust height to fit screen
>
  <h2 className="text-lg font-bold text-gray-300 mb-4">Table of Contents</h2>

  <ul className="space-y-2">
  {Object.keys(RULEBOOK_DATA).map((key) => {
    const isCurrentSection = section?.toLowerCase() === key.toLowerCase();
    const sectionData = RULEBOOK_DATA[key];
    const hasSubsections = sectionData?.sections && Array.isArray(sectionData.sections);

    return (
      <li key={key}>
  <details
    className="group"
    open={isCurrentSection}
  >
    <summary
      className={`px-4 py-2 rounded-md cursor-pointer flex justify-between items-center ${
        isCurrentSection ? "bg-blue-600 text-white" : "bg-gray-900 hover:bg-gray-700 text-gray-300"
      }`}
      onClick={(e) => {
        if (hasSubsections) {
          e.preventDefault(); // Prevent default navigation for dropdown toggle
        }
        handleNavigate(key); // Allow navigation to new section
      }}
      
      
    >
      <span>{sectionData?.title || key}</span>
    </summary>
    {hasSubsections && (
      <ul className="pl-4 space-y-1 mt-2">
        {sectionData.sections.map((subSection, idx) => {
          const anchorId = `section-${idx}`;
          return (
            <li key={idx}>
              <a
                href={`#${anchorId}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block px-4 py-2 bg-gray-900 hover:bg-gray-700 text-gray-300 rounded-md transition"
              >
                {subSection.heading || `Section ${idx + 1}`}
              </a>
            </li>
          );
        })}
      </ul>
    )}
  </details>
</li>

    );
  })}
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
