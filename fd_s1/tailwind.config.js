/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#395F2D',
        'secondary': '#4C7E3A',
        'complementary': '#4D1A4E',
      },
      fontFamily: {
        'gotham': ['Gotham', 'sans-serif'],
      }
    },
  },
  plugins: ["tailwindcss", "postcss-nesting", "autoprefixer"],
}
