import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030b17',
          900: '#06162d',
          850: '#091e3d',
          800: '#0c274f',
          700: '#133970',
        },
        sky: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        primary: {
          navy: '#06162d',
          blue: '#38bdf8',
          accent: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(-4px) rotate(0deg) scale(1.015)' },
          '20%': { transform: 'translateY(-5px) rotate(-1.5deg) scale(1.02)' },
          '40%': { transform: 'translateY(-6px) rotate(1.5deg) scale(1.02)' },
          '60%': { transform: 'translateY(-5px) rotate(-0.8deg) scale(1.02)' },
          '80%': { transform: 'translateY(-5px) rotate(0.8deg) scale(1.02)' },
          '100%': { transform: 'translateY(-5px) rotate(0deg) scale(1.02)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
