import { z } from 'zod';

export const DECAL = z.union([
  //
  z.literal('A'),
  z.literal('B'),
]);

export const LEADER = z.union([
  //
  z.literal('A'),
  z.literal('B'),
]);

export const TROOP = z.union([
  //
  z.literal('A'),
  z.literal('B'),
]);

export const CARD_ICON = z.union([
  //
  z.literal('A'),
  z.literal('B'),
]);

export const CARD_TYPE = z.union([
  //
  z.literal('A'),
  z.literal('B'),
]);

export const CARD_HEAD = z.union([
  //
  z.literal('A'),
  z.literal('B'),
]);

export const TROOP_MODIFIER = z.union([
  //
  z.literal('A'),
  z.literal('B'),
]);
