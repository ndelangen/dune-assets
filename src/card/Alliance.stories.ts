import type { Meta, StoryObj } from '@storybook/react';
import { AllianceCard } from './Alliance';

const meta = {
  component: AllianceCard,
} satisfies Meta<typeof AllianceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Atreides: Story = {
  args: {
    background: `/generated/utils/background/atreides.jpg`,
    logo: 'vector/logo/atreides.svg',
    name: 'Atreides',
    decals: [
      {
        id: 'vector/icon/eye.svg',
        muted: true,
        offset: [-80, -60],
        outline: false,
        scale: 0.45,
      },
      {
        id: 'vector/icon/kwisatz.svg',
        muted: true,
        offset: [220, 50],
        outline: false,
        scale: 0.7,
      },
    ],
    text: "Atreides may use Battle Prescience in their ally's battles.",
    troop: 'vector/troop/atreides.svg',
  },
};

export const Harkonnen: Story = {
  args: {
    background: `/generated/utils/background/harkonnen.jpg`,
    logo: 'vector/logo/harkonnen.svg',
    name: 'Harkonnen',
    decals: [
      {
        id: 'vector/decal/chaumurky.svg',
        muted: true,
        offset: [-40, 40],
        outline: false,
        scale: 1.2,
      },
      {
        id: 'vector/decal/slip-tip.svg',
        muted: true,
        offset: [260, -80],
        outline: false,
        scale: 0.6,
      },
    ],
    text: "Harkonnen may call traitor and use their fate in their ally's battles.",
    troop: 'vector/troop/harkonnen.svg',
  },
};

export const Fremen: Story = {
  args: {
    background: `/generated/utils/background/fremen.jpg`,
    logo: 'vector/logo/fremen.svg',
    name: 'Fremen',
    decals: [
      {
        id: 'vector/decal/shai-hulud.svg',
        muted: true,
        offset: [20, 70],
        outline: false,
        scale: 0.7,
      },
      {
        id: 'vector/icon/herb.svg',
        muted: true,
        offset: [310, -110],
        outline: false,
        scale: 0.4,
      },
    ],
    text: 'Fremen may protect their ally from Shai-Hulud. Any spice you pay for spice dialing goes to your bribes.',
    troop: 'vector/troop/fremen.svg',
  },
};

export const Emperor: Story = {
  args: {
    background: `/generated/utils/background/emperor.jpg`,
    logo: 'vector/logo/emperor.svg',
    name: 'Emperor',
    decals: [
      {
        id: 'vector/decal/choam-share.svg',
        muted: true,
        offset: [-60, 110],
        outline: false,
        scale: 0.5,
      },
      {
        id: 'vector/icon/spice.svg',
        muted: true,
        offset: [250, -80],
        outline: false,
        scale: 0.5,
      },
    ],
    text: 'Emperor may instantly give spice to their ally at any time.',
    troop: 'vector/troop/emperor.svg',
  },
};

export const SpacingGuild: Story = {
  args: {
    background: `/generated/utils/background/guild.jpg`,
    logo: 'vector/logo/guild.svg',
    name: 'Spacing Guild',
    decals: [
      {
        id: 'vector/decal/gamond.svg',
        muted: true,
        offset: [100, -20],
        outline: false,
        scale: 0.7,
      },
    ],
    text: "Spacing Guild may allow their ally to use Three Types Of Shipment. Spacing Guild may reveal spice from their hidden to pay for their ally's shipment. You may use Discount Shipping.",
    troop: 'vector/troop/guild.svg',
  },
};

export const Ixian: Story = {
  args: {
    background: `/generated/utils/background/ixian.jpg`,
    logo: 'vector/logo/ixian.svg',
    name: 'Ixian',
    decals: [
      {
        id: 'vector/icon/hms.svg',
        muted: true,
        offset: [20, -20],
        outline: false,
        scale: 0.6,
      },
    ],
    text: 'Once per turn, you and Ixians may swap or transfer a treachery card. You cannot swap in battle after The Voice step.',
    troop: 'vector/troop/ixian.svg',
  },
};

export const BeneGesserit: Story = {
  args: {
    background: `/generated/utils/background/bene-gesserit.jpg`,
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Bene Gesserit',
    decals: [
      {
        id: 'vector/decal/gom-jabbar.svg',
        muted: true,
        offset: [10, 50],
        outline: false,
        scale: 0.5,
      },
      {
        id: 'vector/icon/diamond.svg',
        muted: true,
        offset: [50, -130],
        outline: false,
        scale: 0.3,
      },
    ],
    text: "Bene Gesserit may use The Voice in their ally's battles.",
    troop: 'vector/troop/bene-gesserit.svg',
  },
};

export const BeneTleilaxu: Story = {
  args: {
    background: `/generated/utils/background/bene-tleilaxu.jpg`,
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Bene Tleilaxu',
    decals: [
      {
        id: 'vector/icon/revival.svg',
        muted: true,
        offset: [0, 0],
        outline: false,
        scale: 0.5,
      },
      {
        id: 'vector/decal/tleilaxu-ghola.svg',
        muted: true,
        offset: [420, 20],
        outline: false,
        scale: 1,
      },
    ],
    text: 'You may revive your forces and leaders at half price.',
    troop: 'vector/troop/bene-tleilaxu.svg',
  },
};

export const Choam: Story = {
  args: {
    background: `/generated/utils/background/choam.jpg`,
    logo: 'vector/logo/choam.svg',
    name: 'CHOAM',
    decals: [
      {
        id: 'vector/decal/mercenaries.svg',
        muted: true,
        offset: [0, 110],
        outline: false,
        scale: 0.5,
      },
      {
        id: 'vector/decal/mercenaries.svg',
        muted: true,
        offset: [210, 110],
        outline: false,
        scale: 0.5,
      },
      {
        id: 'vector/icon/spice-blow_disc.svg',
        muted: true,
        offset: [0, 0],
        outline: false,
        scale: 0.5,
      },
    ],
    text: 'You may allow your ally to use any contracts instead of yourself this turn. You and your ally may help pay when one of you pays for a contract.',
    troop: 'vector/troop/choam.svg',
  },
};

export const Richese: Story = {
  args: {
    background: `/generated/utils/background/richese.jpg`,
    logo: 'vector/logo/richese.svg',
    name: 'richese',
    decals: [
      {
        id: 'vector/decal/box.svg',
        muted: true,
        offset: [0, 0],
        outline: false,
        scale: 0.5,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/richese.svg',
  },
};

export const Moritani: Story = {
  args: {
    background: `/generated/utils/background/moritani.jpg`,
    logo: 'vector/logo/moritani.svg',
    name: 'Moritani',
    decals: [
      {
        id: 'vector/decal/family-atomics.svg',
        muted: true,
        offset: [-540, -190],
        outline: false,
        scale: 2,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/moritani.svg',
  },
};

export const Ecaz: Story = {
  args: {
    background: `/generated/utils/background/ecaz.jpg`,
    logo: 'vector/logo/ecaz.svg',
    name: 'Ecaz',
    decals: [
      {
        id: 'vector/icon/ambassador.svg',
        muted: true,
        offset: [0, 0],
        outline: false,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/ecaz.svg',
  },
};

export const Iduali: Story = {
  args: {
    background: `/generated/utils/background/iduali.jpg`,
    logo: 'vector/logo/iduali.svg',
    name: 'Iduali',
    decals: [
      {
        id: 'vector/decal/storm.svg',
        muted: true,
        offset: [0, -130],
        outline: false,
        scale: 1.4,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/iduali.svg',
  },
};
