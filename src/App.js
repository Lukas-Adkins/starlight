import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "./pages/LoginPage";
import Inventory from "./components/Inventory";
import Characters from "./components/CharacterSelection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StarlightTable from "./components/StarlightTable";
import Rulebook from "./components/Rulebook";

import './index.css';

// Initialize React Query's QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-dark-background text-dark-textPrimary">
            <NavBar />
            <main className="flex-grow container mx-auto p-4">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/rulebook/:section"
          element={
            <PageFastTransition>
              <Rulebook />
            </PageFastTransition>
          }
        />
        <Route
          path="/login"
          element={
            <PageTransition>
              <LoginPage />
            </PageTransition>
          }
        />
        <Route
          path="/items"
          element={
            <PageTransition>
                <StarlightTable />
            </PageTransition>
          }
        />
        <Route
          path="/inventory/:characterId"
          element={
            <PageTransition>
              <ProtectedRoute>
                <Inventory />
              </ProtectedRoute>
            </PageTransition>
          }
        />
        <Route
          path="/characters"
          element={
            <PageTransition>
              <ProtectedRoute>
                <Characters />
              </ProtectedRoute>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function PageFastTransition({ children }) {
  return (
    <motion.div
      key={children?.key || "default-transition-key"} // Fallback for missing keys
      initial={{ opacity: 0, translateX: -10 }} // Use GPU-accelerated transform
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 10 }}
      transition={{
        duration: 0.25, // Slightly slower for better perception
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for a smoother curve
      }}
    >
      {children}
    </motion.div>
  );
}

function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-background text-dark-textPrimary">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">Welcome to Starlight!</h1>
        <p className="text-lg text-dark-textSecondary mb-8">
          Starlight is your go-to tool for exploring the Starlight setting and game system.
        </p>
      </div>
      <div className="mt-12">
        <a
          href="/items"
          className="px-6 py-3 bg-dark-primary text-dark-textPrimary text-lg rounded hover:bg-dark-highlight transition-colors"
        >
          Explore Items
        </a>
      </div>
    </div>
  );
}

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Show a loading spinner while the auth state is being determined
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-background text-dark-textPrimary">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-dark-primary"></div>
      </div>
    );
  }

  // Redirect to login page if not logged in
  if (!user) {
    return <Navigate to="/login" state={{ message: "Please log in to access this page." }} />;
  }

  return children;
};

export default App;
