import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RULEBOOK_DATA } from "../constants/rulebookData";
import { FaBars, FaTimes } from "react-icons/fa";

const Rulebook = () => {
  const { section } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = (key) => {
    const route = `/rulebook/${key.toLowerCase().replace(" ", "-")}`;
    if (route !== window.location.pathname) {
      navigate(route);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [section]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / scrollHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeSidebarOnClickOutside = (e) => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && !sidebar.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", closeSidebarOnClickOutside);
    } else {
      document.removeEventListener("mousedown", closeSidebarOnClickOutside);
    }
    return () => document.removeEventListener("mousedown", closeSidebarOnClickOutside);
  }, [isSidebarOpen]);

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
      const headingCount = sectionData.sections.filter(
        (sec) => sec.heading
      ).length;

      return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-10">
          {sectionData.sections.map((sec, idx) => {
            const anchorId = `section-${idx}`;
            const isTable = !!sec.table;
            const isSoleBox = headingCount < 2;

            return (
              <div
                key={idx}
                id={anchorId}
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
        <div className="lg:col-span-2">{renderTable(sectionData.table)}</div>
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
          <thead className="sticky top-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <tr>
              {tableData.columns.map((col, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 text-left font-bold border-b border-gray-600 text-gray-200"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.length === 0 ? (
              <tr>
                <td colSpan={tableData.columns.length} className="px-4 py-3 text-center">
                  No data available.
                </td>
              </tr>
            ) : (
              tableData.rows.map((row, rowIdx) => (
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
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50"
      ></div>

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 w-64 bg-gray-800 p-4 h-full z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:sticky lg:top-16 overflow-y-auto`}
        style={{ maxHeight: "calc(100vh - 4rem)" }}
      >
        <h2 className="text-lg font-bold text-gray-300 mb-4">
          Table of Contents
        </h2>
        <ul className="space-y-2">
          {Object.keys(RULEBOOK_DATA).map((key) => {
            const isCurrentSection = section?.toLowerCase() === key.toLowerCase();
            const sectionData = RULEBOOK_DATA[key];
            const hasSubsections =
              sectionData?.sections && Array.isArray(sectionData.sections);

            return (
              <li key={key}>
                <details className="group" open={isCurrentSection}>
                  <summary
                    className={`px-4 py-2 rounded-md cursor-pointer flex justify-between items-center ${
                      isCurrentSection
                        ? "bg-blue-600 text-white"
                        : "bg-gray-900 hover:bg-gray-700 text-gray-300"
                    }`}
                    onClick={(e) => {
                      if (hasSubsections) {
                        e.preventDefault(); // Prevent navigation for dropdown toggle
                      }
                      handleNavigate(key); // Allow navigation for the main section
                    }}
                  >
                    <span>{sectionData?.title || key}</span>
                  </summary>
                  {hasSubsections && (
                    <ul className="pl-4 space-y-1 mt-2">
                      {sectionData.sections.map((subSection, idx) => {
                        const anchorId = `section-${idx}`;
                        const isCurrentSubSection = window.location.hash === `#${anchorId}`;

                        return (
                          <li key={idx}>
                            <a
                              href={`#${anchorId}`}
                              onClick={(e) => {
                                e.preventDefault();
                                const target = document.getElementById(anchorId);
                                const offset = 70; // Adjust for fixed header
                                const position =
                                  target.getBoundingClientRect().top +
                                  window.scrollY -
                                  offset;
                                window.scrollTo({ top: position, behavior: "smooth" });
                              }}
                              className={`block px-4 py-2 rounded-md transition ${
                                isCurrentSubSection
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-900 hover:bg-gray-700 text-gray-300"
                              }`}
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
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-gray-100 p-2 rounded-md shadow-md"
        aria-expanded={isSidebarOpen}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Main Content */}
      <main className="flex-1 lg:p-8">
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
