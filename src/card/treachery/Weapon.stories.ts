import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lasgun: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/lightning.svg'],
    name: 'Lasgun',
    decals: [
      {
        id: 'vector/decal/lasgun.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Special',
  },
};

export const WeirdingWay: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/projectile.svg'],
    name: 'Weirding Way',
    decals: [
      {
        id: 'vector/decal/weirdingway-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1.05,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Special',
  },
};

export const BasiliaWeapon: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    name: 'Basilia Weapon',
    decals: [
      {
        id: 'vector/decal/basilia.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Poison',
  },
};

export const Chaumas: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    name: 'Chaumas',
    decals: [
      {
        id: 'vector/decal/chaumas.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Poison',
  },
};

export const Chaumurky: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    name: 'Chaumurky',
    decals: [
      {
        id: 'vector/decal/chaumurky.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Poison',
  },
};

export const EllacaDrug: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    name: 'Ellaca Drug',
    decals: [
      {
        id: 'vector/decal/ellaca.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Poison',
  },
};

export const GomJabbar: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    name: 'Gom Jabbar',
    decals: [
      {
        id: 'vector/decal/gom-jabbar.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Poison',
  },
};

export const PoisonTooth: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/poison.svg'],
    name: 'Poison Tooth',
    decals: [
      {
        id: 'vector/decal/poison-tooth.svg',
        muted: false,
        offset: [0, 20],
        outline: true,
        scale: 0.9,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Poison',
  },
};

export const PoisonBlade: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/lightning.svg'],
    name: 'Poison Blade',
    decals: [
      {
        id: 'vector/decal/poison-blade.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Special',
  },
};

export const ArtilleryStrike: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/lightning.svg'],
    name: 'Artillery Strike',
    decals: [
      {
        id: 'vector/decal/artillery-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Special',
  },
};

export const MaulaPistol: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/projectile.svg'],
    name: 'Maula Pistol',
    decals: [
      {
        id: 'vector/decal/maula-pistol.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Projectile',
  },
};

export const Crysknife: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/projectile.svg'],
    name: 'Crysknife',
    decals: [
      {
        id: 'vector/decal/crysknife.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Projectile',
  },
};

export const HunterSeeker: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/projectile.svg'],
    name: 'Hunter Seeker',
    decals: [
      {
        id: 'vector/decal/hunter-seeker.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Projectile',
  },
};

export const SlipTip: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/projectile.svg'],
    name: 'Slip Tip',
    decals: [
      {
        id: 'vector/decal/slip-tip.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.7,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Projectile',
  },
};

export const Stunner: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/projectile.svg'],
    name: 'Slip Tip',
    decals: [
      {
        id: 'vector/decal/stunner.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 0.6,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Projectile',
  },
};

export const StoneBurner: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/lightning.svg'],
    name: 'Stone Burner',
    decals: [
      {
        id: 'vector/decal/stone-burner-expansion-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1.05,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Special',
  },
};

export const MirrorWeapon: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/lightning.svg'],
    name: 'Mirror Weapon',
    decals: [
      {
        id: 'vector/decal/mirror-weapon.svg',
        muted: false,
        offset: [0, 0],
        outline: true,
        scale: 1,
      },
    ],
    text: 'Text goes here',
    subName: 'Weapon - Special',
  },
};
