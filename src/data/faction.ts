import { z } from 'zod';

import { GENERATED } from './generated';

type Color = 'White' | 'Brown' | 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Teal' | 'Blue' | 'Purple' | 'Pink';
interface Troop {
  front: z.infer<typeof GENERATED>;
  back: z.infer<typeof GENERATED>;
  count: number;
}
interface Card {
  front: z.infer<typeof GENERATED>;
  back: z.infer<typeof GENERATED>;
}

type Collection = 'bribe' | 'income' | 'reserve';

interface Deck {
  name: string;
  cards: Card[];
  placeholder: z.infer<typeof GENERATED>;
}

export interface Faction {
  colors: Color[];
  sheet: z.infer<typeof GENERATED>;
  leaders: z.infer<typeof GENERATED>[];
  traitors: z.infer<typeof GENERATED>[];
  troops: Troop[];
  alliance: z.infer<typeof GENERATED>;
  collections: Collection[];
  decks: {
    left: Deck[];
    right: Deck[];
  };
  planet?: z.infer<typeof GENERATED>;
  planetCard?: z.infer<typeof GENERATED>;
  shield: z.infer<typeof GENERATED>;
  spiceCount: number;
  logo: z.infer<typeof GENERATED>;
  extras: any[];
}
