import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Karama: Story = {
  args: {
    head: `/generated/utils/background/storm.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/karama.svg'],
    iconOffset: [0, 1],
    name: 'Richese Karama',
    decals: [
      {
        id: 'vector/icon/karama.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Special',
  },
};

export const SignetRing: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/worthless.svg'],
    iconOffset: [0, 1],
    name: 'Signet Ring',
    decals: [
      {
        id: 'vector/generic/nobles.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Special',
  },
};

export const TruthOrDare: Story = {
  args: {
    head: `/generated/utils/background/storm.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/karama.svg'],
    iconOffset: [0, 1],
    name: 'Truth or Dare',
    decals: [
      {
        id: 'vector/icon/karama.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Special',
  },
};
