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

export const CammarPilru: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/cammar.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Cammar Pilru',
    strength: '1',
    owner: 'Ixian',
  },
};

export const KailiaVernius: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/kailea.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Kailia Vernius',
    strength: '2',
    owner: 'Ixian',
  },
};

export const DominicVernius: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/dominic.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Dominic Vernius',
    strength: '3',
    owner: 'Ixian',
  },
};

export const TessiaVernius: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Tessia Vernius',
    strength: '5',
    owner: 'Ixian',
  },
};

export const CtairPilru: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/ctair.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Ctair Pilru',
    strength: '5',
    owner: 'Ixian',
  },
};
