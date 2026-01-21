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

export const BeneTleilaxu: Story = {
  args: {
    name: 'Bene Tleilaxu',
    logo: '/generated/token/faction/bene-tleilaxu.jpg',
    start: `20 troops *(off-planet)* reserves. Start with 20 spice.`,
    revival: '0 troop free revival.',
    color: '#510B7F',
    alliance: {
      text: `Your ally may revive their forces and leaders at Tleilaxu Revival prices.`,
      karama: `When your **REVIVAL INCREASE** ability is karama'd, this alliance ability is disabled until the end of the turn.`,
    },
    fate: {
      title: 'STONE BURNER',
      text: `Play your fate card during Battle *(before step 3)* to make all forces in a territory unable to fight at full strength. *(They cannot be spice dialed, including Fremen)*`,
    },
    rules: [
      {
        text: 'You have superior genetic engineering.',
      },
      {
        title: 'DISHONORABLE',
        text: `You may not give/receive bribes except during Mentat Phase, or make binding deals, except receiving info of cards up for bid in exchange for spice during the bidding phase.`,
      },
      {
        title: 'INFILTRATION',
        text: [
          `In setup you will get 5 Traitor Cards from the unchosen traitors, separate one to be your traitor and the rest are are your face dancers. You may discard and redraw one face dancer during Mentat phase.`,
          `During Storm phase you may reveal a face dancer card that matches a target leader in the Tleilaxu Tanks. Revive that leader and infiltrate that faction. Commit one of your own leaders to be impersonating the target leader.`,
          `The faction is infiltrated as long as the leader remains alive and you hold the face dancer card. If the Infiltration ends redraw the card and kill your impersonating leader face down.`,
          `The impersonating leader can be traitored in place of the target leader in battle or traitored immediately to end the infiltration.`,
          `At any time you may look the the spice totals, Treachery Cards, and battle plan (step 3.2) of the infiltrated faction. If the faction wins the game you and that faction win together. If the faction has an ally you win instead of that ally unless the alliance controls 5+ strongholds.`,
        ].join('\n\n'),
      },
      {
        title: 'REVIVAL INCOME',
        text: [
          `Take one spice for every non-Bene-Tleilaxu troop revived.`,
          `You collect all spice from non-Bene-Tleilaxu revived leaders.`,
          `You may set prices to revive any one leader per faction per turn.`,
        ].join('\n\n'),
        karama: `You may not collect spice from revivals. You may not set prices to revive leaders. Other factions can only revive leaders normally.`,
      },
      {
        title: 'REVIVAL INCREASE',
        text: [
          `You can revive any amount of your troops.`,
          `You can revive any amount of your leaders.`,
          `You pay half price when reviving anything except your face down leaders, which are full price.`,
          `You may also increase any faction's troop revival limit from 3 to 5.`,
        ].join('\n\n'),
        karama: `You may not increase any faction's troop revival limit. You are limited to a maximum of 3 revivals. You have to pay full price when reviving troops. You can only revive 1 leader and only if at one point during the game you only had 1 leader remaining.`,
      },
      {
        title: 'SYNTHETIC SPICE',
        text: [
          `Whenever you ship you may kill your forces in reserves to pay for the shipment.`,
          `Each troop is worth one spice, which is taken from the spice bank to pay for the shipment.`,
        ].join('\n\n'),
      },
      {
        title: 'ZOAL',
        text: [
          `If Zoal is revealed in a battle plan *(step 4.4)*, survives, and the opposing leader dies he may impersonate the opponent's leader to infiltrate that faction.`,
          `During Storm phase the following turn Zoal impersonates that leader if he is still available. Otherwise follow normal Infiltration Rules.`,
          `The opponent wins the fight as if by traitor. You may keep any Treachery Cards you used. All of your troops in that territory are brought back to reserves for free. You keep any spice you used to dial.`,
        ].join('\n\n'),
      },
    ],
    troops: [
      {
        image: '/generated/token/troop/bene-tleilaxu.jpg',
        description: '0.5 strength normally, 1 strength in when 1 spice is added.',
        name: 'Normal troop',
      },
    ],
    leaders: [
      '/generated/token/leader/benetleilaxu/blin.jpg',
      '/generated/token/leader/benetleilaxu/zoal.jpg',
      '/generated/token/leader/benetleilaxu/wykk.jpg',
      '/generated/token/leader/benetleilaxu/master-zaaf.jpg',
      '/generated/token/leader/benetleilaxu/hidar-fen-ajidica.jpg',
    ],
  },
};
