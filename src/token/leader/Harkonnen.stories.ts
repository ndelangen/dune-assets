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

export const UmanKudu: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/uman.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Uman Kudu',
    strength: '1',
  },
};

export const CaptainIakinNefud: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/nafud.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Cptn. Iakin Nefud',
    strength: '2',
  },
};

export const PiterDeVries: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/piter.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Piter de Vries',
    strength: '3',
  },
};

export const BeastRabban: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/beast.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Beast Rabban',
    strength: '4',
  },
};

export const FeydRautha: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/feyd.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Feyd Rautha',
    strength: '6',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/baron.jpg',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Baron Vladimir Harkonnen',
    strength: '',
  },
};
