import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Supplies: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Supplies!',
    decals: [
      {
        id: 'vector/decal/supplies.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Play during a Combat Phase.\n\nUntil the end of his Combat Phase, you get the Supplies! tokens. These may be used as treachery cards of corresponding types.',
    subName: 'Special - Instant',
  },
};

export const Mercenaries: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Mercenaries',
    decals: [
      {
        id: 'vector/decal/mercenaries.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Play in your Battle Plan besides weapons or defenses. You may play only 1 Mercenaries per Battle Plan.\n\nAdd +1 to your number dialed and win ties regardless of Storm Order (if both players play Mercenaries Storm Order tiebreaker reverts back to normal).\n\nYou may keep this card if you win the battle.',
    subName: 'Special - Combat',
  },
};

export const ConeOfSilence: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Cone of Silence',
    decals: [
      {
        id: 'vector/decal/cone-of-silence.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 1.01,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const BreakConditioning: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Break Conditioning',
    decals: [
      {
        id: 'vector/decal/break-conditioning.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'You may always play this after revealing your battle plan.\n\nIf you\'re not called traitor, win the battle and your total battle strength is twice or more of your opponent\'s you win as if by traitor.',
    subName: 'Special - Combat',
  },
};

export const Amal: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Amal',
    decals: [
      {
        id: 'vector/decal/amal.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'At the beginning of any phase, cause all players to discard half of the spice behind their shields, rounded up, to the Spice Bank.',
    subName: 'Special - Instant',
  },
};

export const FamilyAtomics: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Family Atomics',
    decals: [
      {
        id: 'vector/decal/family-atomics.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 0.9,
      },
    ],
    text: 'You may play this after turn 1, when the storm has been calculated and before it is moved, if you have forces on or adjacent to the Shield Wall (with no storm inbetween).\n\nAll forces on the Shield Wall are killed. Place the Destroyed Shield Wall token on the Shield Wall. The Imperial Basin, Arrakeen and Carthag are no longer protected from the Storm.',
    subName: 'Special - Storm phase',
  },
};

export const Hajr: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Family Atomics',
    decals: [
      {
        id: 'vector/decal/hajr.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Play during Movement Phase.\n\nMake an extra on-planet force movement subject to normal movement rules.\n\nThe forces you move may be a group you\'ve already moved this phase or another group.',
    subName: 'Special - Movement',
  },
};

export const Harvester: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Harvester',
    decals: [
      {
        id: 'vector/decal/harvester-alt-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1,
      },
    ],
    text: 'Play just after a spice blow comes up. Doubles the spice blow. Place double the amount of spice in the territory.',
    subName: 'Special - Spice blow',
  },
};

export const Karama: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Karama',
    decals: [
      {
        id: 'vector/icon/karama.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.9,
      },
    ],
    text: 'After factions complete their "At Start" actions and after game set-up, use this card to stop a player from using one of their faction advantages when they attempt to use it. Stops the use of that advantage during one game phase.Or, this card may be used to do either of these things when appropriate:• Purchase a shipment of forces onto the planet at Guild rates(1/2 normal) paid to the Spice Bank,or• Purchase a Treachery Card without paying spice for itCannot be used to stop a win condition advantage. Discard after use.',
    subName: 'Special - Instant',
  },
};

export const Thumper: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Thumper',
    decals: [
      {
        id: 'vector/decal/thumper-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1.01,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Spice blow',
  },
};

export const TleilaxuGhola: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Tleilaxu Ghola',
    decals: [
      {
        id: 'vector/decal/tleilaxu-ghola.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const TruthTrance: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Truth Trance',
    decals: [
      {
        id: 'vector/decal/truth-trance.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const WeatherControl: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Weather Control',
    decals: [
      {
        id: 'vector/decal/weather-control.svg',
        muted: false,
        offset: [0, 20],
        outline: true,
        scale: 0.9,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const SwordMaster: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Sword Master',
    decals: [
      {
        id: 'vector/decal/sword-master.svg',
        muted: false,
        offset: [0, 30],
        outline: true,
        scale: 0.85,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const BodyGuard: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Body Guard',
    decals: [
      {
        id: 'vector/decal/body-guard.svg',
        muted: false,
        offset: [0, 30],
        outline: true,
        scale: 0.85,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const JuiceOfSapho: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Juice of Sapho',
    decals: [
      {
        id: 'vector/decal/flask.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.75,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const JuiceOfSaphoAlt: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Juice of Sapho',
    decals: [
      {
        id: 'vector/decal/juice-of-sapho-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 0.75,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const ResidualPoison: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Residual Poison',
    decals: [
      {
        id: 'vector/decal/residual-poison-multicolor.svg',
        muted: false,
        offset: [0, 35],
        outline: false,
        scale: 0.9,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const Ornithopter: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Ornithopter',
    decals: [
      {
        id: 'vector/decal/ornithopter.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const Ornithopters: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Ornithopters',
    decals: [
      {
        id: 'vector/decal/ornithopters.svg',
        muted: false,
        offset: [72, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const SemutaDrug: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Semuta Drug',
    decals: [
      {
        id: 'vector/decal/semuta-drug.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const NullentropyBox: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Nullentropy Box',
    decals: [
      {
        id: 'vector/decal/box-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};

export const Distrance: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Distrance',
    decals: [
      {
        id: 'vector/decal/distrance.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Instant',
  },
};
