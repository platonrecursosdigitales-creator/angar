/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          dark: 'var(--brand-dark)',
        },
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--font-main)', 'sans-serif'],
      },
      backgroundColor: {
        main: 'var(--bg-main)',
        soft: 'var(--bg-soft)',
        alt: 'var(--bg-alt)',
      },
      textColor: {
        main: 'var(--text-main)',
        muted: 'var(--text-muted)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
      }
    },
  },
  plugins: [],
}
