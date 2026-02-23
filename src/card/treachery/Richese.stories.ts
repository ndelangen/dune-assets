import preview from '../../../.storybook/preview';
import { TreacheryCard } from './Treachery';

const meta = preview.meta({
  component: TreacheryCard,
  globals: {
    viewport: {
      value: 'card',
    },
  },
});

export const Karama = meta.story({
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
});

export const SignetRing = meta.story({
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
});

export const TruthOrDare = meta.story({
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
});
