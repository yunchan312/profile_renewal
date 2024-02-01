/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      lg: "1211px",
      md: "933px",
      sm: "647px",
      xs: "376px",
    },
    extend: {},
  },
};
