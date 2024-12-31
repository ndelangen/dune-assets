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

export const BindikkVarni: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Bindikk Varni',
    strength: '2',
  },
};

export const RivvyDinari: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/rivvy.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Rivvy Dinari',
    strength: '3',
  },
};

export const IlesaEcaz: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Ilesa Ecaz',
    strength: '3',
  },
};

export const SantyaEcaz: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Santya Ecaz',
    strength: '4',
  },
};

export const WhitmoreBludd: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Whitmore Bludd',
    strength: '4',
  },
};

export const Hero: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Archduke Armand Ecaz',
    strength: '',
  },
};
