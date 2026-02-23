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

export const Auditor = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/auditor.png',
    logo: 'vector/logo/choam.svg',
    name: 'Auditor',
    strength: '2',
  },
});

export const ViscountTull = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/viscount-tull.png',
    logo: 'vector/logo/choam.svg',
    name: 'Viscount Tull',
    strength: '2',
  },
});

export const DukeVerdun = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/duke-verdun.png',
    logo: 'vector/logo/choam.svg',
    name: 'Duke Verdun',
    strength: '3',
  },
});

export const RajivLondine = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/rajiv-londine.png',
    logo: 'vector/logo/choam.svg',
    name: 'Rajiv Londine',
    strength: '3',
  },
});

export const FrankosAru = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/frankos-aru.png',
    logo: 'vector/logo/choam.svg',
    name: 'Frankos Aru',
    strength: '4',
  },
});

export const LadyJalma = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/lady-yalma.png',
    logo: 'vector/logo/choam.svg',
    name: 'Lady Jalma',
    strength: '4',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/lady-yalma.png',
    logo: 'vector/logo/choam.svg',
    name: 'Ur-Director Malina Aru',
    strength: '',
  },
});
