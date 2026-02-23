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

export const Alia = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/alia.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Alia',
    strength: '5',
    owner: 'Bene Gesserit',
  },
});

export const WannaYueh = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/wanna.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Wanna Yueh',
    strength: '5',
    owner: 'Bene Gesserit',
  },
});

export const MotherRamolla = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/ramallo.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Mother Ramallo',
    strength: '5',
    owner: 'Bene Gesserit',
  },
});

export const PrincesIrulan = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/irulan.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Princes Irulan',
    strength: '5',
    owner: 'Bene Gesserit',
  },
});

export const LadyFenring = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/lady-fenring.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Lady Fenring',
    strength: '5',
    owner: 'Bene Gesserit',
  },
});
