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

export const Korba = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/korba.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Korba',
    strength: '1',
    owner: 'Iduali',
  },
});

export const Smuggler = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '3',
    owner: 'Iduali',
  },
});

export const RatRunner = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/ratrunner.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Rat Runner',
    strength: '3',
    owner: 'Iduali',
  },
});

export const Sabiha = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/sabiha.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Sabiha',
    strength: '4',
    owner: 'Iduali',
  },
});

export const Javid = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/javid.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Javid',
    strength: '5',
    owner: 'Iduali',
  },
});
