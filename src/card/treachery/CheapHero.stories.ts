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

export const MaleCheapHero = meta.story({
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Cheap Hero',
    decals: [
      {
        id: 'vector/decal/cheap-hero.svg',
        muted: false,
        offset: [0, 20],
        outline: true,
        scale: 0.9,
      },
    ],
    text: 'Play as a leader with zero strength on your Battle Plan and discard after the battle.\n\nYou may also play a weapon and a defense. The cheap hero may be played in place of a leader or when you have no leaders available.',
    subName: 'Special - Leader',
  },
});

export const FemaleCheapHero = meta.story({
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Cheap Hero',
    decals: [
      {
        id: 'vector/decal/cheap-heroine.svg',
        muted: false,
        offset: [0, 20],
        outline: true,
        scale: 0.9,
      },
    ],
    text: 'Play as a leader with zero strength on your Battle Plan and discard after the battle.\n\nYou may also play a weapon and a defense. The cheap hero may be played in place of a leader or when you have no leaders available.',
    subName: 'Special - Leader',
  },
});
