import type { Meta, StoryObj } from '@storybook/react';
import { CustomToken } from './Leader';

const meta = {
  component: CustomToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
  globals: {
    viewport: {
      value: 'disc',
    },
    disc: true,
  },
} satisfies Meta<typeof CustomToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Jamis: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/jamis.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Jamis',
    strength: '2',
  },
};

export const ShadoutMapes: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/mapes.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Shadout Mapes',
    strength: '3',
  },
};

export const Otheym: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/otheym.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Otheym',
    strength: '5',
  },
};

export const Chani: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/chani.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Chani',
    strength: '6',
  },
};

export const Stilgar: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/stilgar.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Stilgar',
    strength: '7',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/liet.jpg',
    logo: 'vector/logo/fremen.svg',
    name: 'Liet Kynes',
    strength: '',
  },
};
