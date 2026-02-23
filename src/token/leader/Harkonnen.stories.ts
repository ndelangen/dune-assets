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

export const UmanKudu = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/uman.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Uman Kudu',
    strength: '1',
  },
});

export const CaptainIakinNefud = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/nafud.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Cptn. Iakin Nefud',
    strength: '2',
  },
});

export const PiterDeVries = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/piter.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Piter de Vries',
    strength: '3',
  },
});

export const BeastRabban = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/beast.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Beast Rabban',
    strength: '4',
  },
});

export const FeydRautha = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/feyd.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Feyd Rautha',
    strength: '6',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/baron.jpg',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Baron Vladimir Harkonnen',
    strength: '',
  },
});
