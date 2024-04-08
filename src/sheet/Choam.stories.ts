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
export const Choam: Story = {
  args: {
    name: 'Choam',
    logo: '/generated/token/faction/choam.jpg',
    start: '20 troops in reserve *(off planet)*. Start with 5 spice.',
    revival: '1 troop free.',
    color: '#e3dbb3',
    alliance: {
      text: `You may allow your ally to use any contracts instead of yourself this turn. You and your ally may help pay when one of you pays for a contract.`,
      karama: `No interaction.`,
    },
    fate: {
      title: 'Landsraad Contract',
      text: `Play at the start of any phase. This contract can copy any other contract’s ability for an additional use each turn.`,
    },
    rules: [
      {
        text: 'You are an economic powerhouse funding an army of mercenaries.',
      },
      {
        title: 'Contracts:',
        text: `Each contract is once per turn. You may use contracts at any time unless otherwise specified. To use a contract, pay 2 spice to the spice bank.`,
        karama:
          'You cannot pay to use any contracts this phase (except fate). If this ability is karama\'ed, you can still use the contract in a next phase if possible. If any other contract is karama’ed, it’s once per turn is used. Return the spice paid when this or any contract is karama’ed.',
      },
      {
        title: 'CHOAM Contract:',
        text: `You may trade a treachery card with another faction. The trade must be two-way (each faction giving and receiving a card).`,
        karama: 'You cannot trade.',
      },
      {
        title: 'Emperor Contract:',
        text: `Discard a worthless or duplicate card to gain 7 spice.`,
        karama: 'You cannot discard. Undo the discard and spice gain.',
      },
      {
        title: 'Tleilaxu Contract:',
        text: `Revive 2 of your forces for free.`,
        karama: 'You cannot revive 2 forces for free.',
      },
      {
        title: 'Atreides Contract:',
        text: `When a stack of your forces is about to be killed by the storm or a worm, you may pay 1 spice per force to send them to the polar sink.`,
        karama: 'You cannot pay to save their forces.',
      },
      {
        title: 'Ixian Contract:',
        text: `When a card is up for bid, before anyone bids on it, you may swap it with a worthless or duplicate card. Atreides looks. Ixians decide if they Technology before you do.`,
        karama: 'You cannot swap with the card up for bid.',
      },
      {
        title: 'Spacing Guild Contract:',
        text: `On your shipment turn, you may ship an additional time directly to a spice blow at stronghold rates.`,
        karama: 'You cannot ship an additional time.',
      },
      {
        title: 'Bene Gesserit Contract:',
        text: `In combat (step after the Voice), you may force your opponent to answer a yes or no question about the treachery cards they have.`,
        karama: 'You cannot ask a question.',
      },
      {
        title: 'Harkonnen Contract:',
        text: `When you collect spice from a spice blow or spice mine you may kill the forces needed to collect it to gain the same amount again from the spice bank.`,
        karama: 'You cannot kill forces to collect more spice.',
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/choam.jpg',
        description: '0.5 strength normally, 1 strength in when 1 spice is added.',
        name: 'Normal troop',
      },
    ],
    leaders: [
      '/generated/token/leader/choam/viscount-tull.jpg',
      '/generated/token/leader/choam/frankos-aru.jpg',
      '/generated/token/leader/choam/duke-verdun.jpg',
      '/generated/token/leader/choam/rajiv-londine.jpg',
      '/generated/token/leader/choam/lady-jalma.jpg',
      '/generated/token/leader/choam/auditor.jpg',
    ],
  },
};
