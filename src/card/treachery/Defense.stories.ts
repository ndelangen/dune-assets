import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shield: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/shield.svg'],
    iconOffset: [0, 8],
    name: 'Shield',
    decals: [
      {
        id: 'vector/decal/shield.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Defense - Projectile',
  },
};

export const Snooper: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/snooper.svg'],
    iconOffset: [0, 8],
    name: 'Snooper',
    decals: [
      {
        id: 'vector/decal/snooper.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.5,
      },
    ],
    text: 'Text goes here',
    subName: 'Defense - Poison',
  },
};

export const PortableSnooper: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/snooper.svg'],
    iconOffset: [0, 8],
    name: 'Snooper',
    decals: [
      {
        id: 'vector/decal/portable-snooper.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Defense - Poison - Special',
  },
};

export const Chemistry: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/snooper.svg'],
    iconOffset: [0, 8],
    name: 'Chemistry',
    decals: [
      {
        id: 'vector/decal/chemistry-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1.05,
      },
    ],
    text: 'Text goes here',
    subName: 'Defense - Poison - Special',
  },
};

export const ShieldSnooper: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/lightning.svg'],
    iconOffset: [0, 0],
    name: 'ShieldSnooper',
    decals: [
      {
        id: 'vector/decal/shield-snooper.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Defense - Special',
  },
};
