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

export const Jamis: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/jamis.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Jamis',
    strength: '2',
    owner: 'Fremen',
  },
};

export const ShadoutMapes: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/mapes.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Shadout Mapes',
    strength: '3',
    owner: 'Fremen',
  },
};

export const Otheym: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/otheym.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Otheym',
    strength: '5',
    owner: 'Fremen',
  },
};

export const Chani: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/chani.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Chani',
    strength: '6',
    owner: 'Fremen',
  },
};

export const Stilgar: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/stilgar.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Stilgar',
    strength: '7',
    owner: 'Fremen',
  },
};
