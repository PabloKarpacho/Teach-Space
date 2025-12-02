module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        figmaPrimary: "#1976d2",
        figmaBackground: "#f5f6fa",
        figmaGray: "#91929A",
        figmaAccent: "#5DC3B0",
        figmaPurple: "#7B7C87",
        figmaYellow: "#FEFEFE",
        figmaBlue: "#EEF1F4",
        figmaGreen: "#8F9097",
        figmaCard: "#FFFFFF",
      },
      borderRadius: {
        figma: "22px",
        figmaSm: "8.75px",
        figmaMd: "19.5px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        figma: "0 4px 24px 0 rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
