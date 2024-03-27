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
    top: 'Tech Token',
  },
};

export const Bottom1: Story = {
  args: {
    background: `url('/generated/utils/background/tech-red.jpg') top left / cover no-repeat`,
    image: 'vector/icon/ambassador.svg',
    circle: false,
    bottom: 'Tech Tokens are cool',
  },
};

export const Bottom2: Story = {
  args: {
    background: `url('/generated/utils/background/tech-red.jpg') top left / cover no-repeat`,
    image: 'vector/icon/ambassador.svg',
    circle: false,
    bottom: 'Tech Tokens\nare really cool',
  },
};

export const All: Story = {
  args: {
    background: `url('/generated/utils/background/tech-yellow.jpg') top left / cover no-repeat`,
    image: 'vector/troop/oldix.svg',
    circle: false,
    top: 'Tech Tokens',
    bottom: 'Are really cool\nAnd trigger often',
  },
};

export const AxlotlTanks: Story = {
  args: {
    background: `url('/generated/utils/background/tech-purple.jpg') top left / cover no-repeat`,
    image: 'vector/generic/reman.svg',
    circle: false,
    top: 'Axlotl Tanks',
    bottom: 'revival phase\nTleilaxu does not trigger',
  },
};

export const ChoamCharity: Story = {
  args: {
    background: `url('/generated/utils/background/tech-yellow.jpg') top left / cover no-repeat`,
    image: 'vector/generic/reman.svg',
    circle: false,
    top: 'CHOAM Charity',
    bottom: 'choam charity phase\nBene Gesserit does not trigger',
  },
};

export const Heighliners: Story = {
  args: {
    background: `url('/generated/utils/background/tech-teal.jpg') top left / cover no-repeat`,
    image: 'vector/generic/reman.svg',
    circle: false,
    top: 'Heighliners',
    bottom: 'shipping & movement phase\nSpacing guild does not trigger',
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
