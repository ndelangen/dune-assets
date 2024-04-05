import type { Meta, StoryObj } from '@storybook/react';
import { SpiceCard } from './Spice';

const meta = {
  component: SpiceCard,
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
    name: 'Ciélago East',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['ceilago-east'],
    amount: 5,
  },
};

export const CielagoWest: Story = {
  args: {
    name: 'Ciélago West',
    subName: 'Spice mine',
    icon: 'spice-mine',
    highlights: ['ceilago-west'],
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

export const CeilagoNorth: Story = {
  args: {
    name: 'Ceilago North',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['ceilago-north'],
    amount: 8,
  },
};

export const CeilagoSouth: Story = {
  args: {
    name: 'Ceilago South',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['ceilago-south'],
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

export const HabanyaErg: Story = {
  args: {
    name: 'Habbanya Erg',
    subName: 'Spice blow',
    icon: 'spice',
    highlights: ['habbanya-erg'],
    amount: 8,
  },
};

export const HabanyaRidgeFlat: Story = {
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
