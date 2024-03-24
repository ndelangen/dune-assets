import type { Meta, StoryObj } from '@storybook/react';
import { TroopToken } from './Troop';

const meta = {
  component: TroopToken,
  argTypes: {
    id: {
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
    id: 'A',
    modifiers: ['A'],
  },
};

export const Secondary: Story = {
  args: {
    background: 'true',
    id: 'A',
    modifiers: ['A'],
  },
};

export const Large: Story = {
  args: {
    background: 'true',
    id: 'A',
    modifiers: ['A'],
  },
};

export const Small: Story = {
  args: {
    background: 'true',
    id: 'A',
    modifiers: ['A'],
  },
};
