/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-pink': '#FE3DE3',
        'brand-green': '#C7F820',
        'brand-purple': '#763fcf',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
