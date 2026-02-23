import preview from '../../.storybook/preview';
import { FactionSynopsis } from './FactionSynopsis';

const meta = preview.meta({
  component: FactionSynopsis,
  args: {},
});

export const Default = meta.story({
  args: {
    image: '/generated/token/faction/choam.jpg',
    children: 'Hello',
    flip: false,
  },
});

export const Flipped = meta.story({
  args: {
    image: '/generated/token/faction/choam.jpg',
    children: 'Hello',
    flip: true,
  },
});
