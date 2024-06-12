import type { Meta, StoryObj } from '@storybook/react';
import { CustomToken } from './Custom';

const meta = {
  component: CustomToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof CustomToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AxlotlTanks: Story = {
  args: {
    background: `url('/generated/utils/background/tech-purple.jpg') top left / cover no-repeat`,
    image: 'vector/icon/revival.svg',
    circle: false,
    top: 'Axlotl Tanks',
    bottom: 'revival phase\nTleilaxu does not trigger',
  },
};

export const ChoamCharity: Story = {
  args: {
    background: `url('/generated/utils/background/tech-yellow.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice.svg',
    circle: false,
    top: 'CHOAM Charity',
    bottom: 'choam charity phase\nBene Gesserit does not trigger',
  },
};

export const Heighliners: Story = {
  args: {
    background: `url('/generated/utils/background/tech-teal.jpg') top left / cover no-repeat`,
    image: 'vector/icon/heighliners.svg',
    circle: false,
    top: 'Heighliners',
    bottom: 'shipping & movement phase\nSpacing guild does not trigger',
  },
};

export const ImperialSupplies: Story = {
  args: {
    background: `url('/generated/utils/background/tech-red.jpg') top left / cover no-repeat`,
    image: 'vector/icon/bidding_standalone.svg',
    circle: false,
    top: 'Imperial Supplies',
    bottom: 'Bidding Phase\nEmperor does not trigger',
  },
};

export const Customs: Story = {
  args: {
    background: `url('/generated/utils/background/tech-blue.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice-alt.svg',
    circle: false,
    top: 'Customs',
    bottom: 'Once per turn\nWhen a bribe is paid',
  },
};

export const SpiceProduction: Story = {
  args: {
    background: `url('/generated/utils/background/tech-orange.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice-blow_standalone.svg',
    circle: false,
    top: 'Spice Production',
    bottom: 'Collection Phase\nWhen spice is harvested',
    size: { width: 120, height: 120 },
  },
};

export const Carryalls: Story = {
  args: {
    background: `url('/generated/utils/background/tech-green.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice-mine.svg',
    circle: false,
    top: 'Carryalls',
    bottom: 'Storm phase\nWhen troops are rescued',
    size: { width: 120, height: 120 },
  },
};

export const Kanly: Story = {
  args: {
    background: `url('/generated/utils/background/tech-pink.jpg') top left / cover no-repeat`,
    image: 'vector/decal/kanly.svg',
    circle: false,
    top: 'Kanly',
    bottom: 'Once per turn\nWhen you contest a win',
    size: { width: 120, height: 120 },
  },
};

export const WaterStealing: Story = {
  args: {
    background: `url('/generated/utils/background/tech-blood.jpg') top left / cover no-repeat`,
    image: 'vector/decal/drops.svg',
    circle: false,
    top: 'Water Stealing',
    bottom: 'When a leader is killed\nFremen leaders do not trigger',
    size: { width: 120, height: 120 },
  },
};
