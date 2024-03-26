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
    background: `url('/generated/utils/background/atreides.jpg')`,
    image: 'vector/troop/atreides.svg',
  },
};

export const Secondary: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg')`,
    image: 'vector/troop/bg.svg',
  },
};

export const Large: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg')`,
    image: 'vector/troop/blaster.svg',
  },
};

export const Small: Story = {
  args: {
    background: `url('/generated/utils/background/guild.jpg')`,
    image: 'vector/troop/guild.svg',
  },
};
