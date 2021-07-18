const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        pink: colors.pink,
        rose: colors.rose,
        teal: colors.teal,
        fuchsia: colors.fuchsia,
        "link-blue": "#3B719F",
        "link-purple": "#8F8CE7",
        "gray-custom": "#474747",
      },
      spacing: {
        55: "55%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
