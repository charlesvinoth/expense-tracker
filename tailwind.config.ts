import { addDynamicIconSelectors } from '@iconify/tailwind'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#09a593',
          50: '#f0fdfa',
          100: '#cafdf1',
          200: '#96f9e3',
          300: '#59efd3',
          400: '#27dabe',
          500: '#0ebea5',
          600: '#09a593',
          700: '#0b7a6e',
          800: '#0e6159',
          900: '#11504a',
          950: '#03302e',
        },
        secondary: {
          DEFAULT: '#f9a748',
          50: '#fff6eb',
          100: '#fde6c8',
          200: '#fbcc8c',
          300: '#f9a748',
          400: '#f88e27',
          500: '#f1690f',
          600: '#d64809',
          700: '#b12d0c',
          800: '#902410',
          900: '#761e11',
          950: '#440b04',
        },
        tertiary: {
          DEFAULT: '#f15d3b',
          50: '#fef3ee',
          100: '#fde3d7',
          200: '#fac3ae',
          300: '#f69a7b',
          400: '#f15d3b',
          500: '#ee3f21',
          600: '#df2617',
          700: '#b91a15',
          800: '#93191b',
          900: '#771717',
          950: '#400a0c',
        },
        gray: {
          50: 'rgb(var(--gray-50))',
          75: 'rgb(var(--gray-75))',
          100: 'rgb(var(--gray-100))',
          150: 'rgb(var(--gray-150))',
          200: 'rgb(var(--gray-200))',
          250: 'rgb(var(--gray-250))',
          300: 'rgb(var(--gray-300))',
          350: 'rgb(var(--gray-350))',
          400: 'rgb(var(--gray-400))',
          450: 'rgb(var(--gray-450))',
          500: 'rgb(var(--gray-500))',
          550: 'rgb(var(--gray-550))',
          600: 'rgb(var(--gray-600))',
          650: 'rgb(var(--gray-650))',
          700: 'rgb(var(--gray-700))',
          750: 'rgb(var(--gray-750))',
          800: 'rgb(var(--gray-800))',
          850: 'rgb(var(--gray-850))',
          900: 'rgb(var(--gray-900))',
          950: 'rgb(var(--gray-950))',
        },
      },
      keyframes: {
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeRight: {
          from: { opacity: '0', transform: 'translateX(-100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeLeft: {
          from: { opacity: '0', transform: 'translateX(100%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeDown: 'fadeDown 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        fadeUp: 'fadeUp 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        fadeRight: 'fadeRight 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        fadeRightSlow: 'fadeRight 600ms cubic-bezier(0.4, 0, 0.2, 1)',
        fadeLeft: 'fadeLeft 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        float: 'float 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
}
export default config
