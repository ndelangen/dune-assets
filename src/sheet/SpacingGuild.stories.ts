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

export const SpacingGuild: Story = {
  args: {
    name: 'The Spacing Guild',
    logo: '/generated/token/faction/guild.jpg',
    start: `5 troops in Tueks Sietch, 15 in reserve *(off planet)*. Start with 5 spice.`,
    revival: '1 troop free.',
    color: '#C72E19',
    alliance: {
      text: [
        `You may allow your ally to use your **DISCOUNT SHIPPING** as well as your **THREE TYPES OF SHIPMENT** ability.`,
        `You may also reveal spice from your hidden area to pay for an ally's shipment. *(You don't lose the spice)*`,
      ].join('\n\n'),
      karama: [
        [
          `When your **DISCOUNT SHIPPING** ability is karama'd, this alliance ability is disabled until the end of the turn.`,
          `When your **THREE TYPES OF SHIPMENT** ability is karama'd, this alliance ability is disabled until the end of the turn.`,
        ].join('\n\n'),
      ].join('\n\n'),
    },
    fate: {
      title: 'BATTLE TRAINING',
      text: [
        `Play your fate card at any time before Ship & Move phase to permanently gain the ability to play two leaders per battle.`,
        `Either leader can be called traitor. If you retreat the lowest leader is used for saving Treachery Cards. Leaders survive/die as one.`,
      ].join('\n\n'),
    },
    rules: [
      {
        text: 'You control all shipment onto and off Dune.',
      },
      {
        title: 'SHIPPING PAYMENTS',
        text: `When other factions pay to ship they pay the spice to you.`,
        karama: `All players pay the spice to the bank instead of you. This lasts until the end of the turn.`,
      },
      {
        title: 'DISCOUNT SHIPPING',
        text: `You pay half the normal shipping price.`,
        karama: `You must pay the normal shipping price. This lasts until the end of the turn.`,
      },
      {
        title: 'THREE TYPES OF SHIPMENT',
        text: [
          `When you ship troops, you can choose one:`,
          `- Ship normally from reserves to one territory.`,
          `- Ship from one territory to another *(at rates of destination)*.`,
          `- Ship from one territory to reserves *(at stronghold rates)*.`,
        ].join('\n'),
        karama: ``,
      },
      {
        title: 'THREE TYPES OF INTERJECTION',
        text: [
          `Once at any point during Ship & Move phase choose one:`,
          `- Go first, last, or between any other factions.`,
          `- Swap your position with another faction.`,
          `- Force another player to go now, and you take their place in turn order.`,
        ].join('\n'),
        karama: `Before any interjection happened. You must take your turn in standard order. This lasts until the end of the turn.`,
      },
      {
        title: 'RETREAT',
        text: [
          `Once battle plans are revealed *(step 4.3)* you may decide to retreat.`,
          `Your units may be shipped back to reserves at stronghold shipping rates. Your Treachery Cards can be saved by paying spice for each equal to your leader's strength.`,
          `If your leader would've been killed in battle they die. Spice you use to spice dial and retreat is paid to the spice bank.`,
          `You cannot retreat if the battle is resolved with a Traitor or Break Conditioning.`,
          `If you retreat your opponent wins the battle, losing 0 troops, losing 0 spice, their leader is not killed.`,
        ].join('\n\n'),
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/guild.jpg',
        description: '0.5 strength normally, 1 strength in when 1 spice is added.',
        name: 'Normal troop',
      },
    ],
    leaders: [
      '/generated/token/leader/guild/representative.jpg',
      '/generated/token/leader/guild/soo-soo-sook.jpg',
      '/generated/token/leader/guild/master-bewt.jpg',
      '/generated/token/leader/guild/esmar-tuek.jpg',
      '/generated/token/leader/guild/staban-tuek.jpg',
    ],
  },
};
