/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(223, 87%, 63%)",
        },
        secondary: {
          paleBlue: "hsl(223, 100%, 88%)",
          lightRed: "hsl(354, 100%, 66%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 59%)",
          veryDarkBlue: "hsl(209, 33%, 12%)",
        },
      },
      fontFamily: {
        libre: ['"Libre Franklin"', "sans-serif"],
      },
      fontSize: {
        body: "1.25rem", // 20px
      },
      boxShadow: {
        custom: "0px 2px 10px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
