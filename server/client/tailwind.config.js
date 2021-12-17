const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1B2431",
        secondary: "#EB89D0FC",
        tertiary: "#1E488F",
        green: colors.emerald,
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        poppins: ["poppins"]
      }
    },
  },
  variants: {
    backgroundColor: ["active"],
    width: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};
