import type { Meta, StoryObj } from '@storybook/react';
import { TroopToken } from './Troop';

const meta = {
  component: TroopToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof TroopToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    background: 'true',
    image: 'vector/troop/atreides.svg',
  },
};

export const Secondary: Story = {
  args: {
    background: 'true',
    image: 'vector/troop/bg.svg',
  },
};

export const Large: Story = {
  args: {
    background: 'true',
    image: 'vector/troop/blaster.svg',
  },
};

export const Small: Story = {
  args: {
    background: 'true',
    image: 'vector/troop/bt.svg',
  },
};
