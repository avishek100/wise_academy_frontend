module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Include your project files
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Custom colors
        secondary: '#FACC15',
      },
    },
  },
  plugins: [require("daisyui")],
};



