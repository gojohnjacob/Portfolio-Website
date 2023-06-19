/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["DM Sans", "sans-serif"],
        titleFont: ["Quicksand", "sans-serif"],
        logoFont: ["Shippori Mincho", "serif"]
      },
      colors: {
        bodyColor: "#fbfcf8",
        designColor: "#3cbdb2",
      },
      keyframes: {
            rotateAnimation: {
              'from': {
                transform: 'rotate(0deg)',
              },
              'to': {
                transform: 'rotate(90deg)',
              },
            }
      },
    },
  },
  plugins: [],
};