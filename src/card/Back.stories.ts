import type { Meta, StoryObj } from '@storybook/react';
import { CardBack } from './Back';

const meta = {
  component: CardBack,
} satisfies Meta<typeof CardBack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Arsunt: Story = {
  args: {
    name: 'Arsunt',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['arsunt'],
    amount: 3,
  },
};
