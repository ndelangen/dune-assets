import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
  globals: {
    viewport: {
      value: 'card',
    },
  },
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Baliset: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-worthless.jpg`, 'vector/icon/worthless.svg'],
    iconOffset: [0, 1],
    name: 'Baliset',
    decals: [
      {
        id: 'vector/decal/baliset.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Play as part of your Battle Plan, in place of a weapon, defense, or both.\nThis card has no value in play, and you can discard it only by playing it in your Battle Plan.',
    subName: 'Worthless',
  },
};

export const JubbaCloak: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-worthless.jpg`, 'vector/icon/worthless.svg'],
    iconOffset: [0, 1],
    name: 'Jubba Cloak',
    decals: [
      {
        id: 'vector/decal/jubba-cloak.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Play as part of your Battle Plan, in place of a weapon, defense, or both.\nThis card has no value in play, and you can discard it only by playing it in your Battle Plan.',
    subName: 'Worthless',
  },
};

export const KullWahad: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-worthless.jpg`, 'vector/icon/worthless.svg'],
    iconOffset: [0, 1],
    name: 'Kull Wahad',
    decals: [
      {
        id: 'vector/decal/kull-wahad.svg',
        muted: false,
        offset: [0, 40],
        outline: true,
        scale: 0.9,
      },
    ],
    text: 'Play as part of your Battle Plan, in place of a weapon, defense, or both.\nThis card has no value in play, and you can discard it only by playing it in your Battle Plan.',
    subName: 'Worthless',
  },
};

export const Kulon: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-worthless.jpg`, 'vector/icon/worthless.svg'],
    iconOffset: [0, 1],
    name: 'Kulon',
    decals: [
      {
        id: 'vector/decal/kulon.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Play as part of your Battle Plan, in place of a weapon, defense, or both.\nThis card has no value in play, and you can discard it only by playing it in your Battle Plan.',
    subName: 'Worthless',
  },
};

export const LaLaLa: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-worthless.jpg`, 'vector/icon/worthless.svg'],
    iconOffset: [0, 1],
    name: 'La La La',
    decals: [
      {
        id: 'vector/decal/campfire-multicolor.svg',
        muted: false,
        offset: [0, 5],
        outline: false,
        scale: 1,
      },
    ],
    text: 'Play as part of your Battle Plan, in place of a weapon, defense, or both.\nThis card has no value in play, and you can discard it only by playing it in your Battle Plan.',
    subName: 'Worthless',
  },
};

export const TripToGamond: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-worthless.jpg`, 'vector/icon/worthless.svg'],
    iconOffset: [0, 1],
    name: 'Trip to Gamond',
    decals: [
      {
        id: 'vector/decal/gamond.svg',
        muted: false,
        offset: [0, 5],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Play as part of your Battle Plan, in place of a weapon, defense, or both.\nThis card has no value in play, and you can discard it only by playing it in your Battle Plan.',
    subName: 'Worthless',
  },
};

export const OrangeCatholicBible: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-worthless.jpg`, 'vector/icon/worthless.svg'],
    iconOffset: [0, 1],
    name: 'O.C. Bible',
    decals: [
      {
        id: 'vector/decal/bible.svg',
        muted: false,
        offset: [0, 5],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Play as part of your Battle Plan, in place of a weapon, defence or both.\nThis card has no value in play, and you can discard it only by playing it in your Battle Plan.\nAt the start of bidding phase, before or after the amount of card up for bid is calculated, you may gift this card to any other player with room for it in their hand.',
    subName: 'Worthless - Special',
  },
};
