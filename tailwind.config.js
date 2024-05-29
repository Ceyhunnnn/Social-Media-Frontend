/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-30": "#ECF0F5",
        "gray-40": "#E2E8F0",
        "gray-50": "#5D6778",
        "black-30": "#838B98",
        "black-60": "#4B5669",
        "black-80": "#27364B",
        "black-90": "#0C1024",
        "blue-90": "#4C68D5",
        "white-10": "#FAFBFF",
      },
      borderRadius: {
        normal: "8px",
      },
    },
  },
  plugins: [],
};
