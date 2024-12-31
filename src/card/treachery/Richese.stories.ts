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

export const Karama: Story = {
  args: {
    head: `/generated/utils/background/storm.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/logo/richese.svg'],
    iconOffset: [0, -5],
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
    subName: 'Special - Instant',
  },
};

export const SignetRing: Story = {
  args: {
    head: `/generated/utils/background/worthless.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/logo/richese.svg'],
    iconOffset: [0, -5],
    name: 'Signet Ring',
    decals: [
      {
        id: 'vector/decal/signet.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Worthless - Special',
  },
};

export const TruthOrDare: Story = {
  args: {
    head: `/generated/utils/background/storm.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/logo/richese.svg'],
    iconOffset: [0, -5],
    name: 'Truth or Dare',
    decals: [
      {
        id: 'vector/decal/truth-trance.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};
