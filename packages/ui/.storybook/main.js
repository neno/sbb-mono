module.exports = {
  stories: ["../src/**/*.stories.js"],
  presets: ["@storybook/preset-scss"],
  addons: [
    "@storybook/addon-a11y/register",
    "@whitespace/storybook-addon-html/register",
    "@storybook/addon-viewport/register",
  ],
}
