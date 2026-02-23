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

export const TalisBalt = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Talis Balt',
    strength: '2',
    owner: 'Richese',
  },
});

export const HaloaRund = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Haloa Rund',
    strength: '2',
    owner: 'Richese',
  },
});

export const FlintoKinnis = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Flinto Kinnis',
    strength: '3',
    owner: 'Richese',
  },
});

export const LadyHelena = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/helena.png',
    logo: 'vector/logo/richese.svg',
    name: 'Lady Helena',
    strength: '4',
    owner: 'Richese',
  },
});

export const EinCalimar = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Ein Calimar',
    strength: '5',
    owner: 'Richese',
  },
});
