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

export const Auditor = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Auditor',
    strength: '2',
    owner: 'CHOAM',
  },
});

export const ViscountTull = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Viscount Tull',
    strength: '2',
    owner: 'CHOAM',
  },
});

export const DukeVerdun = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Duke Verdun',
    strength: '3',
    owner: 'CHOAM',
  },
});

export const RajivLondine = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Rajiv Londine',
    strength: '3',
    owner: 'CHOAM',
  },
});

export const FrankosAru = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Frankos Aru',
    strength: '4',
    owner: 'CHOAM',
  },
});

export const LadyJalma = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/choam.svg',
    name: 'Lady Jalma',
    strength: '4',
    owner: 'CHOAM',
  },
});
