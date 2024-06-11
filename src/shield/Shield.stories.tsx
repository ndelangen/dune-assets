import type { Meta, StoryObj } from '@storybook/react';
import { ShieldAsset } from './Shield';

const meta = {
  component: ShieldAsset,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ShieldAsset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Atreides: Story = {
  args: {
    leader: '/generated/token/leader/atreides/lady-jessica.jpg',
    background: '/generated/utils/background/atreides.jpg',
    logo: '/generated/token/faction/atreides.jpg',
    name: 'Harkonnen',
  },
};
