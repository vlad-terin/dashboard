const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  "plugins": ["prettier-plugin-tailwindcss"],
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
