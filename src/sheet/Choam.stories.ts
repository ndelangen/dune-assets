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
      text: `CHOAM may use Trade Monopoly with their ally at the end of any phase *(still once per turn)*.`,
      karama: `Lauren has yet to write these.`,
    },
    fate: {
      title: 'Coerced Acquisition',
      text: `Play during combat. Your opponent locks in their battle plan, then you draw 1 item out. This item is now yours. *(leader or treachery card, if you draw something else redo)* *(step is after Harkonnen fate, if Harkonnen plays their fate you have to lock in your battle plan first)*`,
    },
    rules: [
      {
        text: 'You are an economic powerhouse funding an army of mercenaries.',
      },
      {
        title: 'Collective Aid',
        text: `At the start of the CHOAM Charity Phase, collect 2 spice for each faction in the game. If another faction claims CHOAM Charity, it is paid to them from your spice. You may allow other factions to claim CHOAM Charity (1 or 2 spice) even if they have 2 or more spice.`,
        karama:
          'CHOAM does not get their normal income. Factions claiming CHOAM Charity get spice from the spice bank instead. CHOAM cannot allow other factions to claim CHOAM Charity if they have 2 or more spice.',
      },
      {
        title: 'Imperial Supplier',
        text: [
          `In the CHOAM Charity Phase, once per faction that claims CHOAM Charity, you may add a treachery card from your hand or leader from behind your hidden area *(both face up)* to this turn’s Bidding Phase. Treachery cards are added and shuffled into the cards up for bid this turn. Leaders are bid on last and in the order CHOAM added them. Spice paid for leaders goes to the spice bank. When adding an asset you gain one of the following:`,
          `- 3 spice from the spice bank.`,
          `- Revive 2 of your forces for free.`,
          `- A blank tech token that gets removed at the start of the next CHOAM Charity phase. If adding a worthless card you gain the chosen effect twice instead of once.`,
        ].join('\n\n'),
        karama: `CHOAM cannot add cards and leaders. (If CHOAM does this more than once, the Karama must be played immediately after the first to count for both.)`,
      },
      {
        title: 'Trade Monopoly',
        text: `Once per turn, at the end of any phase except the Shipping and Movement Phase, you may buy one treachery card or leader from another faction, and/or sell one to another faction. (face down) Leaders sold belong to the faction that bought them unless sold again.`,
        karama: `CHOAM cannot buy and sell.`,
      },
      {
        title: 'Reinforced Portfolio',
        text: `Your treachery card capacity is 5.`,
        karama: `Tech Tokens do not count towards combat strength. (Must be played before battle plans are revealed, prescience may be re-answered if it is dial.)`,
      },
      {
        title: 'Industrial Reinforcement',
        text: `When you own a tech token, instead of generating spice, it adds +1 to your battle strength.`,
      },
      {
        title: 'Auditor',
        text: `If the Auditor is used in battle and not called traitor, look at 2 random treachery cards in your opponent's hand that were not played in the battle. The Auditor cannot be sold or stolen. You start the game with the ability to revive the Auditor in the Revival Phase.`,
        karama: `CHOAM cannot look at cards. CHOAM cannot revive the Auditor.`,
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
