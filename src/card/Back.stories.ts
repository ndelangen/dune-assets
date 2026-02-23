import preview from '../../.storybook/preview';
import { CardBack } from './Back';

const meta = preview.meta({
  component: CardBack,
  globals: {
    viewport: {
      value: 'card',
    },
  },
});

export const Traitor = meta.story({
  args: {
    name: 'Traitor',
    background: '/generated/utils/background/traitor.jpg',
    image: 'vector/icon/traitor.svg',
    imageOffset: [0, 10],
    imageScale: 1.1,
  },
});

export const Treachery = meta.story({
  args: {
    name: 'Treachery',
    background: '/generated/utils/background/alliance.jpg',
    image: 'vector/icon/treachery.svg',
    imageOffset: [-3, 5],
    imageScale: 1,
  },
});

export const Prediction = meta.story({
  args: {
    name: 'Prediction',
    background: '/generated/utils/background/defense.jpg',
    image: 'vector/logo/bene-gesserit.svg',
    imageOffset: [-3, 5],
    imageScale: 1,
  },
});

export const Storm = meta.story({
  args: {
    name: 'Storm',
    background: '/generated/utils/background/storm.jpg',
    image: 'vector/icon/storrm_standalone.svg',
    imageOffset: [0, 5],
    imageScale: 0.8,
  },
});

export const Fate = meta.story({
  args: {
    name: 'Fate',
    background: '/generated/utils/background/fate.jpg',
    image: 'vector/icon/fate.svg',
    imageOffset: [0, -5],
    imageScale: 1,
  },
});

export const Spice = meta.story({
  args: {
    name: 'Spice',
    background: '/generated/utils/background/spice-3.jpg',
    image: 'vector/icon/spice.svg',
    imageOffset: [0, 10],
    imageScale: 1,
  },
});

export const Alliance = meta.story({
  args: {
    name: 'Alliance',
    background: '/generated/utils/background/alliance.jpg',
    image: 'vector/icon/alliance.svg',
    imageOffset: [-5, 20],
    imageScale: 1.35,
  },
});

export const Stronghold = meta.story({
  args: {
    name: 'Stronghold',
    background: '/generated/utils/background/weapon.jpg',
    image: 'vector/icon/city.svg',
    imageOffset: [-5, 0],
    imageScale: 1,
  },
});

export const Tracking = meta.story({
  args: {
    name: 'Tracking',
    background: '/generated/utils/background/worthless.jpg',
    image: 'vector/icon/diamond.svg',
    imageOffset: [-5, 0],
    imageScale: 1,
  },
});

export const LeaderSkill = meta.story({
  args: {
    name: 'Leader Skill',
    background: '/generated/utils/background/moritani.jpg',
    image: 'vector/icon/mentat.svg',
    imageOffset: [-5, 0],
    imageScale: 1,
  },
});

export const KwisatzHaderach = meta.story({
  args: {
    name: 'Kwisatz Haderach',
    background: '/generated/utils/background/atreides.jpg',
    image: 'vector/icon/kwisatz.svg',
    imageOffset: [0, 10],
    imageScale: 1,
  },
});

export const Event = meta.story({
  args: {
    name: 'Event',
    background: '/generated/utils/background/richese.jpg',
    image: 'vector/icon/turn.svg',
    imageOffset: [0, 10],
    imageScale: 0.8,
  },
});

export const Message = meta.story({
  args: {
    name: 'Message',
    background: '/generated/utils/background/radial-2.jpg',
    image: 'vector/icon/balance.svg',
    imageOffset: [0, 10],
    imageScale: 1,
  },
});

export const Nexus = meta.story({
  args: {
    name: 'Nexus',
    background: '/generated/utils/background/moss.jpg',
    image: 'vector/icon/snake.svg',
    imageOffset: [0, 10],
    imageScale: 1,
  },
});

export const Voice = meta.story({
  args: {
    name: 'Voice',
    background: '/generated/utils/background/bene-gesserit.jpg',
    image: 'vector/decal/target.svg',
    imageOffset: [-10, 0],
    imageScale: 1.1,
  },
});

export const Prescience = meta.story({
  args: {
    name: 'Prescience',
    background: '/generated/utils/background/atreides.jpg',
    image: 'vector/icon/eye.svg',
    imageOffset: [0, 5],
    imageScale: 1.1,
  },
});
