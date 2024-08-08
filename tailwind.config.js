/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      cxl: "1450px",
      "2.5xl": "1550px",
      mdn: "890px",
      "3xl": "3000px",
      ...defaultTheme.screens,
    },

    extend: {
      backgroundImage: (theme) => ({
        "nav-pattern": "url('/navbg-p.png')",
        "footer-pattern": "url('/footer-bg.png')",
        "contact-bg": "url('/Contact_us_Gfx.svg')",
        "map-bg": "url('/mapbg.png')",
        "about-pattern": "url('/Graphic.png')",
        "grey-pattern": "url('/Grey.svg')",
        "blue-gradient": `linear-gradient(180deg, rgba(171, 47, 102, 0.5), rgba(0,0,0,0) 14.06%, rgba(31,39,252,0.3) 100%);`,
        "pink-gradient": `linear-gradient(180deg, rgba(234,122,0, 0.3), rgba(171, 47, 102, 0) 14.06%, rgba(171, 47, 102, 0.5) 100%);`,
        "orange-gradient":
          "linear-gradient(180deg,rgba(117, 31, 188, 0.1), rgb(15,15,15) 8.04%, rgba(234,122,0, 0.5), rgba(234,122,0, 0.3) 100%);",
        "purple-gradient": `linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(117, 31, 188, 0) 14.06%, rgba(117, 31, 188, 0.4) 100%)`,
      }),

      colors: {
        primary: "#FCE91F",
        hyperlink: "#0065BA",
      },
      screens: {
        xs: "450px",
        midlg: "940px",
      },
    },
  },
  plugins: [],
};
