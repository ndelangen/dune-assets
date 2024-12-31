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
  globals: {
    viewport: {
      value: 'disc',
    },
    disc: true,
  },
} satisfies Meta<typeof CustomToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DrYueh: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/dryeuh.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Dr. Yueh',
    strength: '1',
  },
};

export const DuncanIdaho: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/duncan.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Duncan Idaho',
    strength: '2',
  },
};

export const GurneyHalleck: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/gurney.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Gurney Halleck',
    strength: '4',
  },
};

export const LadyJessica: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/jessica.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Lady Jessica',
    strength: '5',
  },
};

export const ThufirHawat: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/thufir.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Thufir Hawat',
    strength: '5',
  },
};

export const KwisatzHaderach: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/paul.jpg',
    logo: 'vector/logo/atreides.svg',
    name: 'Kwisatz Haderach',
    strength: '+2',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/paul.jpg',
    logo: 'vector/logo/atreides.svg',
    name: `Paul Muad'Dib`,
    strength: '',
  },
};
