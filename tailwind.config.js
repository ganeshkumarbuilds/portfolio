/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F4EE',
        paper2: '#EFEBE0',
        ink: '#15233E',
        inksoft: '#3C4A63',
        muted: '#6B7280',
        line: '#D8D3C4',
        gold: '#B8862E',
        goldsoft: '#D9AE5C',
        steel: '#3E6394',
        steelsoft: '#7E9BBD',
        card: '#FCFBF7',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}