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

export const BeneGesserit: Story = {
  args: {
    name: 'Bene Gesserit',
    logo: '/generated/token/faction/bene-gesserit.jpg',
    start: `18 troops *(off-planet)* reserves, 1 in polar sink, 1 in any unoccupied territory.`,
    revival: '3 troop free revival. Start with 5 spice.',
    color: '#101D65',
    alliance: {
      text: `You may use **THE VOICE** ability in your ally's battles.`,
      karama: `When your **THE VOICE** ability is karama'd, this alliance ability is disabled until the end of the turn.`,
    },
    fate: {
      title: 'POLITICAL MARRIAGES',
      text: `Play your fate during combat *(step 2.1)* to use **THE VOICE** on one side in any battles where you have advisors this turn. This Voice cannot be karama'd.`,
    },
    rules: [
      {
        text: 'You are adept at the ways of mind control.',
      },
      {
        title: 'CHARITY',
        text: `You always receive CHOAM charity.`,
        karama: `You can only receive CHOAM charity if are below 2 spice.`,
      },
      {
        title: 'WORTHLESS KARAMA',
        text: `You may use worthless cards as Karamas.`,
        karama: `As you attempt to use a worthless card as a Karama, it is revealed and discarded. You can no longer use worthless cards as Karamas until the end of the Phase.`,
      },
      {
        title: 'PREDICTION',
        text: [
          `During setup secretly choose a turn number and a faction.`,
          `If that faction wins the game on that turn you win instead. *(Fremen Special Victory condition does not count)*`,
        ].join('\n\n'),
      },
      {
        title: 'THE VOICE',
        text: [
          `During combat (step 2.1) you may force your opponent to play/not play a Treachery card in their battle plan. (Projectile Weapon, Poison Defense, Mercenaries, etc)`,
          `Special combat cards like the Lasgun and Weirding Way must be voiced by name.`,
          `If you force the use of a card the opponent does not have they may silently ignore the voice.`,
          ,
        ].join('\n\n'),
        karama: `When the voice is karama'd, the opponent may ignore the voice. This lasts until the end of the turn.`,
      },
      {
        title: 'SPIRITUAL ADVISORS',
        text: [
          `Your troops have two sides: fighters and advisors. Fighters act like normal troops. Advisors may be moved but otherwise have no effect on the game.`,
          `The state of your troops is tracked on a per territory basis. *(Ex. If advisors move to a territory with fighters they become fighters. If forces move to a territory with no other Bene Gesserit troops you choose what they become.)*`,
          `You may ship forces as fighters or advisors.`,
          `At the beginning of Ship & Move phase you may flip any advisors to fighter, they automatically become fighters if no other factions are present.`,
          `If a faction moves into a territory where you have fighters you may flip those fighters to advisors if that faction wasn't already in that territory. *(Fighters can't become advisors when a faction reinforces a territory.)*`,
          `When a faction ships from off planet you may put an advisors at their destination of a fighter in the polar sink.`,
        ].join('\n\n'),
        karama: `When the storm moves over fremen troops, all of them are killed.`,
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/bene-gesserit.jpg',
        description: '0.5 strength normally\n1 strength in when 1 spice is added.',
        name: 'Fighter',
        back: {
          image: '/generated/token/troop/advisor.jpg',
          description: 'Cannot participate in combat,\ncollect spice, control strongholds.',
          name: 'Advisor',
        },
      },
    ],
    leaders: [
      '/generated/token/leader/benegesserit/alia.jpg',
      '/generated/token/leader/benegesserit/wanna-yueh.jpg',
      '/generated/token/leader/benegesserit/mother-ramolla.jpg',
      '/generated/token/leader/benegesserit/princes-irulan.jpg',
      '/generated/token/leader/benegesserit/lady-fenring.jpg',
    ],
  },
};
