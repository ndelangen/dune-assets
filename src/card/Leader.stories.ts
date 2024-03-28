import type { Meta, StoryObj } from '@storybook/react';
import { LeaderCard } from './Leader';

const meta = {
  component: LeaderCard,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof LeaderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dummy: Story = {
  args: {
    image: 'image/leader/alia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Administrator',
    strength: 15,
    owner: 'Atreides',
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
  },
};
