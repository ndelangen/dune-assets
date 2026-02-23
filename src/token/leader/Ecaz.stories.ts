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

export const BindikkVarni = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Bindikk Varni',
    strength: '2',
  },
});

export const RivvyDinari = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/rivvy.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Rivvy Dinari',
    strength: '3',
  },
});

export const IlesaEcaz = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Ilesa Ecaz',
    strength: '3',
  },
});

export const SantyaEcaz = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Santya Ecaz',
    strength: '4',
  },
});

export const WhitmoreBludd = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Whitmore Bludd',
    strength: '4',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Archduke Armand Ecaz',
    strength: '',
  },
});
