module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        royal: "#0E6B63",
        "royal-dark": "#0B4F46",
        gold: "#D4AF37",
        lightgray: "#F5F5F5",
      },
      fontFamily: {
        poppins: ["Cormorant Garamond", "serif"],
        inter: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
