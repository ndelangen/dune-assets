import preview from '../../.storybook/preview';
import { SpiceCard } from './Spice';

const meta = preview.meta({
  component: SpiceCard,
  globals: {
    viewport: {
      value: 'card',
    },
  },
});

export const Arsunt = meta.story({
  args: {
    name: 'Arsunt',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['arsunt'],
    amount: 3,
  },
});

export const GaraKulon = meta.story({
  args: {
    name: 'Gara Kulon',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['gara-kulon'],
    amount: 5,
  },
});

export const CielagoEast = meta.story({
  args: {
    name: 'Cielago East',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['cielago-east'],
    amount: 5,
  },
});

export const CielagoWest = meta.story({
  args: {
    name: 'Cielago West',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['cielago-west'],
    amount: 4,
  },
});

export const BightOfTheCliff = meta.story({
  args: {
    name: 'Bight of the Cliff',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['bight-of-the-cliff'],
    amount: 4,
  },
});

// Spice blows

export const BrokenLand = meta.story({
  args: {
    name: 'Broken Land',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['broken-land'],
    amount: 8,
  },
});

export const CielagoNorth = meta.story({
  args: {
    name: 'Cielago North',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['cielago-north'],
    amount: 8,
  },
});

export const CielagoSouth = meta.story({
  args: {
    name: 'Cielago South',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['cielago-south'],
    amount: 12,
  },
});

export const FuneralPlain = meta.story({
  args: {
    name: 'Funeral Plain',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['funeral-plain'],
    amount: 6,
  },
});

export const HabbanyaErg = meta.story({
  args: {
    name: 'Habbanya Erg',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['habbanya-erg'],
    amount: 8,
  },
});

export const HabbanyaRidgeFlat = meta.story({
  args: {
    name: 'Habbanya Ridge Flat',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['habbanya-ridge-flat'],
    amount: 10,
  },
});

export const HaggaBasin = meta.story({
  args: {
    name: 'Hagga Basin',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['hagga-basin'],
    amount: 6,
  },
});

export const OldGap = meta.story({
  args: {
    name: 'Old Gap',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['old-gap'],
    amount: 6,
  },
});

export const RedChasm = meta.story({
  args: {
    name: 'Red Chasm',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['red-chasm'],
    amount: 8,
  },
});

export const RockOutcropppings = meta.story({
  args: {
    name: 'Rock Outcroppings',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['rock-outcroppings'],
    amount: 6,
  },
});

export const SihayaRidge = meta.story({
  args: {
    name: 'Sihaya Ridge',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['sihaya-ridge'],
    amount: 6,
  },
});

export const SouthMesa = meta.story({
  args: {
    name: 'South Mesa',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['south-mesa'],
    amount: 10,
  },
});

export const TheGreatFlat = meta.story({
  args: {
    name: 'The Great Flat',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['the-great-flat'],
    amount: 10,
  },
});

export const TheMinorErg = meta.story({
  args: {
    name: 'The Minor Erg',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['the-minor-erg'],
    amount: 8,
  },
});

export const WindPassNorth = meta.story({
  args: {
    name: 'Wind Pass North',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['wind-pass-north'],
    amount: 6,
  },
});

export const DiscoveryFuneralPlain = meta.story({
  args: {
    name: 'Funeral Plain',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['funeral-plain', 'pasty-mesa'],
    amount: 6,
    text: `**Smuggler token** on Pasty Mesa\n+\n**6 spice** on Funeral Plain`,
  },
});

export const DiscoveryHaggaBasin = meta.story({
  args: {
    name: 'Hagga Basin',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['hagga-basin', 'gara-kulon'],
    amount: 6,
    text: `**Hiereg token** on Gara Kulon\n+\n**6 spice** on Hagga Basin`,
  },
});

export const DiscoveryOldGap = meta.story({
  args: {
    name: 'Old Gap',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['old-gap', 'false-wall-west'],
    amount: 6,
    text: `**Smuggler token** on False Wall West\n+\n**6 spice** on Hagga Basin`,
  },
});

export const DiscoveryRockOutcroppings = meta.story({
  args: {
    name: 'Rock Outcroppings',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['rock-outcroppings', 'meridian'],
    amount: 6,
    text: `**Hiereg token** on Meridian\n+\n**6 spice** on Hagga Basin`,
  },
});

export const DiscoverySihayaRidge = meta.story({
  args: {
    name: 'Sihaya Ridge',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['sihaya-ridge', 'cielago-east'],
    amount: 6,
    text: `**Hiereg token** on Cielago East\n+\n**6 spice** on Sihaya Ridge`,
  },
});

export const DiscoveryWindPassNorth = meta.story({
  args: {
    name: 'Wind Pass North',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['wind-pass-north', 'plastic-basin'],
    amount: 6,
    text: `**Smuggler token** on Plastic Basin\n+\n**6 spice** on Wind Pass North`,
    overlays: [
      {
        image: 'image/token/hiereg.png',
        offset: [105, 80],
        scale: 30,
      },
    ],
  },
});
