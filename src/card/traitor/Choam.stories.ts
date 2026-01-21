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

export const Auditor: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Auditor',
    strength: '2',
    owner: 'CHOAM',
  },
};

export const ViscountTull: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Viscount Tull',
    strength: '2',
    owner: 'CHOAM',
  },
};

export const DukeVerdun: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Duke Verdun',
    strength: '3',
    owner: 'CHOAM',
  },
};

export const RajivLondine: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Rajiv Londine',
    strength: '3',
    owner: 'CHOAM',
  },
};

export const FrankosAru: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Frankos Aru',
    strength: '4',
    owner: 'CHOAM',
  },
};

export const LadyJalma: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Lady Jalma',
    strength: '4',
    owner: 'CHOAM',
  },
};
