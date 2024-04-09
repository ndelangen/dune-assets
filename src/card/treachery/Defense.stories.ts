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
    text: 'Play as part of your Battle Plan.\n\nProtects your leader from a projectile weapon in this battle.\n\nYou may keep this card if you win this battle.',
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
    text: 'Play as part of your Battle Plan.\n\nProtects your leader from a poison weapon in this battle.\n\nYou may keep this card if you win this battle.',
    subName: 'Defense - Poison',
  },
};

export const PortableSnooper: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/snooper.svg'],
    iconOffset: [0, 8],
    name: 'Portable Snooper',
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
    text: 'Play as part of your Battle Plan.\n\nCounts as a poison defense, unless played with another defense. In that case, it counts as a poison weapon.\n\nYou may keep this card if you win this battle.',
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
    text: 'Play as part of your Battle Plan.\nCounts as both a Shield (projectile defense) and Snooper (poison defense).\nYou may keep this card if you win this battle.',
    subName: 'Defense - Special',
  },
};

export const SandtroutMembrane: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/lightning.svg'],
    iconOffset: [0, 0],
    name: 'Sandtrout Membrane',
    decals: [
      {
        id: 'vector/decal/membrane.svg',
        muted: false,
        offset: [0, 40],
        outline: true,
        scale: 0.9,
      },
    ],
    text: 'Text goes here',
    subName: 'Defense - Special',
  },
};

export const DeflectiveShield: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/shield.svg'],
    iconOffset: [0, 8],
    name: 'Deflective Shield',
    decals: [
      {
        id: 'vector/decal/deflective-shield.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Defense - Special',
  },
};
