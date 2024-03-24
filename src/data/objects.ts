import { z } from 'zod';

import { CARD_HEAD, CARD_ICON, CARD_TYPE, DECAL, TROOP, TROOP_MODIFIER } from './generated';

const STRENGTH = z.union([z.number().int(), z.string().length(1)]);
const OFFSET = z.tuple([z.number(), z.number()]);
const SCALE = z.number().min(0).max(1);
const URL = z.string().url();

const RULE = z.strictObject({
  title: z.string(),
  text: z.string(),
  karama: z.string(),
});

export const Leader = z.strictObject({
  name: z.string(),
  strength: STRENGTH,
  image: URL,
  logo: URL,
  background: URL,
});

export const Shield = z.strictObject({
  name: z.string(),
  leader: z.strictObject({
    name: z.string(),
    image: URL,
  }),
  logo: URL,
  background: URL,
});

export const Decal = z.strictObject({
  id: DECAL,
  muted: z.boolean(),
  outline: z.boolean(),
  scale: SCALE,
  offset: OFFSET,
});

export const Alliance = z.strictObject({
  name: z.string(),
  troop: URL,
  logo: URL,
  decals: z.array(Decal),
  text: z.string(),
  background: URL,
});

export const Treachery = z.strictObject({
  name: z.string(),
  head: CARD_HEAD,
  icon: z.tuple([CARD_TYPE, CARD_ICON]),
  decals: z.array(Decal),
  text: z.string(),
});

const TROOP_SIDE = z.strictObject({
  id: TROOP,
  background: URL,
  modifiers: z.array(TROOP_MODIFIER),
});

export const Troop = z.intersection(
  TROOP_SIDE,
  z.strictObject({
    back: TROOP_SIDE.optional(),
  }),
);

export const Sheet = z.strictObject({
  name: z.string(),
  background: URL,
  troops: z.array(
    z.strictObject({
      image: URL,
      name: z.string(),
      description: z.string(),
    }),
  ),
  leaders: z.array(URL),
  start: z.string(),
  revival: z.string(),
  rules: z.array(RULE),
  fate: RULE,
  alliance: RULE,
});

export const Faction = z.strictObject({
  troops: z.array(Troop),
});
