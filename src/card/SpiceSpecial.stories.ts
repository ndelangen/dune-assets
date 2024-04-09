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
    text: `Place a Shai-Hulud in the territory on top of this spice blow discard pile. At the end of the Spice Blow Phase, this Shai-Hulud kills all forces and destroys all spice in its territory. Keep drawing spice blow cards until until there spice blow or mine card on top of both discard piles, then a nexus occurs.`,
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
    text: `Cancel all current alliances. Set this card aside and draw a replacement card.\nThe next time a Shai-Hulud card is drawn (either this turn or subsequent turn), it is discarded without effect, and a new Spice Card is drawn, doubling any Spice Blow.`,
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
    text: `Treat the Great Maker as a Shai-Hulud card, with the following exceptions:\n• All players vote (in storm order) to determine if a Nexus occurs. The majority wins. A tie means no Nexus.\n• Fremen may use any number of their reserves to Ride the Worm.`,
  },
};
