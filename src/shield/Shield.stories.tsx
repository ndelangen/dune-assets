import preview from '../../.storybook/preview';
import { ShieldAsset } from './Shield';

const meta = preview.meta({
  component: ShieldAsset,
  globals: {
    viewport: {
      value: 'shield',
    },
  },
});

export const Atreides = meta.story({
  args: {
    leader: '/generated/token/leader/atreides/hero.jpg',
    background: '/generated/utils/background/atreides.jpg',
    logo: '/generated/token/faction/atreides.jpg',
    name: 'Atreides',
  },
});

export const Harkonnen = meta.story({
  args: {
    leader: '/generated/token/leader/harkonnen/hero.jpg',
    background: '/generated/utils/background/harkonnen.jpg',
    logo: '/generated/token/faction/harkonnen.jpg',
    name: 'Harkonnen',
  },
});

export const Emperor = meta.story({
  args: {
    leader: '/generated/token/leader/emperor/hero.jpg',
    background: '/generated/utils/background/emperor.jpg',
    logo: '/generated/token/faction/emperor.jpg',
    name: 'Emperor',
  },
});

export const BeneGesserit = meta.story({
  args: {
    leader: '/generated/token/leader/benegesserit/hero.jpg',
    background: '/generated/utils/background/bene-gesserit.jpg',
    logo: '/generated/token/faction/bene-gesserit.jpg',
    name: 'Bene Gesserit',
  },
});

export const BeneTleilaxu = meta.story({
  args: {
    leader: '/generated/token/leader/benetleilaxu/hero.jpg',
    background: '/generated/utils/background/bene-tleilaxu.jpg',
    logo: '/generated/token/faction/bene-tleilaxu.jpg',
    name: 'Bene Tleilax',
  },
});

export const Choam = meta.story({
  args: {
    leader: '/generated/token/leader/choam/hero.jpg',
    background: '/generated/utils/background/choam.jpg',
    logo: '/generated/token/faction/choam.jpg',
    name: 'CHOAM',
  },
});

export const Ecaz = meta.story({
  args: {
    leader: '/generated/token/leader/ecaz/hero.jpg',
    background: '/generated/utils/background/ecaz.jpg',
    logo: '/generated/token/faction/ecaz.jpg',
    name: 'Ecaz',
  },
});

export const Fremen = meta.story({
  args: {
    leader: '/generated/token/leader/fremen/hero.jpg',
    background: '/generated/utils/background/fremen.jpg',
    logo: '/generated/token/faction/fremen.jpg',
    name: 'Fremen',
  },
});

export const Ginaz = meta.story({
  args: {
    leader: '/generated/token/leader/ginaz/hero.jpg',
    background: '/generated/utils/background/ginaz.jpg',
    logo: '/generated/token/faction/ginaz.jpg',
    name: 'Ginaz',
  },
});

export const Guild = meta.story({
  args: {
    leader: '/generated/token/leader/guild/hero.jpg',
    background: '/generated/utils/background/guild.jpg',
    logo: '/generated/token/faction/guild.jpg',
    name: 'Spacing Guild',
  },
});

export const Iduali = meta.story({
  args: {
    leader: '/generated/token/leader/iduali/hero.jpg',
    background: '/generated/utils/background/iduali.jpg',
    logo: '/generated/token/faction/iduali.jpg',
    name: 'Iduali',
  },
});

export const Ixian = meta.story({
  args: {
    leader: '/generated/token/leader/ixian/hero.jpg',
    background: '/generated/utils/background/ixian.jpg',
    logo: '/generated/token/faction/ixian.jpg',
    name: 'Ixian',
  },
});

export const Moritani = meta.story({
  args: {
    leader: '/generated/token/leader/moritani/hero.jpg',
    background: '/generated/utils/background/moritani.jpg',
    logo: '/generated/token/faction/moritani.jpg',
    name: 'Moritani',
  },
});

export const Richese = meta.story({
  args: {
    leader: '/generated/token/leader/richese/hero.jpg',
    background: '/generated/utils/background/richese.jpg',
    logo: '/generated/token/faction/richese.jpg',
    name: 'Richese',
  },
});
