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

export const Fremen: Story = {
  args: {
    name: 'Fremen',
    logo: '/generated/token/faction/fremen.jpg',
    start: `10 troops in reserves, 10 distributed between Sietch Tabr, False Wall South, False Wall West.`,
    revival: '3 troop free revival. Start with 3 spice.',
    color: '#BE761F',
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
        text: 'You are native to Dune and know its ways.',
      },
      {
        title: 'RALLYING',
        text: `Your reserves are on-planet. You can deploy for free within 2 territories of the greater flat. You can not ship normally.`,
      },
      {
        title: 'NATIVE MOVEMENT',
        text: `Your troops can move 2 territories per move action.`,
        karama: `You can only move 1 territory per move action. This lasts until the end of the turn.`,
      },
      {
        title: 'WORM RIDING',
        text: [
          `Shai-Hulud does not devour your troops; Instead troops co-located with Shai-Hulud can move to any other territory. `,
          `If more than one Shai-Hulud appear during the Spice Blow phase you may choose where the additional worms appear.`,
        ].join('\n\n'),
      },
      {
        title: 'THUMPERS',
        text: [
          `You start the game with two thumper-tokens.`,
          `During the spice blow phase you may discard one token to summon a riding worm in any sand territory *(or the polar sink)* where you have forces.`,
          `Riding worms don't cause a nexus and cannot eat troops; They always count as the first worm to appear in the phase *(so you can move other worms with thumpers using your* **WORM RIDING** *advantage)*.`,
          ,
        ].join('\n\n'),
        karama: `Before any interjection happened. You must take your turn in standard order. This lasts until the end of the turn.`,
      },
      {
        title: 'HALF STORM LOSSES',
        text: `If your forces are caught in storm only half of them are killed *(all fractions rounded up)*. You may ship and move into/through storm by taking half losses.`,
        karama: `When the storm moves over fremen troops, all of them are killed.`,
      },
      {
        title: 'FEDAYKIN',
        text: `Your three starred forces are double combat strength. Only one Fedaykin may be revived per turn.`,
        karama: `Your three starred forces are normal strength.`,
      },
      {
        title: 'FREE SPICE DIALING',
        text: `Your forces do not require spice to count at their full strength.`,
        karama: `Your forces require spice to count at their full strength.`,
      },
      {
        title: 'FANATICAL TACTICS',
        text: [
          `During combat *(step 3.1)* you may publicly announce you are playing a weapon and /or defense Treachery Card from your hand.`,
          `These cards cannot be lost unless your leader is called traitor or there is a lasgun-shield explosion.`,
          `Harkonnen can only replace these with cards of the same type when using **VLADIMIR'S SPITE**.`,
        ].join('\n\n'),
        karama: `You cannot reveal your weapon and defense cards during combat. Losing the battle causes you to lose all Treachery Cards in your battle plan. **VLADIMIR'S SPITE** can be used to replace any card.`,
      },
      {
        title: 'SPECIAL VICTORY CONDITION',
        text: [
          `If no faction has won by the end of turn 10 you win.`,
          `Your ally wins if your alliance controls at least 3 strongholds.`,
        ].join('\n\n'),
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/fremen.jpg',
        description: '1 strength.',
        name: 'Normal force',
      },
      {
        image: '/generated/token/troop/fedaykin.jpg',
        description: '2 strength.',
        name: 'Fedaykin',
      },
    ],
    leaders: [
      '/generated/token/leader/fremen/jamis.jpg',
      '/generated/token/leader/fremen/shadout-mapes.jpg',
      '/generated/token/leader/fremen/otheym.jpg',
      '/generated/token/leader/fremen/chani.jpg',
      '/generated/token/leader/fremen/stilgar.jpg',
    ],
  },
};
