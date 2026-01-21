import type { Meta, StoryObj } from '@storybook/react-vite';
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

export const VandoTerboli: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Vando Terboli',
    strength: '1',
    owner: 'Moritani',
  },
};

export const TrinKronos: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'TrinKronos',
    strength: '2',
    owner: 'Moritani',
  },
};

export const KrieuKronos: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Krieu Kronos',
    strength: '4',
    owner: 'Moritani',
  },
};

export const HiihResser: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Riih Resser',
    strength: '4',
    owner: 'Moritani',
  },
};

export const LupinoOrd: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Lupino Ord',
    strength: '5',
    owner: 'Moritani',
  },
};
