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

export const CammarPilru = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/cammar.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Cammar Pilru',
    strength: '1',
  },
});

export const KailiaVernius = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/kailea.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Kailia Vernius',
    strength: '2',
  },
});

export const DominicVernius = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/dominic.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Dominic Vernius',
    strength: '4',
  },
});

export const TessiaVernius = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Tessia Vernius',
    strength: '5',
  },
});

export const CtairPilru = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/ctair.png',
    logo: 'vector/logo/ixian.svg',
    name: 'Ctair Pilru',
    strength: '5',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/rhombor.jpg',
    logo: 'vector/logo/ixian.svg',
    name: 'Prince Rhombur Vernius',
    strength: '',
  },
});
