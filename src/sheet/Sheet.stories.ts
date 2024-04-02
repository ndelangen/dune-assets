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
    name: 'Atreides',
    logo: '/generated/token/faction/atreides.jpg',
    start: '10 forces in Arrakeen and 10 in reserve *(off planet)*. Start with 10 spice.',
    revival: '2 forces free.',
    color: '#4B4C0D',
    alliance: {
      karama: 'Karama',
      text: `You may assist your ally by forcing their
      opponent to show 1 element of their battle-
      plan, see the "battle prescience"
      -advantage.`,
    },
    fate: {
      text: 'todo',
    },
    rules: [
      {
        text: 'You have limited prescience.',
      },
      {
        title: 'BIDDING',
        text: `During each bidding round you may look at the Treachery Card that is up for purchase.`,
        karama: 'Karama 2',
      },
      {
        title: 'Notes',
        text: `You may keep written notes about Treachery Cards`,
      },
      {
        title: 'SPICE PRESCIENCE',
        text: `Each turn, from the movement phase onwards, you may look at the next Spice Card`,
      },
      {
        title: 'BATTLE PRESCIENCE',
        text: `You may force your opponent to reveal 1 part of their battle-plan to you before you commit your battle plan.`,
      },
      {
        title: 'KWISATZ HADERACH',
        text: [
          `After having lost 7 forces during battles you may start using your Kwisatz Haderach token in all future battles.`,
          `You can use this token to accompany exactly 1 leader per turn. The token adds a strength of +2 to your battle-plan if the leader it accompanies survives the battle.`,
          `A leader accompanied by the Kwisatz Haderach token cannot be called traitor.`,
          `The Kwisatz Haderach token returns to you (at the end of the Combat phase) even if the leader it accompanied was killed, except when a lasgun/shield occurred in the territory the Kwisatz Haderach was played.`,
          `If the Kwisatz Haderach token is killed this way, it can be revived as a leader.`,
        ].join('\n\n'),
      },
    ],
    troops: [
      // {
      //   image: '/generated/token/troop/atreides.jpg',
      //   description: 'Description',
      //   name: 'Troop Name',
      //   back: {
      //     image: '/generated/token/troop/atreides.jpg',
      //     description: 'Description',
      //     name: 'Troop Name',
      //   },
      // },
      {
        image: '/generated/token/troop/atreides.jpg',
        description: '0.5 strength normally, 1 strength in when 1 spice is added.',
        name: 'Normal force',
      },
    ],
    leaders: [
      '/generated/token/leader/atreides/dr-yueh.jpg',
      '/generated/token/leader/atreides/duncan-idaho.jpg',
      '/generated/token/leader/atreides/gurney-halleck.jpg',
      '/generated/token/leader/atreides/lady-jessica.jpg',
      '/generated/token/leader/atreides/thufir-hawat.jpg',
    ],
  },
};
