import type { Meta, StoryObj } from '@storybook/react-vite';
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

export const Alia: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/alia.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Alia',
    strength: '5',
  },
};

export const WannaYueh: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/wanna.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Wanna Yueh',
    strength: '5',
  },
};

export const MotherRamallo: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/ramallo.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Mother Ramallo',
    strength: '5',
  },
};

export const PrincesIrulan: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/irulan.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Princes Irulan',
    strength: '5',
  },
};

export const LadyFenring: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/lady-fenring.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Lady Fenring',
    strength: '5',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/mohiam.jpg',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Mother Mohiam',
    strength: '',
  },
};
