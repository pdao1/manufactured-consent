/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  daisyui: {
    themes: ['light', 'dark', 'night'],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
