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

export const Representative = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/guildrep.png',
    logo: 'vector/logo/guild.svg',
    name: 'Representative',
    strength: '1',
    owner: 'Spacing Guild',
  },
});

export const SooSooSook = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/soo-soo-sook.png',
    logo: 'vector/logo/guild.svg',
    name: 'Soo Soo Sook',
    strength: '2',
    owner: 'Spacing Guild',
  },
});

export const EsmarTuek = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/esmar.png',
    logo: 'vector/logo/guild.svg',
    name: 'Esmar',
    strength: '3',
    owner: 'Spacing Guild',
  },
});

export const MasterBewt = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/bewt.png',
    logo: 'vector/logo/guild.svg',
    name: 'Master Bewt',
    strength: '3',
    owner: 'Spacing Guild',
  },
});

export const StabanTuek = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'image/leader/official/staban.png',
    logo: 'vector/logo/guild.svg',
    name: 'Staban Tuek',
    strength: '5',
    owner: 'Spacing Guild',
  },
});
