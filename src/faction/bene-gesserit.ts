import { Faction } from '../data/faction';

export default {
  logo: 'generated/token/faction/bene-gesserit.jpg',
  sheet: 'generated/sheet/benegesserit/bene-gesserit.pdf',
  shield: 'generated/shield/shield/bene-gesserit.jpg',
  spiceCount: 5,
  leaders: [
    'generated/token/leader/benegesserit/alia.jpg',
    'generated/token/leader/benegesserit/mother-ramallo.jpg',
    'generated/token/leader/benegesserit/wanna-yueh.jpg',
    'generated/token/leader/benegesserit/princes-irulan.jpg',
    'generated/token/leader/benegesserit/lady-fenring.jpg',
  ],
  colors: ['Blue', 'Teal', 'Pink'],
  alliance: 'generated/card/alliance/bene-gesserit.jpg',
  traitors: [
    'generated/card/traitor/benegesserit/alia.jpg',
    'generated/card/traitor/benegesserit/mother-ramolla.jpg',
    'generated/card/traitor/benegesserit/wanna-yueh.jpg',
    'generated/card/traitor/benegesserit/princes-irulan.jpg',
    'generated/card/traitor/benegesserit/lady-fenring.jpg',
  ],
  collections: ['bribe', 'income', 'reserve'],
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
      front: 'generated/token/troop/bene-gesserit.jpg',
      back: 'generated/token/troop/advisor.jpg',
      count: 20,
    },
  ],
} satisfies Faction;
