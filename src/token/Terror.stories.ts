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

// biome-ignore lint/suspicious/noShadowRestrictedNames: Dune terror token name, not the Atomics API
export const Atomics = meta.story({
  args: {
    background: `url('/generated/utils/background/terror.jpg') top left / cover no-repeat`,
    image: 'vector/decal/atomics.svg',
    circle: false,
    size: { width: 160, height: 160 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 0,
  },
});

export const Assassination = meta.story({
  args: {
    background: `url('/generated/utils/background/terror.jpg') top left / cover no-repeat`,
    image: 'vector/decal/assassination.svg',
    circle: false,
    size: { width: 150, height: 150 },
    fill: '#000',
    stroke: '#ded4a3',
    strokeWidth: 1.2,
  },
});

export const Extortion = meta.story({
  args: {
    background: `url('/generated/utils/background/terror.jpg') top left / cover no-repeat`,
    image: 'vector/decal/extortion.svg',
    circle: false,
    size: { width: 170, height: 170 },
    fill: '#000',
    stroke: '#ded4a3',
    strokeWidth: 8,
  },
});

export const Robbery = meta.story({
  args: {
    background: `url('/generated/utils/background/terror.jpg') top left / cover no-repeat`,
    image: 'vector/decal/robbery.svg',
    circle: false,
    size: { width: 170, height: 170 },
    fill: '#000',
    stroke: '#ded4a3',
    strokeWidth: 8,
  },
});

export const Sabotage = meta.story({
  args: {
    background: `url('/generated/utils/background/terror.jpg') top left / cover no-repeat`,
    image: 'vector/decal/sabotage.svg',
    circle: false,
    size: { width: 150, height: 150 },
    fill: '#000',
    stroke: '#ded4a3',
    strokeWidth: 5,
  },
});

export const SneakAttack = meta.story({
  args: {
    background: `url('/generated/utils/background/terror.jpg') top left / cover no-repeat`,
    image: 'vector/decal/ornithopter.svg',
    circle: false,
    size: { width: 180, height: 180 },
    fill: '#000',
    stroke: '#ded4a3',
    strokeWidth: 3,
  },
});
