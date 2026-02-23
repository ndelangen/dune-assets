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

export const VandoTerboli = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Vando Terboli',
    strength: '1',
    owner: 'Moritani',
  },
});

export const TrinKronos = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'TrinKronos',
    strength: '2',
    owner: 'Moritani',
  },
});

export const KrieuKronos = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Krieu Kronos',
    strength: '4',
    owner: 'Moritani',
  },
});

export const HiihResser = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Riih Resser',
    strength: '4',
    owner: 'Moritani',
  },
});

export const LupinoOrd = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/moritani.svg',
    name: 'Lupino Ord',
    strength: '5',
    owner: 'Moritani',
  },
});
