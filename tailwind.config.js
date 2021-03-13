module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: "Poppins, Arial, sans-serif",
      serif: "Poppins, Georgia, serif",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
