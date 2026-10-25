/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#05070d',
          900: '#090d18',
          850: '#0e1424',
          800: '#131b30',
          750: '#19233f',
          700: '#202e52',
        },
        electric: {
          purple: '#9333ea',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          teal: '#14b8a6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.18) 0%, rgba(59, 130, 246, 0.12) 35%, transparent 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(22, 29, 49, 0.8) 0%, rgba(13, 17, 31, 0.95) 100%)',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.3))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.5))' },
        }
      }
    },
  },
  plugins: [],
}
