/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@pxtrn/storybook-addon-docs-stencil'],

    framework: {
        name: '@storybook/html-webpack5',
        options: {},
    }
};
export default config;
