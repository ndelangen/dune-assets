import { z } from 'zod';

import { ALL, LEADERS, TROOP, TROOP_MODIFIER } from './generated';

const STRENGTH = z.union([z.number().int(), z.string().length(1)]);
const OFFSET = z.tuple([z.number(), z.number()]);
const SCALE = z.number().min(0).max(1);
const URL = z.string().url();
const COLOR = z.string().regex(/^#[0-9a-f]{6}$/i);

const RULE = z.strictObject({
  title: z.string(),
  text: z.string(),
  karama: z.string(),
});

export const Leader = z.strictObject({
  name: z.string(),
  strength: STRENGTH,
  image: LEADERS.or(URL),
  logo: ALL,
  background: URL,
});

export const Shield = z.strictObject({
  name: z.string(),
  leader: z.strictObject({
    name: z.string(),
    image: LEADERS.or(URL),
  }),
  logo: ALL,
  background: URL,
});

export const Decal = z.strictObject({
  id: ALL,
  muted: z.boolean(),
  outline: z.boolean(),
  scale: SCALE,
  offset: OFFSET,
});

export const Alliance = z.strictObject({
  name: z.string(),
  troop: TROOP,
  logo: ALL,
  decals: z.array(Decal),
  text: z.string(),
  background: URL,
});

export const Treachery = z.strictObject({
  name: z.string(),
  subName: z.string(),
  color: COLOR,
  icon: z.tuple([COLOR, ALL]),
  decals: z.array(Decal),
  text: z.string(),
});

const TROOP_SIDE = z.strictObject({
  image: TROOP,
  background: URL,
  star: TROOP_MODIFIER.optional(),
  striped: z.boolean().optional(),
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
