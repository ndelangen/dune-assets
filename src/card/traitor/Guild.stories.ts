import type { Meta, StoryObj } from '@storybook/react';
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

export const Representative: Story = {
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/guildrep.png',
    logo: 'vector/logo/guild.svg',
    name: 'Representative',
    strength: '1',
    owner: 'Spacing Guild',
  },
};

export const SooSooSook: Story = {
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/soo-soo-sook.png',
    logo: 'vector/logo/guild.svg',
    name: 'Soo Soo Sook',
    strength: '2',
    owner: 'Spacing Guild',
  },
};

export const EsmarTuek: Story = {
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/esmar.png',
    logo: 'vector/logo/guild.svg',
    name: 'Esmar',
    strength: '3',
    owner: 'Spacing Guild',
  },
};

export const MasterBewt: Story = {
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/bewt.png',
    logo: 'vector/logo/guild.svg',
    name: 'Master Bewt',
    strength: '3',
    owner: 'Spacing Guild',
  },
};

export const StabanTuek: Story = {
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/staban.png',
    logo: 'vector/logo/guild.svg',
    name: 'Staban Tuek',
    strength: '5',
    owner: 'Spacing Guild',
  },
};
