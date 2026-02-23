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

export const Jamis = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/jamis.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Jamis',
    strength: '2',
  },
});

export const ShadoutMapes = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/mapes.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Shadout Mapes',
    strength: '3',
  },
});

export const Otheym = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/otheym.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Otheym',
    strength: '5',
  },
});

export const Chani = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/chani.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Chani',
    strength: '6',
  },
});

export const Stilgar = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/stilgar.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Stilgar',
    strength: '7',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/liet.jpg',
    logo: 'vector/logo/fremen.svg',
    name: 'Liet Kynes',
    strength: '',
  },
});
