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
    size: { width: 150, height: 150 },
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
    size: { width: 160, height: 160 },
  },
};

export const TechToken: Story = {
  args: {
    background: `url('/generated/utils/background/moss.jpg') top left / cover no-repeat`,
    image: 'vector/generic/gear.svg',
    circle: false,
    top: 'Tech Token',
  },
};

export const Spice: Story = {
  args: {
    background: `url('/generated/utils/background/spice.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice.svg',
    circle: false,
    size: { width: 190, height: 190 },
  },
};
