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

export const Choam: Story = {
  args: {
    name: 'Choam',
    logo: '/generated/token/faction/choam.jpg',
    start: '15 forces in reserves. 5 forces in any unoccupied territory or the polar sink.',
    revival: '1 troop free. Start with 15 spice.',
    color: '#e3dbb3',
    alliance: {
      text: `You may allow your ally to use any contracts instead of yourself this turn. You and your ally may help pay when one of you pays for a contract.`,
      karama: `If a Contract is Karama'ed for CHOAM it is also Karama'ed for their ally in the same way.`,
    },
    fate: {
      title: 'LANDSRAAD CONTRACT',
      text: `Play at the start of any phase to unlock a new contract called Landsraad Contract that can copy any other contract’s ability once each turn.
      `,
    },
    rules: [
      {
        text: 'You can manipulate the economy.',
      },
      {
        text: `Each contract is once per turn. To use a contract, pay 2 spice to the spice bank.`,
        karama:
          "Any contract can be karama'ed when CHOAM or their ally attempts to use it. Return the 2 spice paid. Undo what the contract has done. The contract that is karama’ed cannot be used for the rest of the turn (unless fate is used to copy it).",
      },
      {
        title: 'CHOAM CONTRACT',
        text: `At the start of any phase, except the Combat Phase, you and another faction may trade or transfer a treachery card.`,
        karama: 'You cannot trade and transfer. ',
      },
      {
        title: 'EMPEROR CONTRACT',
        text: `At the start of any phase, discard a worthless or duplicate treachery card to gain 5 spice.`,
        karama: 'You cannot discard.',
      },
      {
        title: 'IXIAN CONTRACT',
        text: `When you buy a treachery card, you may swap it with the next card up for bid this turn. Atreides looks. You may use this after Ixians tech (Ixians decide before you).`,
        karama:
          'You cannot swap with the card up for bid. Must be karama’ed before CHOAM looks at the card they swap with.',
      },
      {
        title: 'TLEILAXU CONTRACT',
        text: `In the Revival Phase, revive 2 additional forces, both for free.`,
        karama: 'You cannot revive 2 forces for free.',
      },
      {
        title: 'SPACING GUILD CONTRACT',
        text: `On your shipment turn, you may ship an additional time directly to an unoccupied spice blow or mine at stronghold rates.`,
        karama: 'You cannot ship an additional time.',
      },
      {
        title: 'BENE GESSERIT CONTRACT',
        text: `In Battle (step after the Voice), you may force your opponent to answer a yes or no question about the treachery cards they have.`,
        karama: 'You cannot ask a question. Question does not need to be answered.',
      },
      {
        title: 'ATREIDES CONTRACT',
        text: `Buy at the start of the Collection Phase. Each time 5 or more spice is collected from a spice blow or mine this turn, you gain 2 spice from the spice bank.`,
        karama: 'You cannot get more spice for each 5+ being collected.',
      },
      {
        title: 'HARKONNEN CONTRACT',
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
      '/generated/token/leader/choam/frankos-aru.jpg',
      '/generated/token/leader/choam/lady-jalma.jpg',
      '/generated/token/leader/choam/duke-verdun.jpg',
      '/generated/token/leader/choam/rajiv-londine.jpg',
      '/generated/token/leader/choam/viscount-tull.jpg',
    ],
  },
};
