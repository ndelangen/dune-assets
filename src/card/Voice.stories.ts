import type { Meta, StoryObj } from '@storybook/react-vite';
import { TreacheryCard } from './treachery/Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoSnooper: Story = {
  args: {
    name: 'No Snooper',
    subName: 'Voice',
    icon: ['/generated/utils/background/striped-defense.jpg', 'vector/icon/snooper.svg'],
    iconOffset: [0, 8],
    decals: [
      {
        id: 'vector/decal/snooper.svg',
        muted: true,
        offset: [0, 0],
        outline: false,
        scale: 0.7,
      },
      {
        id: 'vector/decal/block.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'You are not allowed to play a Snooper card in this battle. You may play any card that says "special" on it, including Chemistry.',

    head: `/generated/utils/background/bene-gesserit.jpg`,
  },
};

export const MustSnooper: Story = {
  args: {
    name: 'Must Snooper',
    subName: 'Voice',
    icon: ['/generated/utils/background/striped-defense.jpg', 'vector/icon/snooper.svg'],
    iconOffset: [0, 8],
    decals: [
      {
        id: 'vector/decal/snooper.svg',
        muted: true,
        offset: [0, 0],
        outline: false,
        scale: 0.7,
      },
      {
        id: 'vector/generic/force.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.86,
      },
    ],
    text: 'You are compelled to play a snooper card in this battle. You may play a Chemistry card, but are not compelled to do so.',

    head: `/generated/utils/background/bene-gesserit.jpg`,
  },
};

export const NoShield: Story = {
  args: {
    name: 'No Shield',
    subName: 'Voice',
    icon: ['/generated/utils/background/striped-defense.jpg', 'vector/icon/shield.svg'],
    iconOffset: [0, 8],
    decals: [
      {
        id: 'vector/decal/shield.svg',
        muted: true,
        offset: [0, 0],
        outline: false,
        scale: 1,
      },
      {
        id: 'vector/decal/block.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'You are not allowed to play a Shield card in this battle. You may play any card that says "special" on it, including Weirding Way.',

    head: `/generated/utils/background/bene-gesserit.jpg`,
  },
};

export const MustShield: Story = {
  args: {
    name: 'Must Shield',
    subName: 'Voice',
    icon: ['/generated/utils/background/striped-defense.jpg', 'vector/icon/shield.svg'],
    iconOffset: [0, 8],
    decals: [
      {
        id: 'vector/decal/shield.svg',
        muted: true,
        offset: [0, 0],
        outline: false,
        scale: 1,
      },
      {
        id: 'vector/generic/force.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.86,
      },
    ],
    text: 'You are compelled to play a shield card in this battle. You do not have to announce it if you do not have one. You may play any card that says "special" on it.',

    head: `/generated/utils/background/bene-gesserit.jpg`,
  },
};
