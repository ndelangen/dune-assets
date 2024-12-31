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

export const VandoTerboli: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Vando Terboli',
    strength: '1',
  },
};

export const TrinKronos: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'TrinKronos',
    strength: '2',
  },
};

export const KrieuKronos: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Krieu Kronos',
    strength: '4',
  },
};

export const HiihResser: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Riih Resser',
    strength: '4',
  },
};

export const LupinoOrd: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Lupino Ord',
    strength: '5',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/hundro.jpg',
    logo: 'vector/logo/moritani.svg',
    name: 'Viscount Hundro Moritani',
    strength: '',
  },
};
