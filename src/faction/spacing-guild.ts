import { Faction } from '../data/faction';

export default {
  logo: 'generated/token/faction/guild.jpg',
  sheet: 'generated/sheet/spacingguild/spacing-guild.pdf',
  shield: 'generated/shield/shield/guild.jpg',
  spiceCount: 5,
  leaders: [
    'generated/token/leader/guild/representative.jpg',
    'generated/token/leader/guild/soo-soo-sook.jpg',
    'generated/token/leader/guild/master-bewt.jpg',
    'generated/token/leader/guild/esmar-tuek.jpg',
    'generated/token/leader/guild/staban-tuek.jpg',
  ],
  colors: ['Orange', 'Brown', 'Red', 'Pink', 'Yellow'],
  alliance: 'generated/card/alliance/spacing-guild.jpg',
  traitors: [
    'generated/card/traitor/guild/representative.jpg',
    'generated/card/traitor/guild/soo-soo-sook.jpg',
    'generated/card/traitor/guild/master-bewt.jpg',
    'generated/card/traitor/guild/esmar-tuek.jpg',
    'generated/card/traitor/guild/staban-tuek.jpg',
  ],
  collections: ['bribe', 'income'],
  decks: {
    left: [
      {
        name: 'Discard',
        cards: [],
        placeholder: 'generated/card/back/traitor.jpg',
      },
    ],
    right: [],
  },
  extras: [],
  troops: [
    {
      front: 'generated/token/troop/guild.jpg',
      back: 'generated/token/troop/guild.jpg',
      count: 20,
    },
  ],
} satisfies Faction;
