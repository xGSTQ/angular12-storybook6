module.exports = {
  "stories": [
    '../components/**/*.stories.ts',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions"
  ],
  "core": {
    "builder": "webpack5"
  }
};
