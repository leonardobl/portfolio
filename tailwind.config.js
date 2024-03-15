/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "purple-100": "#7B4AE2",
      "purple-10": "rgba(123,74, 226, 0.1)",
      "purple-20": "rgba(123,74, 226, 0.2)",
      "withe-100": "#FFFFFF",
      "withe-50": "rgba(255,255, 255, 0.5)",
      dark: "#090E16",
      "green-100": "#4AE290",
      "green-30": "rgba(74,256, 144, 0.3)",
    },

    extend: {},
  },
  plugins: [],
};
