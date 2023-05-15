module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "370px",
      // => @media (min-width: 370px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        olivine: {
          50: "#f9fbf8",
          100: "#f4f7f0",
          200: "#e3eada",
          300: "#d1ddc3",
          400: "#afc497",
          500: "#8daa6a",
          600: "#7f995f",
          700: "#6a8050",
          800: "#556640",
          900: "#455334",
        },
        gravel: {
          50: "#f6f6f6",
          100: "#ececed",
          200: "#d1d0d2",
          300: "#b5b4b7",
          400: "#7d7c81",
          500: "#45444b",
          600: "#3e3d44",
          700: "#343338",
          800: "#29292d",
          900: "#222125",
        },
        caper: {
          50: "#fdfdfb",
          100: "#fafcf6",
          200: "#f3f7ea",
          300: "#ebf3dd",
          400: "#dce9c3",
          500: "#cde0a9",
          600: "#b9ca98",
          700: "#9aa87f",
          800: "#7b8665",
          900: "#646e53",
        },
        loafer: {
          50: "#fefffe",
          100: "#fefefc",
          200: "#fbfdf8",
          300: "#f9fcf3",
          400: "#f5f9ea",
          500: "#f0f7e1",
          600: "#d8decb",
          700: "#b4b9a9",
          800: "#909487",
          900: "#76796e",
        },
        alabaster: {
          50: "#ffffff",
          100: "#fefefe",
          200: "#fefefe",
          300: "#fdfdfd",
          400: "#fbfbfb",
          500: "#f9f9f9",
          600: "#e0e0e0",
          700: "#bbbbbb",
          800: "#959595",
          900: "#7a7a7a",
        },
        "mine-shaft": {
          50: "#f5f5f5",
          100: "#ebebeb",
          200: "#cccccc",
          300: "#adadad",
          400: "#707070",
          500: "#333333",
          600: "#2e2e2e",
          700: "#262626",
          800: "#1f1f1f",
          900: "#191919",
        },
        "green-white": {
          50: "#fefefe",
          100: "#fdfdfc",
          200: "#f9fbf8",
          300: "#f6f8f3",
          400: "#eff3ea",
          500: "#e8eee1",
          600: "#d1d6cb",
          700: "#aeb3a9",
          800: "#8b8f87",
          900: "#72756e",
        },
        fontFamily: {
          body: [""],
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("daisyui")

  ],
};
