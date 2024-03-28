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

export const UmanKudu: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/uman.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Uman Kudu',
    strength: '1',
    owner: 'Harkonnen',
  },
};

export const CaptainIakinNefud: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/nafud.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Cptn. Iakin Nefud',
    strength: '2',
    owner: 'Harkonnen',
  },
};

export const PiterDeVries: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/piter.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Piter de Vries',
    strength: '3',
    owner: 'Harkonnen',
  },
};

export const BeastRabban: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/beast.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Beast Rabban',
    strength: '4',
    owner: 'Harkonnen',
  },
};

export const FeydRautha: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/feyd.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Feyd Rautha',
    strength: '6',
    owner: 'Harkonnen',
  },
};
