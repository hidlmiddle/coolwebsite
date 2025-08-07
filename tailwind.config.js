/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        '40': '40px',
      },
      boxShadow: {
        frost: '0 8px 32px rgba(0, 0, 0, 0.37)',
        'frost-hover': '0 16px 48px rgba(0, 0, 0, 0.45)',
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
      backgroundImage: {
        'sheen': 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translate(-50%, -50%) rotate(-15deg)' },
          '100%': { transform: 'translate(50%, 50%) rotate(-15deg)' }
        }
      },
      animation: {
        shimmer: 'shimmer 10s linear infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
