module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text": "#fadf9b",
      },
      fontSize: {
        "3.5xl": "2rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
