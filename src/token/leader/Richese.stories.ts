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

export const TalisBalt: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Talis Balt',
    strength: '2',
  },
};

export const HaloaRund: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Haloa Rund',
    strength: '2',
  },
};

export const FlintoKinnis: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Flinto Kinnis',
    strength: '3',
  },
};

export const LadyHelena: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/helena.png',
    logo: 'vector/logo/richese.svg',
    name: 'Lady Helena',
    strength: '4',
  },
};

export const EinCalimar: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Ein Calimar',
    strength: '5',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/viscount-tull.png',
    logo: 'vector/logo/richese.svg',
    name: 'Count Ilban Richese',
    strength: '',
  },
};
