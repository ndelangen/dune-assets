interface Troop {
  front: string;
  back: string;
  count: number;
}

type Collection = 'bribe' | 'income' | 'reserve';

interface Deck {
  name: string;
  cards: string[];
  back: string;
}

export interface Faction {
  sheet: string;
  leaders: string[];
  traitors: string[];
  troops: Troop[];
  alliance: string;
  collections: Collection[];
  decks: {
    left: Deck[];
    right: Deck[];
  };
  planet?: string;
  planetCard?: string;
  shield: string;
  spiceCount: number;
  logo: string;
  extras: any[];
}
