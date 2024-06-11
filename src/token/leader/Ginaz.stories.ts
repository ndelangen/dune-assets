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

export const JenWu: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/jehwu.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Jen Wu',
    strength: '4',
  },
};

export const JammoReed: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/jammo.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Jammo Reed',
    strength: '5',
  },
};

export const KarstyTopper: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/karsty.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Karsty Topper',
    strength: '5',
  },
};

export const RivvyDinari: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/rivvy.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Rivvy Dinari',
    strength: '6',
  },
};

export const MordCour: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/mord.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Mord Cour',
    strength: '7',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/whitemore-bludd.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Whitmore Bludd',
    strength: '',
  },
};
