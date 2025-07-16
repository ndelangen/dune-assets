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

export const Ixian: Story = {
  args: {
    name: 'Ixian',
    logo: '/generated/token/faction/ixian.jpg',
    start: `6 cyborgs, 9 suboids *(off-planet)* reserves, 3 cyborgs and 3 suboids in HMS.`,
    revival: '1 troop free revival. Start with 10 spice.',
    color: '#B5A359',
    alliance: {
      text: `Once per turn you and your Ally may swap or transfer a Treachery Card. *(If during battle: step 1.1)*`,
      karama: `When you attempt to use this ability, the ability is disabled until the end of the turn. You may not transfer or swap a Treachery Card.`,
    },
    fate: {
      title: 'DEFECT',
      text: `Play your fate card to nullify the effects of a special Treachery Card once it is played. The card is returned to the original faction and may not be used for the rest of the turn. *(Cannot be played during battle step 3)*`,
    },
    rules: [
      {
        text: 'You are skilled in technology and production.',
      },
      {
        title: 'TREACHERY KNOWLEDGE',
        text: `You look at the initial Treachery Cards in setup before they are dealt.`,
      },
      {
        title: 'BIDDING KNOWLEDGE',
        text: `At the beginning of the Bidding phase you may look at the batch of Treachery Cards going up for bid. Then, you may split them into 2 piles, choosing which pile goes up for bid first.`,
        karama: `You may not split the cards up for bid into pile. You may not look at the cards up for bid. This lasts until the end of the turn.`,
      },
      {
        title: 'TECHNOLOGY',
        text: `Before the first bid is placed on a card you may replace it with a card from your hand once per phase. If you split the bidding cards into piles the Atreides may see the card you get.`,
        karama: `You may not replace a card. This lasts until the end of the turn.`,
      },
      {
        title: 'AUGMENTED TROOPS',
        text: [
          `Your 9 Cyborgs are double battle strength, can move 2 territories, collect 3 spice each, and cost 3 spice to revive.`,
          `Your 11 Suboids can move 2 territories if accompanied by a Cyborg, cost 1 spice to revive, and are always considered half strength because they cannot be spice dialed.`,
          `If you dial Cyborgs in a battle undialed Suboids can die in their place when calculating battle losses (step 4.4). You get 2 uses out of every Suboid because if this happens the dialed Cyborgs flip to Patched Cyborgs.`,
          `Patched Cyborgs can be dialed once for free, then they flip back.`,
        ].join('\n\n'),
      },
      {
        title: 'HIDDEN MOBILE SURVEYOR',
        text: [
          `During setup, after initial storm is revealed, place the HMS in any non-stronghold territory.`,
          `It is considered a territory within that territory.`,
          `No other factions can enter the HMS. You may ship to it like a stronghold, and move into/out of it like a normal territory.`,
          `Troops in the HMS are safe from the Storm and Shai-Hulud.`,
          `During Mentat phase you may move the HMS up to 3 non-stronghold territories. Troops can be picked up/dropped off along the way.`,
        ].join('\n\n'),
        karama: `You may not move the HMS. Your HMS can not pick up of drop off troops. This lasts until the end of the turn.`,
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/suboid.jpg',
        description: '0.5 strength.',
        name: 'Suboid',
      },
      {
        image: '/generated/token/troop/cyborg.jpg',
        description: '1 strength normally\n2 strength in when 1 spice is added.',
        name: 'Cyborg',
        back: {
          image: '/generated/token/troop/upgraded-cyborg.jpg',
          description: 'Always at 2 strength.',
          name: 'Patched Cyborg',
        },
      },
    ],
    leaders: [
      '/generated/token/leader/ixian/cammar-pilru.jpg',
      '/generated/token/leader/ixian/kailia-vernius.jpg',
      '/generated/token/leader/ixian/dominic-vernius.jpg',
      '/generated/token/leader/ixian/tessia-vernius.jpg',
      '/generated/token/leader/ixian/ctair-pilru.jpg',
    ],
  },
};
