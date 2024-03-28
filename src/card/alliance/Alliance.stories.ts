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
        offset: [-90, -60],
        outline: false,
        scale: 0.5,
      },
      {
        id: 'vector/icon/kwisatz.svg',
        muted: true,
        offset: [190, 50],
        outline: false,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
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
        scale: 1.6,
      },
      {
        id: 'vector/decal/blade.svg',
        muted: true,
        offset: [220, -80],
        outline: false,
        scale: 0.8,
      },
    ],
    text: 'Text goes here',
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
        id: 'vector/decal/shai-halud1.svg',
        muted: true,
        offset: [50, 40],
        outline: false,
        scale: 1,
      },
      {
        id: 'vector/decal/herb.svg',
        muted: true,
        offset: [280, 0],
        outline: false,
        scale: 1.3,
      },
    ],
    text: 'Text goes here',
    troop: 'vector/troop/fremen.svg',
  },
};
