import type { Meta, StoryObj } from '@storybook/react-vite';
import { FactionSheet } from './Sheet';

const meta = {
  component: FactionSheet,
  parameters: {
    layout: 'fullscreen',
  },
  globals: {
    viewport: {
      value: 'card',
    },
  },
} satisfies Meta<typeof FactionSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Iduali: Story = {
  args: {
    name: 'Iduali',
    logo: '/generated/token/faction/iduali.jpg',
    start: 'todo',
    revival: '2 troop free.',
    color: '#521F06',
    alliance: {
      text: `Unknown`,
      karama: `Ridwan has yet to write these.`,
    },
    fate: {
      title: 'Unknown',
      text: `Ridwan has yet to write these.`,
    },
    rules: [
      {
        text: 'Ridwan has yet to write these.',
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/iduali.jpg',
        description:
          '0.5 strength normally, 1 strength in when 1 spice is added.\nAlways 1 strength in sand territories.',
        name: 'Normal troop',
      },
    ],
    leaders: [
      '/generated/token/leader/iduali/korba.jpg',
      '/generated/token/leader/iduali/majorca.jpg',
      '/generated/token/leader/iduali/minorca.jpg',
      '/generated/token/leader/iduali/sibaha-strong.jpg',
      '/generated/token/leader/iduali/javid-strong.jpg',
    ],
  },
};
