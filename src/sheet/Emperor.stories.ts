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

export const Emperor: Story = {
  args: {
    name: 'Emperor',
    logo: '/generated/token/faction/emperor.jpg',
    start: '15 normal troops + 5 Sardaukar in reserve *(off planet)*. Start with 10 spice.',
    revival: '1 troop free.',
    color: '#8D0006',
    alliance: {
      text: `You may instantly give spice to your ally at any time.`,
      karama: [
        `Can be played in response to your attempt to give spice to your ally to prevent it.`,
        `The ability is disabled until the end of the turn.`,
      ].join('\n\n'),
    },
    fate: {
      title: 'Prison Planet',
      text: [
        `Play your fate card at any time to revive up to 5 of any troops and any single leader for their normal cost *(including for other players)*.`,
        `There are no limits for starred troops or leaders. *(Cannot be played during battle step 3)*`,
      ].join('\n\n'),
    },
    rules: [
      {
        text: 'You have access to great wealth.',
      },
      {
        title: 'BIDDING PAYMENTS',
        text: `When another faction pays for a Treachery Card they pay the spice to you.`,
        karama: [
          `Before the first bid is placed on a card, all faction pay for their Treachery Cards directly to the bank.`,
          `The ability is disabled until the end of the turn.`,
        ].join('\n\n'),
      },
      {
        title: "SHADDAM'S FAVOR",
        text: [
          `*(aka subsidy)* When another faction *(who is not your ally)* buys a Treachery Card you may place any amount of spice in front of your Player Shield to discount the bidding payment by that amount.`,
          `Factions may bid more than their spice reserves if you make a deal to use this ability if the bid is successful.`,
          `You collect all spice placed in front of your Player Shield this way at the end of the Bidding phase.`,
        ].join('\n\n'),
        karama: [
          'You are no longer allowed to use this ability. This lasts until the end of the turn.',
          'The spice you have already placed in front of your shield is sent to the bank.',
        ].join('\n\n'),
      },
      {
        title: 'SARDAUKAR',
        text: [
          `Your five starred troops are double battle strength.`,
          `Only one Sardaukar can be revived per turn.`,
          `Sardaukar are considered normal troops against Fremen.`,
        ].join('\n\n'),
        karama: `Your Sardaukar are normal troops until the end of the turn.`,
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/emperor.jpg',
        description: '0.5 strength normally, 1 strength in when 1 spice is added.',
        name: 'Normal troop',
      },
      {
        image: '/generated/token/troop/sardaukar.jpg',
        description: '1 strength normally, 2 strength in when 1 spice is added.',
        name: 'Sardaukar',
      },
    ],
    leaders: [
      '/generated/token/leader/emperor/bashar.jpg',
      '/generated/token/leader/emperor/burseg.jpg',
      '/generated/token/leader/emperor/caid.jpg',
      '/generated/token/leader/emperor/captain-aramsham.jpg',
      '/generated/token/leader/emperor/hasimir-fenring.jpg',
    ],
  },
};
