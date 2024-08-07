// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom colors
        "bg-header": "#302718", // Background color for header
        "text-color": "#F5F5F5", // Text color
        "bg-banner": "#676053", // Background color for banner
        "accent-color": "#FF5722", // New custom color
        "primary-color": "#007BFF", // New custom color
        "secondary-color": "#6C757D", // New custom color
      },
      scrollBehavior: {
        smooth: "smooth",
      },
    },
  },
  plugins: [],
};
