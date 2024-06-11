import { Faction } from '../data/faction';

export default {
  logo: 'generated/token/faction/iduali.jpg',
  sheet: 'generated/sheet/iduali/iduali.pdf',
  shield: 'generated/shield/shield/iduali.jpg',
  spiceCount: 5,
  leaders: [
    'generated/token/leader/iduali/rat-runner.jpg',
    'generated/token/leader/iduali/korba.jpg',
    'generated/token/leader/iduali/javid.jpg',
    'generated/token/leader/iduali/smuggler.jpg',
    'generated/token/leader/iduali/sabiha.jpg',
  ],
  alliance: 'generated/card/alliance/iduali.jpg',
  traitors: [
    'generated/card/traitor/iduali/rat-runner.jpg',
    'generated/card/traitor/iduali/korba.jpg',
    'generated/card/traitor/iduali/javid.jpg',
    'generated/card/traitor/iduali/smuggler.jpg',
    'generated/card/traitor/iduali/sabiha.jpg',
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
      front: 'generated/token/troop/iduali.jpg',
      back: 'generated/token/troop/iduali.jpg',
      count: 20,
    },
  ],
} satisfies Faction;
