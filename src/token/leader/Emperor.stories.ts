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
} satisfies Meta<typeof CustomToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bashar: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/bashar.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Bashar',
    strength: '2',
  },
};

export const Burseg: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/burseg.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Burseg',
    strength: '3',
  },
};

export const Caid: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/caid.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Caid',
    strength: '3',
  },
};

export const CaptainAramsham: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/aramsham.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Cpt. Aramsham',
    strength: '5',
  },
};

export const HasimirFenring: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/hasimir.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Hasimir Fenring',
    strength: '6',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/hasimir.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Emperor Shadam IV',
    strength: '',
  },
};
