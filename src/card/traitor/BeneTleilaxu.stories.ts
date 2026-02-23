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

export const Blin = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/blin.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Alia',
    strength: '0',
    owner: 'Bene Tleilaxu',
  },
});

export const Zoal = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/zoal.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Zoal',
    strength: '2',
    owner: 'Bene Tleilaxu',
  },
});

export const Wykk = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/wykk.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Wykk',
    strength: '3',
    owner: 'Bene Tleilaxu',
  },
});

export const MasterZaaf = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/zaaf.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'MasterZaaf',
    strength: '4',
    owner: 'Bene Tleilaxu',
  },
});

export const HidarFenAjidica = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/hidar.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Hidar Fen Ajidica',
    strength: '5',
    owner: 'Bene Tleilaxu',
  },
});
