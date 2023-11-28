const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
     fontFamily: {
        sans: ["'Lora Variable'", 'Lora', "New York", ...defaultTheme.fontFamily.serif],
      },
      
      },
  },
  plugins: [require('@tailwindcss/typography')],
};
