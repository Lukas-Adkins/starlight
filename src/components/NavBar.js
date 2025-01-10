import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { HomeIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-menu") && !event.target.closest(".menu-button")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setTimeout(() => {
        navigate("/login");
      }, 300);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
<header className="bg-dark-background p-2 shadow-md z-50 w-full lg:relative lg:top-auto lg:left-auto">
<div className="container mx-auto flex justify-between items-center h-auto">
        {/* Left Side: Home Icon */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-dark-textSecondary hover:text-dark-primary transition">
            <HomeIcon className="h-8 w-8" />
          </Link>
        </div>

        {/* Center Section: Links */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link
            to="/rulebook/introduction"
            className={`text-lg font-semibold px-4 py-2 rounded-lg transition ${
              location.pathname.startsWith("/rulebook")
                ? "bg-dark-primary text-dark-textPrimary shadow-lg"
                : "text-dark-textSecondary hover:bg-dark-surface"
            }`}
          >
            Rulebook
          </Link>

          <Link
            to="/items"
            className={`text-lg font-semibold px-4 py-2 rounded-lg transition ${
              isActive("/items")
                ? "bg-dark-primary text-dark-textPrimary shadow-lg"
                : "text-dark-textSecondary hover:bg-dark-surface"
            }`}
          >
            Items
          </Link>

          <Link
            to="/characters"
            className={`text-lg font-semibold px-4 py-2 rounded-lg transition ${
              isActive("/characters")
                ? "bg-dark-primary text-dark-textPrimary shadow-lg"
                : "text-dark-textSecondary hover:bg-dark-surface"
            }`}
          >
            Characters
          </Link>
        </nav>

        {/* Right Side: Mobile Menu Button and Login/Logout */}
        <div className="flex items-center space-x-4 lg:space-x-0 relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-button lg:hidden text-dark-textSecondary hover:text-dark-primary transition"
          >
            <MenuIcon className="h-8 w-8" />
          </button>

          <div className="hidden lg:block">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-dark-error px-4 py-2 rounded-md hover:bg-dark-highlight text-dark-textPrimary transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className={`bg-dark-primary px-4 py-2 rounded-md hover:bg-dark-highlight transition ${
                  isActive("/login") ? "text-dark-textPrimary font-bold" : "text-dark-textPrimary"
                }`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="dropdown-menu absolute top-12 right-0 w-64 bg-dark-surface shadow-lg rounded-lg p-4 z-60 space-y-2"
              >
                <Link
                  to="/rulebook/introduction"
                  onClick={() => setMenuOpen(false)}
                  className={`block text-left text-lg font-semibold px-4 py-2 rounded-lg border transition ${
                    location.pathname.startsWith("/rulebook")
                      ? "bg-dark-primary text-dark-textPrimary shadow-lg border-dark-primary"
                      : "text-dark-textSecondary hover:bg-dark-background border-transparent"
                  }`}
                >
                  Rulebook
                </Link>

                <Link
                  to="/items"
                  onClick={() => setMenuOpen(false)}
                  className={`block text-left text-lg font-semibold px-4 py-2 rounded-lg border transition ${
                    isActive("/items")
                      ? "bg-dark-primary text-dark-textPrimary shadow-lg border-dark-primary"
                      : "text-dark-textSecondary hover:bg-dark-background border-transparent"
                  }`}
                >
                  Items
                </Link>

                <Link
                  to="/characters"
                  onClick={() => setMenuOpen(false)}
                  className={`block text-left text-lg font-semibold px-4 py-2 rounded-lg border transition ${
                    isActive("/characters")
                      ? "bg-dark-primary text-dark-textPrimary shadow-lg border-dark-primary"
                      : "text-dark-textSecondary hover:bg-dark-background border-transparent"
                  }`}
                >
                  Characters
                </Link>

                {user ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full bg-dark-error text-left text-lg font-semibold px-4 py-2 rounded-lg border transition hover:bg-dark-highlight text-dark-textPrimary border-transparent"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className={`block w-full bg-dark-surface text-left text-lg font-semibold px-4 py-2 rounded-lg border transition hover:bg-dark-highlight ${
                      isActive("/login") ? "text-dark-textPrimary font-bold border-dark-primary" : "text-dark-textPrimary border-transparent"
                    }`}
                  >
                    Login
                  </Link>
                )}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
