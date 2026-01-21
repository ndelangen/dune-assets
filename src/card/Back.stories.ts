import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardBack } from './Back';

const meta = {
  component: CardBack,
  globals: {
    viewport: {
      value: 'card',
    },
  },
} satisfies Meta<typeof CardBack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Traitor: Story = {
  args: {
    name: 'Traitor',
    background: '/generated/utils/background/traitor.jpg',
    image: 'vector/icon/traitor.svg',
    imageOffset: [0, 10],
    imageScale: 1.1,
  },
};

export const Treachery: Story = {
  args: {
    name: 'Treachery',
    background: '/generated/utils/background/alliance.jpg',
    image: 'vector/icon/treachery.svg',
    imageOffset: [-3, 5],
    imageScale: 1,
  },
};

export const Prediction: Story = {
  args: {
    name: 'Prediction',
    background: '/generated/utils/background/defense.jpg',
    image: 'vector/logo/bene-gesserit.svg',
    imageOffset: [-3, 5],
    imageScale: 1,
  },
};

export const Storm: Story = {
  args: {
    name: 'Storm',
    background: '/generated/utils/background/storm.jpg',
    image: 'vector/icon/storrm_standalone.svg',
    imageOffset: [0, 5],
    imageScale: 0.8,
  },
};

export const Fate: Story = {
  args: {
    name: 'Fate',
    background: '/generated/utils/background/fate.jpg',
    image: 'vector/icon/fate.svg',
    imageOffset: [0, -5],
    imageScale: 1,
  },
};

export const Spice: Story = {
  args: {
    name: 'Spice',
    background: '/generated/utils/background/spice-3.jpg',
    image: 'vector/icon/spice.svg',
    imageOffset: [0, 10],
    imageScale: 1,
  },
};

export const Alliance: Story = {
  args: {
    name: 'Alliance',
    background: '/generated/utils/background/alliance.jpg',
    image: 'vector/icon/alliance.svg',
    imageOffset: [-5, 20],
    imageScale: 1.35,
  },
};

export const Stronghold: Story = {
  args: {
    name: 'Stronghold',
    background: '/generated/utils/background/weapon.jpg',
    image: 'vector/icon/city.svg',
    imageOffset: [-5, 0],
    imageScale: 1,
  },
};

export const Tracking: Story = {
  args: {
    name: 'Tracking',
    background: '/generated/utils/background/worthless.jpg',
    image: 'vector/icon/diamond.svg',
    imageOffset: [-5, 0],
    imageScale: 1,
  },
};

export const LeaderSkill: Story = {
  args: {
    name: 'Leader Skill',
    background: '/generated/utils/background/moritani.jpg',
    image: 'vector/icon/mentat.svg',
    imageOffset: [-5, 0],
    imageScale: 1,
  },
};

export const KwisatzHaderach: Story = {
  args: {
    name: 'Kwisatz Haderach',
    background: '/generated/utils/background/atreides.jpg',
    image: 'vector/icon/kwisatz.svg',
    imageOffset: [0, 10],
    imageScale: 1,
  },
};

export const Event: Story = {
  args: {
    name: 'Event',
    background: '/generated/utils/background/richese.jpg',
    image: 'vector/icon/turn.svg',
    imageOffset: [0, 10],
    imageScale: 0.8,
  },
};

export const Message: Story = {
  args: {
    name: 'Message',
    background: '/generated/utils/background/radial-2.jpg',
    image: 'vector/icon/balance.svg',
    imageOffset: [0, 10],
    imageScale: 1,
  },
};

export const Nexus: Story = {
  args: {
    name: 'Nexus',
    background: '/generated/utils/background/moss.jpg',
    image: 'vector/icon/snake.svg',
    imageOffset: [0, 10],
    imageScale: 1,
  },
};

export const Voice: Story = {
  args: {
    name: 'Voice',
    background: '/generated/utils/background/bene-gesserit.jpg',
    image: 'vector/decal/target.svg',
    imageOffset: [-10, 0],
    imageScale: 1.1,
  },
};

export const Prescience: Story = {
  args: {
    name: 'Prescience',
    background: '/generated/utils/background/atreides.jpg',
    image: 'vector/icon/eye.svg',
    imageOffset: [0, 5],
    imageScale: 1.1,
  },
};
