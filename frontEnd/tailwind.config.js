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
        dark: {
          1: '#1C1F2E',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
        },
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-2px, -2px)' },
          '40%': { transform: 'translate(2px, 2px)' },
          '60%': { transform: 'translate(-2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glitchShadow: {
          '0%, 100%': { clipPath: 'polygon(0 2%, 100% 0%, 100% 90%, 0% 100%)' },
          '50%': { clipPath: 'polygon(10% 10%, 90% 0%, 100% 80%, 10% 90%)' },
        },
      },
      animation: {
        glitch: 'glitch 1.5s infinite',
        glitchShadow: 'glitchShadow 1.5s infinite',
      },
    },
  },
  plugins: [],
};
