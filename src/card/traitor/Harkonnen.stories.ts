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

export const UmanKudu = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/uman.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Uman Kudu',
    strength: '1',
    owner: 'Harkonnen',
  },
});

export const CaptainIakinNefud = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/nafud.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Cptn. Iakin Nefud',
    strength: '2',
    owner: 'Harkonnen',
  },
});

export const PiterDeVries = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/piter.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Piter de Vries',
    strength: '3',
    owner: 'Harkonnen',
  },
});

export const BeastRabban = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/beast.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Beast Rabban',
    strength: '4',
    owner: 'Harkonnen',
  },
});

export const FeydRautha = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/feyd.png',
    logo: 'vector/logo/harkonnen.svg',
    name: 'Feyd Rautha',
    strength: '6',
    owner: 'Harkonnen',
  },
});
