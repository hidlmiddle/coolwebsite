/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        glass: {
          rose: '#FFF1F2',
          mint: '#F0FDF4',
          lavender: '#F5F3FF',
        },
      },
      backdropBlur: {
        '4xl': '72px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        glass: '0 8px 32px -4px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 16px 48px -8px rgba(0, 0, 0, 0.15)',
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      transitionTimingFunction: {
        'glass': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
