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
          50: '#FBF8FD',
          100: '#F5EEFC',
          200: '#EBDCFB',
          300: '#D9C1F8',
          400: '#B688F1',
          500: '#8B5CF6',
          600: '#7033E3',
          700: '#6020D0',
          800: '#4C18AA',
          900: '#38127E',
          deep: '#2E0E6B',
        },
        lavender: {
          light: '#F8F4FD',
          DEFAULT: '#F3EDFC',
          border: '#E8DCF7',
          dark: '#E0D0F5',
        },
        hope: {
          gold: '#F59E0B',
          amber: '#FBBF24',
          orange: '#F97316',
          rose: '#E11D48',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-purple': '0 8px 30px -4px rgba(109, 40, 217, 0.12)',
        'card-glow': '0 4px 20px -2px rgba(112, 51, 227, 0.08)',
        'float-nav': '0 -4px 25px 0 rgba(109, 40, 217, 0.08)',
      }
    },
  },
  plugins: [],
}
