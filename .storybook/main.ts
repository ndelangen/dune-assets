import { defineMain } from '@storybook/react-vite/node';

export default defineMain({
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-vitest'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  staticDirs: [
    '../public',
    {
      from: '../generated',
      to: 'generated',
    },
  ],
});
