module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#222831",
      white: "#ffffff",
      transparent: "transparent",
      currentColor: "currentColor",
      slate: "#393E46",
      teal: "#00ADB5",
      grey: "#EEEEEE",
    },
    fontFamily: {
      display: ['"Open Sans"', "sans-serif"],
      mono: ['"Roboto Mono"', "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
