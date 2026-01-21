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

export const Auditor: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/auditor.png',
    logo: 'vector/logo/choam.svg',
    name: 'Auditor',
    strength: '2',
  },
};

export const ViscountTull: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/viscount-tull.png',
    logo: 'vector/logo/choam.svg',
    name: 'Viscount Tull',
    strength: '2',
  },
};

export const DukeVerdun: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/duke-verdun.png',
    logo: 'vector/logo/choam.svg',
    name: 'Duke Verdun',
    strength: '3',
  },
};

export const RajivLondine: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/rajiv-londine.png',
    logo: 'vector/logo/choam.svg',
    name: 'Rajiv Londine',
    strength: '3',
  },
};

export const FrankosAru: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/frankos-aru.png',
    logo: 'vector/logo/choam.svg',
    name: 'Frankos Aru',
    strength: '4',
  },
};

export const LadyJalma: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/lady-yalma.png',
    logo: 'vector/logo/choam.svg',
    name: 'Lady Jalma',
    strength: '4',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/lady-yalma.png',
    logo: 'vector/logo/choam.svg',
    name: 'Ur-Director Malina Aru',
    strength: '',
  },
};
