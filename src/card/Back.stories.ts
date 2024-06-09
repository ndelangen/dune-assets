import type { Meta, StoryObj } from '@storybook/react';
import { CardBack } from './Back';

const meta = {
  component: CardBack,
} satisfies Meta<typeof CardBack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Traitor: Story = {
  args: {
    name: 'Traitor',
    background: '/generated/utils/background/traitor.jpg',
    image: 'vector/icon/traitor.svg',
    imageOffset: [0, 10],
    imageScale: 1.1,
  },
};

export const Treachery: Story = {
  args: {
    name: 'Treachery',
    background: '/generated/utils/background/alliance.jpg',
    image: 'vector/icon/treachery.svg',
    imageOffset: [-3, 5],
    imageScale: 1,
  },
};

export const Prediction: Story = {
  args: {
    name: 'Prediction',
    background: '/generated/utils/background/defense.jpg',
    image: 'vector/logo/bene-gesserit.svg',
    imageOffset: [-3, 5],
    imageScale: 1,
  },
};

export const Storm: Story = {
  args: {
    name: 'Storm',
    background: '/generated/utils/background/storm.jpg',
    image: 'vector/icon/storrm_standalone.svg',
    imageOffset: [0, 5],
    imageScale: 0.8,
  },
};

export const Fate: Story = {
  args: {
    name: 'Fate',
    background: '/generated/utils/background/fate.jpg',
    image: 'vector/icon/fate.svg',
    imageOffset: [0, -5],
    imageScale: 1,
  },
};

export const Spice: Story = {
  args: {
    name: 'Spice',
    background: '/generated/utils/background/spice-3.jpg',
    image: 'vector/icon/spice.svg',
    imageOffset: [0, 10],
    imageScale: 1,
  },
};

export const Alliance: Story = {
  args: {
    name: 'Alliance',
    background: '/generated/utils/background/alliance.jpg',
    image: 'vector/icon/alliance.svg',
    imageOffset: [-5, 20],
    imageScale: 1.35,
  },
};
