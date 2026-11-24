/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        paper2: '#EFEBE0',
        ink: '#192922',
        inksoft: '#4D5A53',
        muted: '#6B7280',
        line: '#DCE3DF',
        gold: '#38735C',
        goldsoft: '#D9AE5C',
        steel: '#2C6251',
        steelsoft: '#7E9BBD',
        card: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Inter', 'Segoe UI', 'sans-serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}