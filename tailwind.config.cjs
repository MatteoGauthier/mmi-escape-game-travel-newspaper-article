const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
     fontFamily: {
        serif: ["'Lora Variable'", 'Lora', "New York", ...defaultTheme.fontFamily.serif],
      },
      
      },
  },
  plugins: [require('@tailwindcss/typography')],
};
