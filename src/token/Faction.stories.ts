import preview from '../../.storybook/preview';
import { FactionToken } from './Faction';

const meta = preview.meta({
  component: FactionToken,
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

export const Atreides = meta.story({
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'vector/logo/atreides.svg',
  },
});

export const Harkonnen = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'vector/logo/harkonnen.svg',
  },
});

export const Emperor = meta.story({
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'vector/logo/emperor.svg',
  },
});

export const Fremen = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'vector/logo/fremen.svg',
  },
});

export const BeneGesserit = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'vector/logo/bene-gesserit.svg',
  },
});

export const BeneTleilaxu = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'vector/logo/bene-tleilaxu.svg',
  },
});

export const Ixian = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'vector/logo/ixian.svg',
  },
});

export const Guild = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'vector/logo/guild.svg',
  },
});

export const Iduali = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'vector/logo/iduali.svg',
  },
});

export const Ginaz = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'vector/logo/ginaz.svg',
  },
});

export const Landsraad = meta.story({
  args: {
    background: `url('/generated/utils/background/landsraad.jpg') top left / cover no-repeat`,
    image: 'vector/generic/landsraad.svg',
  },
});

export const Richese = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'vector/logo/richese.svg',
  },
});

export const Ecaz = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'vector/logo/ecaz.svg',
  },
});

export const CHOAM = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'vector/logo/choam.svg',
  },
});

export const Moritani = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'vector/logo/moritani.svg',
  },
});
