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

export const Blin: Story = {
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/blin.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Alia',
    strength: '0',
    owner: 'Bene Tleilaxu',
  },
};

export const Zoal: Story = {
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/zoal.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Zoal',
    strength: '2',
    owner: 'Bene Tleilaxu',
  },
};

export const Wykk: Story = {
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/wykk.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Wykk',
    strength: '3',
    owner: 'Bene Tleilaxu',
  },
};

export const MasterZaaf: Story = {
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/zaaf.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'MasterZaaf',
    strength: '4',
    owner: 'Bene Tleilaxu',
  },
};

export const HidarFenAjidica: Story = {
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/hidar.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Hidar Fen Ajidica',
    strength: '5',
    owner: 'Bene Tleilaxu',
  },
};
