const defaulTheme = require("tailwindcss/defaultTheme")
module.exports = {
  theme: {
    extend: {
      colors: {
        black: "#1E1A1D",
        tan: "#F0DBC8",
        secondary: "#111E6C",
        primary: {
          default: "#ff0844",
          "100": "#DC0134",
          "200": "#FD2053",
          "300": "#E51C4B",
          "400": "#E25C7B",
        },
        ice: {
          "100": "#E3EBFF",
          "200": "#B9CCFB",
          "300": "#91ADF3",
          "400": "#6E90E5",
        },
      },
      fontFamily: {
        sans: ["Barlow Condensed", ...defaulTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
