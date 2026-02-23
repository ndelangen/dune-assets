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

export const ErnocSeed = meta.story({
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    iconOffset: [0, 0],
    name: 'Ernoc Seed!',
    decals: [
      {
        id: 'vector/decal/flagella.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: "Play as part of your Battle Plan.\n\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Snooper.\n\nYou may keep this card if you win this battle.\n\nReturn this card to the Supplies! cache when it is lost, or at the end of the Combat phase.",
    subName: 'Weapon - Poison',
  },
});

export const Trishula = meta.story({
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/projectile.svg'],
    iconOffset: [0, 0],
    name: 'Trishula!',
    decals: [
      {
        id: 'vector/decal/thumper-alt.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: "Play as part of your Battle Plan.\n\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Shield.\n\nYou may keep this card if you win this battle.\n\nReturn this card to the Supplies! cache when it is lost, or at the end of the Battle phase.",
    subName: 'Weapon - Projectile',
  },
});

export const PhrinePen = meta.story({
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/poison.svg'],
    iconOffset: [0, 8],
    name: 'Snooper!',
    decals: [
      {
        id: 'vector/decal/injection.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Play as part of your Battle Plan.\n\nProtects your leader from a poison weapon in this battle.\n\nYou may keep this card if you win this battle.\n\nReturn this card to the Supplies! cache when it is lost, or at the end of the Battle phase.',
    subName: 'Defense - Poison',
  },
});

export const Shield = meta.story({
  args: {
    head: `/generated/utils/background/defense.jpg`,
    icon: [`/generated/utils/background/striped-defense.jpg`, 'vector/icon/shield.svg'],
    iconOffset: [0, 8],
    name: 'Shield!',
    decals: [
      {
        id: 'vector/decal/target.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Play as part of your Battle Plan.\n\nProtects your leader from a projectile weapon in this battle.\n\nYou may keep this card if you win this battle.\n\nReturn this card to the Supplies! cache when it is lost, or at the end of the Battle phase.',
    subName: 'Defense - Shield',
  },
});
