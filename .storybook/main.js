import { defineMain } from '@storybook/web-components-vite/node';

export default defineMain({
    framework: '@storybook/web-components-vite',
    stories: ['../src/**/*.stories.@(js|ts|mdx)'],
    core: {
        disableTelemetry: true,
    },
});