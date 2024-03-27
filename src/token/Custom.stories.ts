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

export const Decal: Story = {
  args: {
    background: `url('/generated/utils/background/tech-red.jpg') top left / cover no-repeat`,
    image: 'vector/decal/amal.svg',
    circle: false,
    size: { width: 300, height: 300 },
  },
};

export const Generic: Story = {
  args: {
    background: `url('/generated/utils/background/tech-red.jpg') top left / cover no-repeat`,
    image: 'vector/icon/ambassador.svg',
    circle: false,
  },
};

export const Top: Story = {
  args: {
    background: `url('/generated/utils/background/tech-red.jpg') top left / cover no-repeat`,
    image: 'vector/icon/ambassador.svg',
    circle: false,
    top: 'Top Text',
  },
};

export const Bottom1: Story = {
  args: {
    background: `url('/generated/utils/background/tech-red.jpg') top left / cover no-repeat`,
    image: 'vector/icon/ambassador.svg',
    circle: false,
    bottom: 'Bottom text',
  },
};

export const Bottom2: Story = {
  args: {
    background: `url('/generated/utils/background/tech-red.jpg') top left / cover no-repeat`,
    image: 'vector/icon/ambassador.svg',
    circle: false,
    bottom: 'Bottom text\nmultiple lines!',
  },
};

export const All: Story = {
  args: {
    background: `url('/generated/utils/background/tech-yellow.jpg') top left / cover no-repeat`,
    image: 'vector/troop/pewpew.svg',
    circle: false,
    top: 'Pew Pew',
    bottom: 'pew pew\nTeam Sparlock!',
    size: { width: 210, height: 210 },
  },
};

export const AxlotlTanks: Story = {
  args: {
    background: `url('/generated/utils/background/tech-purple.jpg') top left / cover no-repeat`,
    image: 'vector/icon/revival_standalone.svg',
    circle: false,
    top: 'Axlotl Tanks',
    bottom: 'revival phase\nTleilaxu does not trigger',
  },
};

export const ChoamCharity: Story = {
  args: {
    background: `url('/generated/utils/background/tech-yellow.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice_standalone.svg',
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
    image: 'vector/icon/spice.svg',
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
export const Kanly: Story = {
  args: {
    background: `url('/generated/utils/background/tech-pink.jpg') top left / cover no-repeat`,
    image: 'vector/icon/combat_disc.svg',
    circle: false,
    top: 'Kanly',
    bottom: 'Once per turn\nWhen you contest a win',
    size: { width: 120, height: 120 },
  },
};

export const TechToken: Story = {
  args: {
    background: `url('/generated/utils/background/moss.jpg') top left / cover no-repeat`,
    image: 'vector/generic/reman.svg',
    circle: false,
    top: 'Tech Token',
  },
};
