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

export const DrYueh = meta.story({
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/dryeuh.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Dr. Yueh',
    strength: '1',
  },
});

export const DuncanIdaho = meta.story({
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/duncan.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Duncan Idaho',
    strength: '2',
  },
});

export const GurneyHalleck = meta.story({
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/gurney.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Gurney Halleck',
    strength: '4',
  },
});

export const LadyJessica = meta.story({
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/jessica.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Lady Jessica',
    strength: '5',
  },
});

export const ThufirHawat = meta.story({
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/thufir.png',
    logo: 'vector/logo/atreides.svg',
    name: 'Thufir Hawat',
    strength: '5',
  },
});

export const KwisatzHaderach = meta.story({
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/paul.jpg',
    logo: 'vector/logo/atreides.svg',
    name: 'Kwisatz Haderach',
    strength: '+2',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/paul.jpg',
    logo: 'vector/logo/atreides.svg',
    name: `Paul Muad'Dib`,
    strength: '',
  },
});
