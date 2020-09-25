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
