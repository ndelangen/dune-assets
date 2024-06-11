import { Faction } from '../data/faction';

export default {
  logo: 'generated/token/faction/fremen.jpg',
  sheet: 'generated/sheet/fremen/fremen.pdf',
  shield: 'generated/shield/shield/fremen.jpg',
  spiceCount: 10,
  leaders: [
    'generated/token/leader/fremen/jamis.jpg',
    'generated/token/leader/fremen/shadout-mapes.jpg',
    'generated/token/leader/fremen/otheym.jpg',
    'generated/token/leader/fremen/chani.jpg',
    'generated/token/leader/fremen/stilgar.jpg',
  ],
  alliance: 'generated/card/alliance/fremen.jpg',
  traitors: [
    'generated/card/traitor/fremen/jamis.jpg',
    'generated/card/traitor/fremen/shadout-mapes.jpg',
    'generated/card/traitor/fremen/otheym.jpg',
    'generated/card/traitor/fremen/chani.jpg',
    'generated/card/traitor/fremen/stilgar.jpg',
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
    right: [
      {
        name: 'Storm',
        cards: [],
        placeholder: 'generated/card/back/storm.jpg',
      },
    ],
  },
  extras: [],
  troops: [
    {
      front: 'generated/token/troop/fremen.jpg',
      back: 'generated/token/troop/fremen.jpg',
      count: 17,
    },
    {
      front: 'generated/token/troop/fedaykin.jpg',
      back: 'generated/token/troop/fedaykin.jpg',
      count: 3,
    },
  ],
} satisfies Faction;
