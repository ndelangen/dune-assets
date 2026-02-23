import preview from '../../.storybook/preview';
import { TroopToken } from './Troop';

const meta = preview.meta({
  component: TroopToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
});

export const Atreides = meta.story({
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'vector/troop/atreides.svg',
  },
});

export const Suboid = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ixian.svg',
  },
});
export const Cyborg = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ixian.svg',
    star: 'vector/troop_modifier/star-left.svg',
  },
});

export const UpgradedCyborg = meta.story({
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ixian.svg',
    star: 'vector/troop_modifier/star-left-red.svg',
  },
});

export const BeneGesserit = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'vector/troop/bene-gesserit.svg',
  },
});

export const Advisor = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'vector/troop/bene-gesserit.svg',
    striped: true,
  },
});

export const BeneTleilaxu = meta.story({
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'vector/troop/bene-tleilaxu.svg',
  },
});

export const Emperor = meta.story({
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'vector/troop/emperor.svg',
  },
});

export const Sardaukar = meta.story({
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'vector/troop/emperor.svg',
    star: 'vector/troop_modifier/star-right.svg',
  },
});

export const Fremen = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'vector/troop/fremen.svg',
  },
});

export const Fedaykin = meta.story({
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'vector/troop/fremen.svg',
    star: 'vector/troop_modifier/star-right.svg',
  },
});

export const Guild = meta.story({
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'vector/troop/guild.svg',
  },
});

export const Iduali = meta.story({
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'vector/troop/iduali.svg',
  },
});

export const Harkonnen = meta.story({
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'vector/troop/harkonnen.svg',
  },
});

export const Moritani = meta.story({
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'vector/troop/moritani.svg',
  },
});

export const Ginaz = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ginaz.svg',
  },
});

export const HoneredGaurd = meta.story({
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ginaz.svg',
    star: 'vector/troop_modifier/star-right.svg',
  },
});

export const Landsraad = meta.story({
  args: {
    background: `url('/generated/utils/background/landsraad.jpg') top left / cover no-repeat`,
    image: 'vector/troop/landsraad.svg',
  },
});

export const Richese = meta.story({
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'vector/troop/richese.svg',
  },
});

export const Ecaz = meta.story({
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ecaz.svg',
  },
});

export const CHOAM = meta.story({
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'vector/troop/choam.svg',
  },
});
