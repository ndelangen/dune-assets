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

export const Harkonnen: Story = {
  args: {
    name: 'Harkonnen',
    logo: '/generated/token/faction/harkonnen.jpg',
    start: '10 troops in Carthag and 10 in reserve *(off planet)*. Start with 10 spice.',
    revival: '2 troops free.',
    color: '#191311',
    alliance: {
      text: `You may call traitor in your ally's battles.`,
    },
    fate: {
      title: 'BLACKMAIL',
      text: `Play your fate card during battle (step 2.3) to force your opponent to reveal their entire battle plan early.`,
    },
    rules: [
      {
        text: 'You excel at treachery.',
      },
      {
        title: 'EXTRA TRAITORS',
        text: `During setup you keep all 4 Traitor Cards. If you draw 2 (or more) of your own leaders, or draw 3 (or more) of the same faction's leaders, you may call mulligan to cause a redraw of all traitor cards.`,
      },
      {
        title: 'EXTRA TREACHERY',
        text: `You may hold up to 8 Treachery Cards. During setup and whenever you buy a card you get an extra for free from the top of the deck.`,
        karama:
          'During Bidding phase, your ability to gain an extra Treachery Card is disabled until the end of the turn.',
      },
      {
        title: 'CAPTURED LEADERS',
        text: [
          `Whenever you win a battle *(step 4.7)* you may randomly select 1 of the loser's leaders. Leaders already used in battles elsewhere this turn are exempt.`,
          `Secretly look at the leader and either put it face down in the Tleilaxu Tanks for 2 spice or keep them. You may use a kept leader once in battle after which they are returned if alive.`,
          `If you own no Harkonnen leaders all captured leaders are returned.`,
        ].join('\n\n'),
        karama: `You opponent does not have to reveal a part of their battle-plan early. This lasts until the end of the turn.`,
      },
      {
        title: "VLADIMIR'S SPITE",
        text: [
          `During Spice Collection phase take 2 spice from the spice bank if you control one stronghold. Take 3 instead if you control at least two strongholds.`,
          `You permanently lose this advantage once you gain the Kwisatz Haderach token.`,
        ].join('\n\n'),
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/harkonnen.jpg',
        description: '0.5 strength normally, 1 strength in when 1 spice is added.',
        name: 'Normal troop',
      },
    ],
    leaders: [
      '/generated/token/leader/harkonnen/uman-kudu.jpg',
      '/generated/token/leader/harkonnen/captain-iakin-nefud.jpg',
      '/generated/token/leader/harkonnen/piter-de-vries.jpg',
      '/generated/token/leader/harkonnen/beast-rabban.jpg',
      '/generated/token/leader/harkonnen/feyd-rautha.jpg',
    ],
  },
};
