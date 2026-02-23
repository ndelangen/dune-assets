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

export const Blin = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/blin.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Alia',
    strength: '0',
  },
});

export const Zoal = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/zoal.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Zoal',
    strength: '2',
  },
});

export const Wykk = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/wykk.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Wykk',
    strength: '3',
  },
});

export const MasterZaaf = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/zaaf.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'MasterZaaf',
    strength: '4',
  },
});

export const HidarFenAjidica = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/hidar.png',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Hidar Fen Ajidica',
    strength: '5',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/masters.jpg',
    logo: 'vector/logo/bene-tleilaxu.svg',
    name: 'Masters Council',
    strength: '',
  },
});
