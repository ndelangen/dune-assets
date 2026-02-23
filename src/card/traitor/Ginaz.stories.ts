import preview from '../../../.storybook/preview';
import { TraitorCard } from './Traitor';

const meta = preview.meta({
  component: TraitorCard,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
});

export const JenWu = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/jehwu.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Jen Wu',
    strength: '4',
    owner: 'Ginaz',
  },
});

export const JammoReed = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/jammo.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Jammo Reed',
    strength: '5',
    owner: 'Ginaz',
  },
});

export const KarstyTopper = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/karsty.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Karsty Topper',
    strength: '5',
    owner: 'Ginaz',
  },
});

export const RivvyDinari = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/rivvy.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Rivvy Dinari',
    strength: '6',
    owner: 'Ginaz',
  },
});

export const MordCour = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/mord.png',
    logo: 'vector/logo/ginaz.svg',
    name: 'Mord Cour',
    strength: '7',
    owner: 'Ginaz',
  },
});
