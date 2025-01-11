import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RULEBOOK_DATA } from "../constants/rulebookData";
import Sidebar from "./Sidebar";
import ContentRenderer from "../utils/contentRenderer";

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / scrollHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sectionData = RULEBOOK_DATA[section?.toLowerCase()];

  return (
    <div className="flex min-h-screen bg-dark-background text-dark-textPrimary relative">
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1 bg-dark-primary z-50"
      ></div>
      <Sidebar
        section={section}
        isSidebarOpen={isSidebarOpen}
        handleNavigate={handleNavigate}
        toggleSidebar={toggleSidebar}
      />
      <main className="flex-1 w-full max-w-full px-2 sm:px-4 lg:px-6">
        <div className="bg-dark-surface px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 capitalize text-center">
            {sectionData?.title || "Rulebook"}
          </h2>
          <ContentRenderer sectionData={sectionData} />
        </div>
      </main>
    </div>
  );
};

export default Rulebook;
