module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          // Base Structure
          background: "#0A0A0F",
          surface: "#12141A",
          card: "#181B23",
          field: "#232834",
          border: "#4A4F5C",
          divider: "#31353F",
          // Add this to your `dark` theme object:
          highlight: "#2B303B",

          // Primary Accent (Refined Rich Blue)
          primary: "#2A45C2",
          primaryHover: "#3D5BE0",
          focus: "#5A77FF",

          // Secondary Accent (Industrial Orange)
          secondary: "#E65C00",
          secondaryHover: "#FF7A33",
          hoverBg: "#2A2F3B",

          // Text
          textPrimary: "#E6E8EB",
          textSecondary: "#B5BAC3",
          textMuted: "#7F838C",
          header: "#FFFFFF",

          // Alerts
          error: "#9B2C39",      // Crimson
          success: "#28A745",    // Green light
          info: "#209CEE",       // Diagnostic blue
          warning: "#FFC107",    // Yellow alert

          // Overlays (optional)
          overlay: "rgba(0, 0, 0, 0.6)",
          hoverOverlay: "rgba(255, 255, 255, 0.05)",
        },
      },
    },
  },
  plugins: [],
};
