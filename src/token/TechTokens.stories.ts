import preview from '../../.storybook/preview';
import { CustomToken } from './Custom';

const meta = preview.meta({
  component: CustomToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
});

export const AxlotlTanks = meta.story({
  args: {
    background: `url('/generated/utils/background/tech-purple.jpg') top left / cover no-repeat`,
    image: 'vector/icon/revival.svg',
    circle: false,
    top: 'Axlotl Tanks',
    bottom: 'revival phase\nTleilaxu does not trigger',
  },
});

export const ChoamCharity = meta.story({
  args: {
    background: `url('/generated/utils/background/tech-yellow.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice.svg',
    circle: false,
    top: 'CHOAM Charity',
    bottom: 'choam charity phase\nBene Gesserit does not trigger',
  },
});

export const Heighliners = meta.story({
  args: {
    background: `url('/generated/utils/background/tech-teal.jpg') top left / cover no-repeat`,
    image: 'vector/icon/heighliners.svg',
    circle: false,
    top: 'Heighliners',
    bottom: 'shipping & movement phase\nSpacing guild does not trigger',
  },
});

export const ImperialSupplies = meta.story({
  args: {
    background: `url('/generated/utils/background/tech-red.jpg') top left / cover no-repeat`,
    image: 'vector/icon/bidding_standalone.svg',
    circle: false,
    top: 'Imperial Supplies',
    bottom: 'Bidding Phase\nEmperor does not trigger',
  },
});

export const Customs = meta.story({
  args: {
    background: `url('/generated/utils/background/tech-blue.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice-alt.svg',
    circle: false,
    top: 'Customs',
    bottom: 'Once per turn\nWhen a bribe is paid',
  },
});

export const SpiceProduction = meta.story({
  args: {
    background: `url('/generated/utils/background/tech-orange.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice-blow_standalone.svg',
    circle: false,
    top: 'Spice Production',
    bottom: 'Collection Phase\nWhen spice is harvested',
    size: { width: 120, height: 120 },
  },
});

export const Carryalls = meta.story({
  args: {
    background: `url('/generated/utils/background/tech-green.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice-mine.svg',
    circle: false,
    top: 'Carryalls',
    bottom: 'Storm phase\nWhen troops are rescued',
    size: { width: 120, height: 120 },
  },
});

export const Kanly = meta.story({
  args: {
    background: `url('/generated/utils/background/tech-white.jpg') top left / cover no-repeat`,
    image: 'vector/decal/kanly.svg',
    circle: false,
    top: 'Kanly',
    bottom: 'Once per turn\nWhen you contest a win',
    size: { width: 120, height: 120 },
  },
});

export const WaterStealing = meta.story({
  args: {
    background: `url('/generated/utils/background/tech-maroon.jpg') top left / cover no-repeat`,
    image: 'vector/decal/drops.svg',
    circle: false,
    top: 'Water Stealing',
    bottom: 'When a leader is killed\nFremen leaders do not trigger',
    size: { width: 120, height: 120 },
  },
});
