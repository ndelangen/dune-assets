import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthorityFavor: Story = {
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/keyhole.svg'],
    iconOffset: [0, 8],
    name: 'Authority Favor',
    decals: [
      {
        id: 'vector/decal/favor.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Defense - Political',
  },
};

export const Evidence: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/key.svg'],
    iconOffset: [0, 2],
    name: 'Evidence',
    decals: [
      {
        id: 'vector/decal/evidence.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Political',
  },
};
