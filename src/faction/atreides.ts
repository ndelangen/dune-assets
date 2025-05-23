import { Faction } from '../data/faction';

export default {
  logo: 'generated/token/faction/atreides.jpg',
  sheet: 'generated/sheet/atreides/atreides.pdf',
  shield: 'generated/shield/shield/atreides.jpg',
  spiceCount: 10,
  leaders: [
    'generated/token/leader/atreides/dr-yueh.jpg',
    'generated/token/leader/atreides/duncan-idaho.jpg',
    'generated/token/leader/atreides/gurney-halleck.jpg',
    'generated/token/leader/atreides/lady-jessica.jpg',
    'generated/token/leader/atreides/thufir-hawat.jpg',
  ],
  colors: ['Green', 'Teal', 'Brown', 'Yellow'],
  alliance: 'generated/card/alliance/atreides.jpg',
  traitors: [
    'generated/card/traitor/atreides/dr-yueh.jpg',
    'generated/card/traitor/atreides/duncan-idaho.jpg',
    'generated/card/traitor/atreides/gurney-halleck.jpg',
    'generated/card/traitor/atreides/lady-jessica.jpg',
    'generated/card/traitor/atreides/thufir-hawat.jpg',
  ],
  collections: ['bribe'],
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
      front: 'generated/token/troop/atreides.jpg',
      back: 'generated/token/troop/atreides.jpg',
      count: 20,
    },
  ],
} satisfies Faction;
