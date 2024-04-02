import type { Meta, StoryObj } from '@storybook/react';
import { FactionSheet } from './Sheet';

const meta = {
  component: FactionSheet,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FactionSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Atreides: Story = {
  args: {
    alliance: {
      karama: 'Karama',
      text: 'Text',
      title: 'Alliance Title',
    },
    color: '#4B4C0D',
    fate: {
      karama: 'Karama',
      text: 'Text',
      title: 'Fate Title',
    },
    logo: '/generated/token/faction/atreides.jpg',
    name: 'Atreides',
    revival: 'Revival',
    start: 'Start',
    rules: [
      {
        title: 'Rule 1',
        text: 'Text 1',
        karama: 'Karama 1',
      },
      {
        title: 'Rule 2',
        text: 'Text 2',
        karama: 'Karama 2',
      },
      {
        title: 'Rule 3',
        text: 'Text 3',
        karama: 'Karama 3',
      },
      {
        title: 'Rule 4',
        text: 'Text 4',
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/atreides.jpg',
        description: 'Description',
        name: 'Troop Name',
        back: {
          image: '/generated/token/troop/atreides.jpg',
          description: 'Description',
          name: 'Troop Name',
        },
      },
      {
        image: '/generated/token/troop/atreides.jpg',
        description: 'Description',
        name: 'Troop Name',
      },
    ],
    leaders: [
      '/generated/token/leader/atreides/dr-yueh.jpg',
      '/generated/token/leader/atreides/dr-yueh.jpg',
      '/generated/token/leader/atreides/dr-yueh.jpg',
      '/generated/token/leader/atreides/dr-yueh.jpg',
      '/generated/token/leader/atreides/dr-yueh.jpg',
    ],
  },
};
