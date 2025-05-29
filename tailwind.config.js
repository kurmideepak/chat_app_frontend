/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ Fixed src path
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};

