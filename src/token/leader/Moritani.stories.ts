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

export const VandoTerboli = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Vando Terboli',
    strength: '1',
  },
});

export const TrinKronos = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'TrinKronos',
    strength: '2',
  },
});

export const KrieuKronos = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Krieu Kronos',
    strength: '4',
  },
});

export const HiihResser = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Riih Resser',
    strength: '4',
  },
});

export const LupinoOrd = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Lupino Ord',
    strength: '5',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/hundro.jpg',
    logo: 'vector/logo/moritani.svg',
    name: 'Viscount Hundro Moritani',
    strength: '',
  },
});
