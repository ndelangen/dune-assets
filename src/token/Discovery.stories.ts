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
  globals: {
    viewport: {
      value: 'disc',
    },
    disc: true,
  },
});

export const Jacurutu = meta.story({
  args: {
    background: `url('/generated/utils/background/hiereg.jpg') top left / cover no-repeat`,
    image: 'vector/icon/seitch.svg',
    circle: false,
    size: { width: 150, height: 150 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 4.5,
  },
});

export const Cistern = meta.story({
  args: {
    background: `url('/generated/utils/background/hiereg.jpg') top left / cover no-repeat`,
    image: 'vector/decal/cistern.svg',
    circle: false,
    size: { width: 150, height: 150 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 3,
  },
});

export const EcologicalTestingStation = meta.story({
  args: {
    background: `url('/generated/utils/background/hiereg.jpg') top left / cover no-repeat`,
    image: 'vector/decal/ecological-testing-station.svg',
    circle: false,
    size: { width: 180, height: 180 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 2,
  },
});

export const Shrine = meta.story({
  args: {
    background: `url('/generated/utils/background/hiereg.jpg') top left / cover no-repeat`,
    image: 'vector/decal/shrine.svg',
    circle: false,
    size: { width: 180, height: 180 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 2,
  },
});

export const Ornithopter = meta.story({
  args: {
    background: `url('/generated/utils/background/discovery.jpg') top left / cover no-repeat`,
    image: 'vector/decal/ornithopter.svg',
    circle: false,
    size: { width: 210, height: 210 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 2,
  },
});

export const OrgizProcessingPlant = meta.story({
  args: {
    background: `url('/generated/utils/background/discovery.jpg') top left / cover no-repeat`,
    image: 'vector/decal/orgiz-processing-station.svg',
    circle: false,
    size: { width: 160, height: 160 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 2,
  },
});

export const TreacheryCash = meta.story({
  args: {
    background: `url('/generated/utils/background/discovery.jpg') top left / cover no-repeat`,
    image: 'vector/icon/treachery.svg',
    circle: false,
    size: { width: 160, height: 160 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 3,
  },
});

export const SpiceCash = meta.story({
  args: {
    background: `url('/generated/utils/background/discovery.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice.svg',
    circle: false,
    size: { width: 160, height: 160 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 3,
  },
});
