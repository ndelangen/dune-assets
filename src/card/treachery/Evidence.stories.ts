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

export const AuthorityFavor = meta.story({
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
});

export const Evidence = meta.story({
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
});
