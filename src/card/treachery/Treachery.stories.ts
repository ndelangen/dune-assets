import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lasgun: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/lightning.svg'],
    name: 'Lasgun',
    decals: [
      {
        id: 'vector/decal/lasgun.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Special',
  },
};

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
    subName: 'Defense - Projectile',
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
    subName: 'Defense - Projectile',
  },
};

export const WeirdingWay: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/projectile.svg'],
    name: 'Weirding Way',
    decals: [
      {
        id: 'vector/decal/weirdingway-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1.05,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Special',
  },
};

export const BasiliaWeapon: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    name: 'Weirding Way',
    decals: [
      {
        id: 'vector/decal/basilia.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Poison',
  },
};
