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

export const BindikkVarni: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Bindikk Varni',
    strength: '2',
    owner: 'Ecaz',
  },
};

export const RivvyDinari: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/rivvy.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Rivvy Dinari',
    strength: '3',
    owner: 'Ecaz',
  },
};

export const IlesaEcaz: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Ilesa Ecaz',
    strength: '3',
    owner: 'Ecaz',
  },
};

export const SantyaEcaz: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Santya Ecaz',
    strength: '4',
    owner: 'Ecaz',
  },
};

export const WhitmoreBludd: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Whitmore Bludd',
    strength: '4',
    owner: 'Ecaz',
  },
};
