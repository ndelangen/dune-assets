import { addons } from 'storybook/internal/manager-api';
import { create } from 'storybook/internal/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    appPreviewBg: '#333333',
  }),
});
