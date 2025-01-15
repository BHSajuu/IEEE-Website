// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to your file paths
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#87A2FF', // Add your custom color
        'custom-blue2': '#152972',
        'custom-color3': '#6594c9',
        'custom-color4': '#001F3F',
      },
    },
  },
  plugins: [],
}
