/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0f172a",
        "secondary-color": "#1e293b",
        "third-color": "#334155",
        primary: "#fafaf9",
        secondary: "#a3a3a3",
      },
    },
  },
  plugins: [],
};
