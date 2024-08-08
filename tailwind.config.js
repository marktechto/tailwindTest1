/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        red: {
          800: "#991b1b",
        },
        brightRed: "hsl(12,88%,59%)",
        sky: {
          50: "#08fcec",
        },
        lightOrange: {
          500: "rgba(236, 96, 8, 0.9)",
        },
        lightBlue: {
          500: "rgb(4, 166, 247)",
        },
        gray: {
          300: "#06f0f1",
          50: "#c9c9c9",
        },
        brightRed: {
          50: "#ffe3e3",
          100: "#ffb8b8",
          200: "#ff8c8c",
          300: "#ff6060",
          400: "#ff3434",
          500: "#ff0808",
          600: "#cc0606",
          700: "#990404",
          800: "#660202",
          900: "#330101",
        },

        white: "#fff",
        greenLight: "#09fc05",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSupLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228,39,23%)",
        darkGrayishBlue: "hsl(227,12%,61%)",
        VerydarkBlue: "hsl(233,12%,23%)",
        VeryPaleRed: "hsl(13,100%,96%)",
        VeryLightGray: "hsl(0%,0%,98%)",
      },
    },
  },
  plugins: [],
};
