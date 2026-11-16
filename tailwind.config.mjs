/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: '#E8C232',
        'gold-deep': '#C9A229',
        ink: '#111111',
        'ink-muted': '#5A554C',
        surface: '#F5F0E6',
        'surface-raised': '#FFFDF8',
        hairline: '#D9D9D9',
      },
      fontFamily: {
        display: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        script: ['Caveat', 'Segoe Script', 'cursive'],
      },
      borderRadius: {
        sm: '12px',
        md: '24px',
        pill: '999px',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
