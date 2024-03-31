import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HaHaHa: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-worthless.jpg`, 'vector/icon/traitor.svg'],
    iconOffset: [0, 2],
    name: 'Ha Ha Ha! I win!',
    decals: [
      {
        id: 'vector/decal/troll.svg',
        muted: true,
        offset: [165, 0],
        outline: false,
        scale: 0.8,
      },
      {
        id: 'vector/icon/traitor.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.5,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Win',
  },
};

export const FlyingShaiHalud: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/lightning.svg'],
    iconOffset: [0, 2],
    name: 'Flying Shai-Halud',
    decals: [
      {
        id: 'vector/decal/gamond.svg',
        muted: true,
        offset: [0, 40],
        outline: false,
        scale: 0.8,
      },
      {
        id: 'vector/decal/shai-halud.svg',
        muted: false,
        offset: [0, -40],
        outline: true,
        scale: 0.5,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Win',
  },
};

export const PoisonKulon: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    iconOffset: [0, 0],
    name: 'Poison Kulon',
    decals: [
      {
        id: 'vector/icon/herb.svg',
        muted: true,
        offset: [-250, 40],
        outline: false,
        scale: 0.7,
      },
      {
        id: 'vector/decal/poison-tooth.svg',
        muted: true,
        offset: [270, 80],
        outline: false,
        scale: 0.7,
      },
      {
        id: 'vector/decal/kulon.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Win',
  },
};
