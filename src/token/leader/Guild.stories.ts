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

export const Representative = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/guildrep.png',
    logo: 'vector/logo/guild.svg',
    name: 'Representative',
    strength: '1',
  },
});

export const SooSooSook = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/soo-soo-sook.png',
    logo: 'vector/logo/guild.svg',
    name: 'Soo Soo Sook',
    strength: '2',
  },
});

export const EsmarTuek = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/esmar.png',
    logo: 'vector/logo/guild.svg',
    name: 'Esmar',
    strength: '3',
  },
});

export const MasterBewt = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/bewt.png',
    logo: 'vector/logo/guild.svg',
    name: 'Master Bewt',
    strength: '3',
  },
});

export const StabanTuek = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/staban.png',
    logo: 'vector/logo/guild.svg',
    name: 'Staban Tuek',
    strength: '5',
  },
});

export const Hero = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/edric.jpg',
    logo: 'vector/logo/guild.svg',
    name: 'Edric',
    strength: '',
  },
});
