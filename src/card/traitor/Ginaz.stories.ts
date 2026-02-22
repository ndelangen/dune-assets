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

export const JenWu: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/jehwu.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Jen Wu',
    strength: '4',
    owner: 'Ginaz',
  },
};

export const JammoReed: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/jammo.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Jammo Reed',
    strength: '5',
    owner: 'Ginaz',
  },
};

export const KarstyTopper: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/karsty.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Karsty Topper',
    strength: '5',
    owner: 'Ginaz',
  },
};

export const RivvyDinari: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/rivvy.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Rivvy Dinari',
    strength: '6',
    owner: 'Ginaz',
  },
};

export const MordCour: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/mord.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Mord Cour',
    strength: '7',
    owner: 'Ginaz',
  },
};
