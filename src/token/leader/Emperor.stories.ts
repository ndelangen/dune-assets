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

export const Bashar = meta.story({
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/bashar.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Bashar',
    strength: '2',
  },
});

export const Burseg = meta.story({
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/burseg.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Burseg',
    strength: '3',
  },
});

export const Caid = meta.story({
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/caid.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Caid',
    strength: '3',
  },
});

export const CaptainAramsham = meta.story({
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/aramsham.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Cpt. Aramsham',
    strength: '5',
  },
});

export const HasimirFenring = meta.story({
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/hasimir.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Hasimir Fenring',
    strength: '6',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/hasimir.png',
    logo: 'vector/logo/emperor.svg',
    name: 'Emperor Shadam IV',
    strength: '',
  },
});
