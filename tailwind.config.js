module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#121212",  // Dark background
          surface: "#1E1E1E",     // Slightly lighter surface
          primary: "#7E4BBE",     // Soft purple for primary accents
          secondary: "#4CAF50",   // Muted green for secondary accents
          error: "#CF6679",       // Red for errors
          textPrimary: "#E0E0E0", // Light text for better contrast
          textSecondary: "#B0B0B0", // Muted secondary text
          border: "#333333",      // Contrasting border color
          highlight: "#444444",   // A slightly muted highlight for subtle emphasis
          field: "#1A1A1A",       // A slightly lighter shade for input fields
          primaryHover: "#6A3FA4", // Darker purple for hover
        },
      },
    },
  },
  plugins: [],
};
