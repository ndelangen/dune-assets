import { Faction } from '../data/faction';

export default {
  logo: 'generated/token/faction/bene-tleilaxu.jpg',
  sheet: 'generated/sheet/benetleilaxu/bene-tleilaxu.pdf',
  shield: 'generated/shield/shield/bene-tleilaxu.jpg',
  spiceCount: 10,
  leaders: [
    'generated/token/leader/benetleilaxu/blin.jpg',
    'generated/token/leader/benetleilaxu/zoal.jpg',
    'generated/token/leader/benetleilaxu/wykk.jpg',
    'generated/token/leader/benetleilaxu/master-zaaf.jpg',
    'generated/token/leader/benetleilaxu/hidar-fen-ajidica.jpg',
  ],
  alliance: 'generated/card/alliance/bene-tleilaxu.jpg',
  traitors: [
    'generated/card/traitor/benetleilaxu/blin.jpg',
    'generated/card/traitor/benetleilaxu/zoal.jpg',
    'generated/card/traitor/benetleilaxu/wykk.jpg',
    'generated/card/traitor/benetleilaxu/master-zaaf.jpg',
    'generated/card/traitor/benetleilaxu/hidar-fen-ajidica.jpg',
  ],
  collections: [],
  decks: {
    left: [
      {
        name: 'Draw',
        cards: [],
        placeholder: 'generated/card/back/traitor.jpg',
      },
      {
        name: 'Discard',
        cards: [],
        placeholder: 'generated/card/back/traitor.jpg',
      },
    ],
    right: [
      {
        name: 'Traitor',
        cards: [],
        placeholder: 'generated/card/back/traitor.jpg',
      },
    ],
  },
  extras: [],
  troops: [
    {
      front: 'generated/token/troop/benetleilaxu.jpg',
      back: 'generated/token/troop/benetleilaxu.jpg',
      count: 17,
    },
    {
      front: 'generated/token/troop/fedaykin.jpg',
      back: 'generated/token/troop/fedaykin.jpg',
      count: 3,
    },
  ],
} satisfies Faction;
