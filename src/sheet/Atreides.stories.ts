import type { Meta, StoryObj } from '@storybook/react';
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

export const Atreides: Story = {
  args: {
    name: 'Atreides',
    logo: '/generated/token/faction/atreides.jpg',
    start: '10 troops in Arrakeen and 10 in reserve *(off planet)*. Start with 10 spice.',
    revival: '2 troop free.',
    color: '#4B4C0D',
    alliance: {
      text: `You may assist your ally by forcing their opponent to show 1 element of their battle-plan, see the "battle prescience"-advantage.`,
      karama: `When your **BATTLE PRESCIENCE** ability is karama'd, this alliance ability is disabled until the end of the turn.`,
    },
    fate: {
      title: 'ARRAKIS FIEFDOM',
      text: `Play your fate card at any time before Ship & Move phase to obtain the Carryall Tech-Token, which you cannot lose. The token triggers when a spice mine sends troops to reserves. You may also spawn a 3 spice mine on any sand territory that doesn't have a spice-blow marker:`,
    },
    rules: [
      {
        text: 'You have limited prescience.',
      },
      {
        title: 'BIDDING prescience',
        text: `During each bidding round you may look at each Treachery Card as it comes up for bid.`,
        karama:
          'You can no longer look at the cards as they are up for bid. This lasts until the end of the turn.',
      },
      {
        title: 'Information broker',
        text: [
          `You can sell information on the next card for auction to another player. You can set the price and the information must be true.`,
          `The price you set is paid to you as a bribe.`,
        ].join('\n\n'),
      },
      {
        title: 'Notes',
        text: `You may keep written notes about Treachery Cards.`,
      },
      {
        title: 'BATTLE PRESCIENCE',
        text: `During battle *(step 2.2)* you may force your opponent to reveal 1 part of their battle-plan early. *(Weapon, Defense, Leader, or Dial + Mercenaries)*.`,
        karama: `You opponent does not have to reveal a part of their battle-plan early. This lasts until the end of the turn.`,
      },
      {
        title: "LETO'S TITHE",
        text: [
          `During Spice Collection phase take 2 spice from the spice bank if you control one stronghold. Take 3 instead if you control at least two strongholds.`,
          `You permanently lose this advantage once you gain the Kwisatz Haderach token.`,
        ].join('\n\n'),
      },
      {
        title: 'KWISATZ HADERACH',
        text: [
          `Once you have lost 7 or more total troops in battles you gain a token that can be played alongside one leader per turn to add +2 strength to that leader and that leader cannot be called traitor.`,
          `The token can only be lost in a lasgun-shield explosion, and can be revived like a normal leader.`,
        ].join('\n\n'),
        karama: `You are not allowed to add the Kwisatz Haderach token to a leader. This lasts until the end of the turn.`,
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
        name: 'Normal troop',
      },
    ],
    leaders: [
      '/generated/token/leader/atreides/dr-yueh.jpg',
      '/generated/token/leader/atreides/duncan-idaho.jpg',
      '/generated/token/leader/atreides/gurney-halleck.jpg',
      '/generated/token/leader/atreides/lady-jessica.jpg',
      '/generated/token/leader/atreides/thufir-hawat.jpg',
    ],
    // extras: [
    //   {
    //     name: 'Unique items',
    //     description: 'Unique faction items',
    //     items: [
    //       {
    //         url: '/generated/token/custom/carryalls.jpg',
    //         description: 'A Tech-Token that cannot be lost.\nGained when playing your fate.',
    //       },
    //       {
    //         url: '/generated/token/leader/atreides/kwisatz-haderach.jpg',
    //         description: 'Kwisatz Haderach token.\nGained when you have lost 7 troops in battle.',
    //       },
    //     ],
    //   },
    // ],
  },
};
