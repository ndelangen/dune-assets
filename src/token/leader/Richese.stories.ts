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

export const TalisBalt = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Talis Balt',
    strength: '2',
  },
});

export const HaloaRund = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Haloa Rund',
    strength: '2',
  },
});

export const FlintoKinnis = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Flinto Kinnis',
    strength: '3',
  },
});

export const LadyHelena = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/brainfood/helena.png',
    logo: 'vector/logo/richese.svg',
    name: 'Lady Helena',
    strength: '4',
  },
});

export const EinCalimar = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/tessia.png',
    logo: 'vector/logo/richese.svg',
    name: 'Ein Calimar',
    strength: '5',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/viscount-tull.png',
    logo: 'vector/logo/richese.svg',
    name: 'Count Ilban Richese',
    strength: '',
  },
});
