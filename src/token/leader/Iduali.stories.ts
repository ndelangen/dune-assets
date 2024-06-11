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

export const Korba: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/korba.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Korba',
    strength: '1',
  },
};

export const Smuggler: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '3',
  },
};

export const RatRunner: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ratrunner.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Rat Runner',
    strength: '3',
  },
};

export const Sabiha: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/sabiha.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Sabiha',
    strength: '4',
  },
};

export const Javid: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/javid.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Javid',
    strength: '5',
  },
};

export const KorbaAlt: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/korba.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Korba',
    strength: '0',
  },
};

export const Majorca: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '3',
  },
};

export const MajorcaAlt: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '1',
  },
};

export const Minorca: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '4',
  },
};

export const MinorcaAlt: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '2',
  },
};

export const SabihaStrong: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/sabiha.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Sabiha',
    strength: '6',
  },
};

export const SabihaAlt: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/sabiha.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Sabiha',
    strength: '3',
  },
};

export const JavidStrong: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/javid.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Javid',
    strength: '6',
  },
};

export const JavidAlt: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/javid.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Javid',
    strength: '4',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/namri.jpg',
    logo: 'vector/logo/iduali.svg',
    name: 'Namri',
    strength: '',
  },
};
