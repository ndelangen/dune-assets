import type { Meta, StoryObj } from '@storybook/react';
import { AllianceCard } from './Alliance';

const meta = {
  component: AllianceCard,
} satisfies Meta<typeof AllianceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    background: `/generated/utils/background/richese.jpg`,
    logo: 'vector/logo/richese.svg',
    name: 'Richese',
    decals: [],
    text: 'Text goes here',
    troop: 'vector/troop/richese.svg',
  },
};
