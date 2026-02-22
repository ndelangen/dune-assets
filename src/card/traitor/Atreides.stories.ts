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

export const DrYueh: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/dryeuh.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Dr. Yueh',
    strength: '1',
    owner: 'Atreides',
  },
};

export const DuncanIdaho: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/duncan.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Duncan Idaho',
    strength: '2',
    owner: 'Atreides',
  },
};

export const GurneyHalleck: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/gurney.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Gurney Halleck',
    strength: '4',
    owner: 'Atreides',
  },
};

export const LadyJessica: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/jessica.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Lady Jessica',
    strength: '5',
    owner: 'Atreides',
  },
};

export const ThufirHawat: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/thufir.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Thufir Hawat',
    strength: '5',
    owner: 'Atreides',
  },
};
