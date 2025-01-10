module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#121212", // Dark background
          surface: "#1E1E1E",    // Slightly lighter for surfaces
          primary: "#BB86FC",   // Soft purple for primary accents
          secondary: "#03DAC6", // Teal for secondary accents
          error: "#CF6679",     // Red for errors
          textPrimary: "#FFFFFF", // Main text color
          textSecondary: "#B0B0B0", // Secondary text color
          border: "#333333", // A contrasting border color
          highlight: "#505050", // For subtle highlights
          field: "#1A1A1A"
        },
      },
    },
  },
  plugins: [],
};
