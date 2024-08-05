/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "green-clr": "#015B6C",
        "blue-clr": "#2AD6FF",
        "black-clr": "#1B1B1B",
        "yellow-clr": "#F8EE00",
        "grey-clr": "#535353",
        "light-grey-clr": "#E9ECEC",
        "red-clr": "#FF4444",
        "red-soft-clr": "#FFF3F3",
      },
    },
  },
  plugins: [require("daisyui")],
};
