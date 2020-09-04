// module.exports = {
//     stories: ['../src/**/*.stories.js'],
//     presets: ['@storybook/preset-scss'],
//     addons: [
//       '@storybook/addon-a11y/register',
//       '@whitespace/storybook-addon-html/register',
//     //   '@storybook/addon-actions/register',
//     //   '@storybook/addon-knobs/register',
//     //   '@storybook/addon-docs',
//       '@storybook/addon-viewport/register',
//     ],
//   };
module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    presets: ['@storybook/preset-scss'],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@whitespace/storybook-addon-html/register"
    ]
}
