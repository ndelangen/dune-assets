import { Faction } from '../data/faction';

export default {
  logo: 'generated/token/faction/harkonnen.jpg',
  sheet: 'generated/sheet/harkonnen/harkonnen.pdf',
  shield: 'generated/shield/shield/harkonnen.jpg',
  spiceCount: 10,
  leaders: [
    'generated/token/leader/harkonnen/uman-kudu.jpg',
    'generated/token/leader/harkonnen/captain-iakin-nefud.jpg',
    'generated/token/leader/harkonnen/piter-de-vries.jpg',
    'generated/token/leader/harkonnen/beast-rabban.jpg',
    'generated/token/leader/harkonnen/feyd-rautha.jpg',
  ],
  alliance: 'generated/card/alliance/harkonnen.jpg',
  traitors: [
    'generated/card/traitor/harkonnen/uman-kudu.jpg',
    'generated/card/traitor/harkonnen/captain-iakin-nefud.jpg',
    'generated/card/traitor/harkonnen/piter-de-vries.jpg',
    'generated/card/traitor/harkonnen/beast-rabban.jpg',
    'generated/card/traitor/harkonnen/feyd-rautha.jpg',
  ],
  collections: ['bribe'],
  decks: {
    left: [],
    right: [],
  },
  extras: [],
  troops: [
    {
      front: 'generated/token/troop/harkonnen.jpg',
      back: 'generated/token/troop/harkonnen.jpg',
      count: 20,
    },
  ],
} satisfies Faction;
