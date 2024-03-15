/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "purple-100": "#7B4AE2",
      "purple-10": "rgba(123,74, 226, 0.1)",
      "purple-5": "rgba(123,74, 226, 0.05)",
      "purple-50": "rgba(123,74, 226, 0.5)",
      "purple-20": "rgba(123,74, 226, 0.2)",
      "withe-100": "#FFFFFF",
      "withe-50": "rgba(255,255, 255, 0.5)",
      dark: "#090E16",
      "green-100": "#4AE290",
      "green-30": "rgba(74,256, 144, 0.3)",
    },
    spacing: {
      1: "1rem", //16px
      1.5: "1.5rem", //24px
      2: "2rem", //32px
      2.5: "2.5rem", //40px
      3: "3rem", //48px
      4: "4rem", //64px
      5: "5rem", //80px
      6: "6rem", //96px
    },

    extend: {},
  },
  plugins: [],
};
