import { Faction } from '../data/faction';

export default {
  logo: 'generated/token/faction/ixian.jpg',
  sheet: 'generated/sheet/ixian/ixian.pdf',
  shield: 'generated/shield/shield/ixian.jpg',
  spiceCount: 10,
  leaders: [
    'generated/token/leader/ixian/cammar-pilru.jpg',
    'generated/token/leader/ixian/kailia-vernius.jpg',
    'generated/token/leader/ixian/dominic-vernius.jpg',
    'generated/token/leader/ixian/tessia-vernius.jpg',
    'generated/token/leader/ixian/ctair-pilru.jpg',
  ],
  alliance: 'generated/card/alliance/ixian.jpg',
  traitors: [
    'generated/card/traitor/ixian/cammar-pilru.jpg',
    'generated/card/traitor/ixian/kailia-vernius.jpg',
    'generated/card/traitor/ixian/dominic-vernius.jpg',
    'generated/card/traitor/ixian/tessia-vernius.jpg',
    'generated/card/traitor/ixian/ctair-pilru.jpg',
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
      front: 'generated/token/troop/cyborg.jpg',
      back: 'generated/token/troop/cyborg.jpg',
      count: 9,
    },
    {
      front: 'generated/token/troop/upgraded-cyborg.jpg',
      back: 'generated/token/troop/upgraded-cyborg.jpg',
      count: 9,
    },
    {
      front: 'generated/token/troop/suboid.jpg',
      back: 'generated/token/troop/suboid.jpg',
      count: 11,
    },
  ],
} satisfies Faction;
