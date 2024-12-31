import type { Meta, StoryObj } from '@storybook/react';
import { SpiceCard } from './Spice';

const meta = {
  component: SpiceCard,
  globals: {
    viewport: {
      value: 'card',
    },
  },
} satisfies Meta<typeof SpiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Arsunt: Story = {
  args: {
    name: 'Arsunt',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['arsunt'],
    amount: 3,
  },
};

export const GaraKulon: Story = {
  args: {
    name: 'Gara Kulon',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['gara-kulon'],
    amount: 5,
  },
};

export const CielagoEast: Story = {
  args: {
    name: 'Cielago East',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['cielago-east'],
    amount: 5,
  },
};

export const CielagoWest: Story = {
  args: {
    name: 'Cielago West',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['cielago-west'],
    amount: 4,
  },
};

export const BightOfTheCliff: Story = {
  args: {
    name: 'Bight of the Cliff',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['bight-of-the-cliff'],
    amount: 4,
  },
};

// Spice blows

export const BrokenLand: Story = {
  args: {
    name: 'Broken Land',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['broken-land'],
    amount: 8,
  },
};

export const CielagoNorth: Story = {
  args: {
    name: 'Cielago North',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['cielago-north'],
    amount: 8,
  },
};

export const CielagoSouth: Story = {
  args: {
    name: 'Cielago South',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['cielago-south'],
    amount: 12,
  },
};

export const FuneralPlain: Story = {
  args: {
    name: 'Funeral Plain',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['funeral-plain'],
    amount: 6,
  },
};

export const HabbanyaErg: Story = {
  args: {
    name: 'Habbanya Erg',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['habbanya-erg'],
    amount: 8,
  },
};

export const HabbanyaRidgeFlat: Story = {
  args: {
    name: 'Habbanya Ridge Flat',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['habbanya-ridge-flat'],
    amount: 10,
  },
};

export const HaggaBasin: Story = {
  args: {
    name: 'Hagga Basin',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['hagga-basin'],
    amount: 6,
  },
};

export const OldGap: Story = {
  args: {
    name: 'Old Gap',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['old-gap'],
    amount: 6,
  },
};

export const RedChasm: Story = {
  args: {
    name: 'Red Chasm',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['red-chasm'],
    amount: 8,
  },
};

export const RockOutcropppings: Story = {
  args: {
    name: 'Rock Outcroppings',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['rock-outcroppings'],
    amount: 6,
  },
};

export const SihayaRidge: Story = {
  args: {
    name: 'Sihaya Ridge',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['sihaya-ridge'],
    amount: 6,
  },
};

export const SouthMesa: Story = {
  args: {
    name: 'South Mesa',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['south-mesa'],
    amount: 10,
  },
};

export const TheGreatFlat: Story = {
  args: {
    name: 'The Great Flat',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['the-great-flat'],
    amount: 10,
  },
};

export const TheMinorErg: Story = {
  args: {
    name: 'The Minor Erg',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['the-minor-erg'],
    amount: 8,
  },
};

export const WindPassNorth: Story = {
  args: {
    name: 'Wind Pass North',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['wind-pass-north'],
    amount: 6,
  },
};

export const DiscoveryFuneralPlain: Story = {
  args: {
    name: 'Funeral Plain',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['funeral-plain', 'pasty-mesa'],
    amount: 6,
    text: `**Smuggler token** on Pasty Mesa\n+\n**6 spice** on Funeral Plain`,
  },
};

export const DiscoveryHaggaBasin: Story = {
  args: {
    name: 'Hagga Basin',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['hagga-basin', 'gara-kulon'],
    amount: 6,
    text: `**Hiereg token** on Gara Kulon\n+\n**6 spice** on Hagga Basin`,
  },
};

export const DiscoveryOldGap: Story = {
  args: {
    name: 'Old Gap',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['old-gap', 'false-wall-west'],
    amount: 6,
    text: `**Smuggler token** on False Wall West\n+\n**6 spice** on Hagga Basin`,
  },
};

export const DiscoveryRockOutcroppings: Story = {
  args: {
    name: 'Rock Outcroppings',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['rock-outcroppings', 'meridian'],
    amount: 6,
    text: `**Hiereg token** on Meridian\n+\n**6 spice** on Hagga Basin`,
  },
};

export const DiscoverySihayaRidge: Story = {
  args: {
    name: 'Sihaya Ridge',
    subName: 'Spice blow - Discovery',
    icon: 'spice',
    highlights: ['sihaya-ridge', 'cielago-east'],
    amount: 6,
    text: `**Hiereg token** on Cielago East\n+\n**6 spice** on Sihaya Ridge`,
  },
};

export const DiscoveryWindPassNorth: Story = {
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
};
