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

export const Jamis = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/jamis.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Jamis',
    strength: '2',
    owner: 'Fremen',
  },
});

export const ShadoutMapes = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/mapes.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Shadout Mapes',
    strength: '3',
    owner: 'Fremen',
  },
});

export const Otheym = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/otheym.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Otheym',
    strength: '5',
    owner: 'Fremen',
  },
});

export const Chani = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/chani.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Chani',
    strength: '6',
    owner: 'Fremen',
  },
});

export const Stilgar = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/stilgar.png',
    logo: 'vector/logo/fremen.svg',
    name: 'Stilgar',
    strength: '7',
    owner: 'Fremen',
  },
});
