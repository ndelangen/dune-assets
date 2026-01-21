import type { Meta, StoryObj } from '@storybook/react-vite';
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

export const Lasgun: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/lightning.svg'],
    name: 'Lasgun',
    decals: [
      {
        id: 'vector/decal/lasgun-extra.svg',
        muted: false,
        offset: [0, 100],
        outline: false,
        scale: 0.7,
      },
      {
        id: 'vector/decal/lasgun.svg',
        muted: false,
        offset: [0, -50],
        outline: true,
        scale: 0.7,
      },
    ],
    text: "Play as part of your Battle Plan.\nAutomatically kills opponent's leader regardless of defense card used.\nYou may keep this card if you win this battle.\nIf anyone plays a Shield in this battle, all forces, leaders and spice in the battle's territory die . Any spice dialed and in the battle's territory is lost. Both players lose this battle.",
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
        id: 'vector/decal/weirding-way-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1.05,
      },
    ],
    text: 'Play as part of your Battle Plan.\nCounts as a projectile weapon, unless played with another weapon. In that case, it counts as a projectile defense.\nYou may keep this card if you win this battle.',
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Snooper.\nYou may keep this card if you win this battle.",
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Snooper.\nYou may keep this card if you win this battle.",
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Snooper.\nYou may keep this card if you win this battle.",
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Snooper.\nYou may keep this card if you win this battle.",
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Snooper.\nYou may keep this card if you win this battle.",
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
    text: 'Play as part of your Battle Plan.\nKills both leaders, and is not stopped by a Snooper.\nAfter seeing the battle results, you may choose not to use this weapon.',
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
    text: 'Play as part of your Battle Plan.\nThis weapon counts as both projectile and poison.\nYou may keep this card if you win this battle.',
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
        id: 'vector/decal/artillery-strike-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1,
      },
    ],
    text: 'Play as part of your Battle Plan.\nKills both leaders (no spice is paid for them).\nBoth players may use Shields to protect their leader against the Artillery Strike.\nSurviving (shielded) leaders do not count towards the battle total; the side that dialed higher wins the battle.',
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Shield.\nYou may keep this card if you win this battle.",
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Shield.\nYou may keep this card if you win this battle.",
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Shield.\nYou may keep this card if you win this battle.",
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Shield.\nYou may keep this card if you win this battle.",
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
    text: "Play as part of your Battle Plan.\nKills opponent's leader before battle is resolved. Opponent may protect leader with a Shield.\nYou may keep this card if you win this battle.",
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
        id: 'vector/decal/stone-burner-alt-multicolor.svg',
        muted: false,
        offset: [0, 0],
        outline: false,
        scale: 1.05,
      },
    ],
    text: 'You choose after battle plans are revealed: Both leaders are killed, OR both leaders in this battle do not count their strength if they otherwise survived. In either case, the player with the higher number of undialed force tokens wins the battle. Dialed forces are lost normally. Discard after use.',
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
    text: "Play as part of your Battle Plan.\nCopies your opponent's weapon, if they reveal one (and if their Treachery Card counts as a weapon).\nYou must use your weapon first if order matters. Discard after use.",
    subName: 'Weapon - Special',
  },
};

export const SlowDart: Story = {
  args: {
    head: `/generated/utils/background/weapon.jpg`,
    icon: [`/generated/utils/background/striped-weapon.jpg`, 'vector/icon/lightning.svg'],
    name: 'Slow Dart',
    decals: [
      {
        id: 'vector/decal/cutter-ray.svg',
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
