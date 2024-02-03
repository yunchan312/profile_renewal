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
    extend: {
      keyframes: {
        techSlider: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        slider: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slider: "slider 10s linear infinite",
        techSlider: "techSlider 10s linear infinite",
        textSlider: "slider 40s linear infinite",
      },
    },
  },
};
