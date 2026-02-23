import preview from '../../../.storybook/preview';
import { CustomToken } from './Leader';

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

export const JenWu = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/jehwu.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Jen Wu',
    strength: '4',
  },
});

export const JammoReed = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/jammo.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Jammo Reed',
    strength: '5',
  },
});

export const KarstyTopper = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/karsty.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Karsty Topper',
    strength: '5',
  },
});

export const RivvyDinari = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/rivvy.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Rivvy Dinari',
    strength: '6',
  },
});

export const MordCour = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/mord.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Mord Cour',
    strength: '7',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/whitemore-bludd.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Whitmore Bludd',
    strength: '',
  },
});
