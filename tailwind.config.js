const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./{components,contexts,hooks,pages,utils}/**/*.{js,cjs,mjs,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        juno: { DEFAULT: 'rgb(231 161 73)' },
        dark: { DEFAULT: '#06090B' },
        gray: { DEFAULT: '#F3F6F8' },
        'dark-gray': { DEFAULT: '#191D20' },
        purple: { DEFAULT: '#7E5DFF' },

        neutral: colors.neutral,
        plumbus: {
          DEFAULT: 'hsl(33deg 77% 60%)',
          light: 'hsl(33deg 77% 60%)',
          matte: 'hsl(33deg 77% 60%)',
          dark: 'hsl(33deg 77% 60%)',
          10: 'hsl(33deg 77% 100%)',
          20: 'hsl(33deg 77% 95%)',
          30: 'hsl(33deg 77% 90%)',
          40: 'hsl(33deg 77% 80%)',
          50: 'hsl(33deg 77% 70%)',
          60: 'hsl(33deg 77% 60%)',
          70: 'hsl(33deg 68% 51%)',
          80: 'hsl(33deg 57% 40%)',
          90: 'hsl(33deg 47% 30%)',
          100: 'hsl(33deg 37% 20%)',
          110: 'hsl(33deg 27% 15%)',
          120: 'hsl(33deg 17% 10%)',
        },
        twitter: { DEFAULT: '#1DA1F2' },
      },
      fontFamily: {
        heading: ["'Basement Grotesque'", ...defaultTheme.fontFamily.sans],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },

  plugins: [
    // tailwindcss official plugins
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/line-clamp'),

    // custom gradient background
    plugin(({ addUtilities }) => {
      addUtilities({
        '.juno-gradient-bg': {
          background: `linear-gradient(63.38deg, rgba(231, 161, 73, 0.25) 45.06%, rgba(231, 161, 73, 0.25) 100.6%), rgba(231, 161, 73, 0.25)`,
        },
        '.juno-gradient-brand': {
          background: `linear-gradient(102.33deg, rgb(231 161 73) 10.96%, #FFFFFF 93.51%)`,
        },
      })
    }),
  ],
}
