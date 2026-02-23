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

export const Korba = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/korba.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Korba',
    strength: '1',
  },
});

export const Smuggler = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '3',
  },
});

export const RatRunner = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/ratrunner.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Rat Runner',
    strength: '3',
  },
});

export const Sabiha = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/sabiha.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Sabiha',
    strength: '4',
  },
});

export const Javid = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/javid.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Javid',
    strength: '5',
  },
});

export const KorbaAlt = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/korba.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Korba',
    strength: '0',
  },
});

export const Majorca = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '3',
  },
});

export const MajorcaAlt = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '1',
  },
});

export const Minorca = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '4',
  },
});

export const MinorcaAlt = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/smuggler.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Smuggler',
    strength: '2',
  },
});

export const SabihaStrong = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/sabiha.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Sabiha',
    strength: '6',
  },
});

export const SabihaAlt = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/sabiha.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Sabiha',
    strength: '3',
  },
});

export const JavidStrong = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/javid.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Javid',
    strength: '6',
  },
});

export const JavidAlt = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/javid.png',
    logo: 'vector/logo/iduali.svg',
    name: 'Javid',
    strength: '4',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'image/leader/ilya/namri.jpg',
    logo: 'vector/logo/iduali.svg',
    name: 'Namri',
    strength: '',
  },
});
