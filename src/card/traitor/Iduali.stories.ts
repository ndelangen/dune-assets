import type { Meta, StoryObj } from '@storybook/react';
import { TraitorCard } from './Traitor';

const meta = {
  component: TraitorCard,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof TraitorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Korba: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/korba.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Korba',
    strength: '1',
    owner: 'Iduali',
  },
};

export const Smuggler: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '3',
    owner: 'Iduali',
  },
};

export const RatRunner: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ratrunner.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Rat Runner',
    strength: '3',
    owner: 'Iduali',
  },
};

export const Sabiha: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/sabiha.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Sabiha',
    strength: '4',
    owner: 'Iduali',
  },
};

export const Javid: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/javid.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Javid',
    strength: '5',
    owner: 'Iduali',
  },
};
