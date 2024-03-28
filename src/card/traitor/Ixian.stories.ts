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

export const CammarPilru: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/cammar.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Cammar Pilru',
    strength: '1',
    owner: 'Ixian',
  },
};

export const KailiaVernius: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/kailea.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Kailia Vernius',
    strength: '2',
    owner: 'Ixian',
  },
};

export const DominicVernius: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/dominic.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Dominic Vernius',
    strength: '4',
    owner: 'Ixian',
  },
};

export const TessiaVernius: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Tessia Vernius',
    strength: '5',
    owner: 'Ixian',
  },
};

export const CtairPilru: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/ctair.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Ctair Pilru',
    strength: '5',
    owner: 'Ixian',
  },
};
