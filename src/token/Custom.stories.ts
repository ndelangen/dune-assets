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
