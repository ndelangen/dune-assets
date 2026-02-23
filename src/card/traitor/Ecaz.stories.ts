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

export const BindikkVarni = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Bindikk Varni',
    strength: '2',
    owner: 'Ecaz',
  },
});

export const RivvyDinari = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/rivvy.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Rivvy Dinari',
    strength: '3',
    owner: 'Ecaz',
  },
});

export const IlesaEcaz = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Ilesa Ecaz',
    strength: '3',
    owner: 'Ecaz',
  },
});

export const SantyaEcaz = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Santya Ecaz',
    strength: '4',
    owner: 'Ecaz',
  },
});

export const WhitmoreBludd = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/ecaz.svg',
    name: 'Whitmore Bludd',
    strength: '4',
    owner: 'Ecaz',
  },
});
