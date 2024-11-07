import { addDynamicIconSelectors } from '@iconify/tailwind'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        success: colors.green,
        warning: colors.amber,
        error: colors.red,
        primary: {
          50: '#f0f8ff',
          100: '#dbeeff',
          150: '#c7e4ff',
          200: '#b3daff',
          250: '#9aceff',
          300: '#80c1ff',
          350: '#60b1ff',
          400: '#3da1ff',
          450: '#238aef',
          500: '#0072de',
          550: '#006cd2',
          600: '#0067c7',
          650: '#0060ba',
          700: '#005aad',
          750: '#00529e',
          800: '#004a8f',
          850: '#003e78',
          900: '#003261',
          950: '#00284d',
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
    },
  },
  plugins: [addDynamicIconSelectors()],
}
export default config
