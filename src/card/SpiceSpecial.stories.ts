import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './treachery/Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShaiHulud: Story = {
  args: {
    name: 'Shai-Hulud',
    subName: 'Event',
    icon: ['/generated/utils/background/striped-spice.jpg', 'vector/icon/shai-hulud.svg'],
    iconOffset: [0, 20],
    iconScale: 1.3,
    decals: [
      {
        id: 'vector/decal/shai-hulud-plus.svg',
        muted: false,
        outline: false,
        scale: 1,
        offset: [0, 0],
      },
      {
        id: 'vector/decal/shai-hulud.svg',
        muted: false,
        outline: true,
        scale: 0.9,
        offset: [-14, 0],
      },
    ],
    head: '/generated/utils/background/spice-2.jpg',
    text: `lalala`,
  },
};

export const SandTrout: Story = {
  args: {
    name: 'Sand Trout',
    subName: 'Event',
    icon: ['/generated/utils/background/striped-spice.jpg', 'vector/icon/shai-hulud.svg'],
    iconOffset: [0, 20],
    iconScale: 1.3,
    decals: [
      {
        id: 'vector/decal/sandtrout.svg',
        muted: false,
        outline: false,
        scale: 1,
        offset: [-14, 0],
      },
    ],
    head: '/generated/utils/background/spice-2.jpg',
    text: `lalala`,
  },
};

export const GreatMaker: Story = {
  args: {
    name: 'Great Maker',
    subName: 'Event',
    icon: ['/generated/utils/background/striped-spice.jpg', 'vector/icon/shai-hulud.svg'],
    iconOffset: [0, 20],
    iconScale: 1.3,
    decals: [
      {
        id: 'vector/decal/great-maker.svg',
        muted: false,
        outline: false,
        scale: 1,
        offset: [0, 10],
      },
    ],
    head: '/generated/utils/background/spice-2.jpg',
    text: `lalala`,
  },
};
