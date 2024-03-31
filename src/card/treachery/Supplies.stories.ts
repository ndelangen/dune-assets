import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErnocSeed: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    iconOffset: [0, 0],
    name: 'Ernoc Seed!',
    decals: [
      {
        id: 'vector/decal/flagella.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Leader',
  },
};

export const Trishula: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/projectile.svg'],
    iconOffset: [0, 0],
    name: 'Trishula!',
    decals: [
      {
        id: 'vector/decal/thumper-alt.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Leader',
  },
};

export const PhrinePen: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/poison.svg'],
    iconOffset: [0, 8],
    name: 'Phrine Pen!',
    decals: [
      {
        id: 'vector/decal/injection.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Leader',
  },
};

export const Shield: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/shield.svg'],
    iconOffset: [0, 8],
    name: 'Shield!',
    decals: [
      {
        id: 'vector/decal/target.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Leader',
  },
};
