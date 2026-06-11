import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jae-black': '#000000',
        'jae-white': '#FFFFFF',
        'jae-cyan': '#2CD5C4',
        'jae-yellow': '#F5AC13',
        'jae-green': '#22C55E',
        'jae-red': '#EF4444',
        'jae-dark-gray': '#1F2937',
        'jae-light-gray': '#374151',
      },
      fontFamily: {
        'comfortaa': ['Comfortaa', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
