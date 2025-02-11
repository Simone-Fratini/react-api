/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.07)', opacity: '0.7' },
        },
      },
      animation: {
        pulseScale: 'pulseScale 1.2s ease-in-out 1',
      },
    },
  },
  plugins: [],
}

