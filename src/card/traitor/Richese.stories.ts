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

export const TalisBalt: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Talis Balt',
    strength: '2',
    owner: 'Richese',
  },
};

export const HaloaRund: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Haloa Rund',
    strength: '2',
    owner: 'Richese',
  },
};

export const FlintoKinnis: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Flinto Kinnis',
    strength: '3',
    owner: 'Richese',
  },
};

export const LadyHelena: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/helena.png',
    logo: 'vector/logo/richese.svg',
    name: 'Lady Helena',
    strength: '4',
    owner: 'Richese',
  },
};

export const EinCalimar: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Ein Calimar',
    strength: '5',
    owner: 'Richese',
  },
};
