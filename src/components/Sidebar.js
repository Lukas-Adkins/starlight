import React from "react";
import { RULEBOOK_DATA } from "../constants/rulebookData";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ section, isSidebarOpen, handleNavigate, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 w-64 bg-dark-surface p-4 h-full z-40 transform transition-transform duration-300 ease-in-out shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:sticky lg:top-0 overflow-y-auto`}
        style={{ height: "100vh", paddingTop: "20px" }}
      >
        <h2 className="text-lg font-bold text-dark-textPrimary mb-4">
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
                {/* Click to navigate immediately */}
                <div
                  className={`px-4 py-2 rounded-md cursor-pointer flex justify-between items-center ${
                    isCurrentSection
                      ? "bg-dark-primary text-dark-textPrimary"
                      : "bg-dark-background hover:bg-dark-primary text-dark-textPrimary"
                  }`}
                  onClick={() => handleNavigate(key)}
                >
                  <span>{sectionData?.title || key}</span>
                </div>

                {/* Subsections only visible when on the section's page */}
                {hasSubsections && isCurrentSection && (
                  <ul className="pl-4 space-y-1 mt-2">
                    {sectionData.sections.map((subSection, idx) => {
                      const anchorId = `section-${idx}`;
                      return (
                        <li key={idx}>
                          <a
                            href={`#${anchorId}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const target = document.getElementById(anchorId);
                              if (target) {
                                const offset = 70; // Adjust for fixed header
                                const position =
                                  target.getBoundingClientRect().top +
                                  window.scrollY -
                                  offset;
                                window.scrollTo({
                                  top: position,
                                  behavior: "smooth",
                                });
                              }
                            }}
                            className={`block px-4 py-2 rounded-md transition ${
                              window.location.hash === `#${anchorId}`
                                ? "bg-dark-secondary text-dark-background"
                                : "bg-dark-background hover:bg-dark-primary text-dark-textPrimary"
                            }`}
                          >
                            {subSection.heading || `Section ${idx + 1}`}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Sidebar Toggle for Mobile */}
      <button
        onClick={toggleSidebar}
        className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-md transition-transform transform duration-300 ease-in-out bg-dark-primary text-dark-background ${
          isSidebarOpen ? "rotate-90" : "rotate-0"
        } lg:hidden`}
        aria-expanded={isSidebarOpen}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </>
  );
};

export default Sidebar;
