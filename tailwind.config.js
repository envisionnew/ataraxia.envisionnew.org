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
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        "link-blue": "#3B719F",
        "link-purple": "#8F8CE7",
        "purple-headers": "#6865a1",
        "purple-headers-dark": "#bcb1d3",
        "gray-custom": "#474747",
        "gray-750": "#374151",
      },
      spacing: {
        55: "55%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
