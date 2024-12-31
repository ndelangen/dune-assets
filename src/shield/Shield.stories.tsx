import type { Meta, StoryObj } from '@storybook/react';
import { ShieldAsset } from './Shield';

const meta = {
  component: ShieldAsset,
  globals: {
    viewport: {
      value: 'shield',
    },
  },
} satisfies Meta<typeof ShieldAsset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Atreides: Story = {
  args: {
    leader: '/generated/token/leader/atreides/hero.jpg',
    background: '/generated/utils/background/atreides.jpg',
    logo: '/generated/token/faction/atreides.jpg',
    name: 'Atreides',
  },
};

export const Harkonnen: Story = {
  args: {
    leader: '/generated/token/leader/harkonnen/hero.jpg',
    background: '/generated/utils/background/harkonnen.jpg',
    logo: '/generated/token/faction/harkonnen.jpg',
    name: 'Harkonnen',
  },
};

export const Emperor: Story = {
  args: {
    leader: '/generated/token/leader/emperor/hero.jpg',
    background: '/generated/utils/background/emperor.jpg',
    logo: '/generated/token/faction/emperor.jpg',
    name: 'Emperor',
  },
};

export const BeneGesserit: Story = {
  args: {
    leader: '/generated/token/leader/benegesserit/hero.jpg',
    background: '/generated/utils/background/bene-gesserit.jpg',
    logo: '/generated/token/faction/bene-gesserit.jpg',
    name: 'Bene Gesserit',
  },
};

export const BeneTleilaxu: Story = {
  args: {
    leader: '/generated/token/leader/benetleilaxu/hero.jpg',
    background: '/generated/utils/background/bene-tleilaxu.jpg',
    logo: '/generated/token/faction/bene-tleilaxu.jpg',
    name: 'Bene Tleilax',
  },
};

export const Choam: Story = {
  args: {
    leader: '/generated/token/leader/choam/hero.jpg',
    background: '/generated/utils/background/choam.jpg',
    logo: '/generated/token/faction/choam.jpg',
    name: 'CHOAM',
  },
};

export const Ecaz: Story = {
  args: {
    leader: '/generated/token/leader/ecaz/hero.jpg',
    background: '/generated/utils/background/ecaz.jpg',
    logo: '/generated/token/faction/ecaz.jpg',
    name: 'Ecaz',
  },
};

export const Fremen: Story = {
  args: {
    leader: '/generated/token/leader/fremen/hero.jpg',
    background: '/generated/utils/background/fremen.jpg',
    logo: '/generated/token/faction/fremen.jpg',
    name: 'Fremen',
  },
};

export const Ginaz: Story = {
  args: {
    leader: '/generated/token/leader/ginaz/hero.jpg',
    background: '/generated/utils/background/ginaz.jpg',
    logo: '/generated/token/faction/ginaz.jpg',
    name: 'Ginaz',
  },
};

export const Guild: Story = {
  args: {
    leader: '/generated/token/leader/guild/hero.jpg',
    background: '/generated/utils/background/guild.jpg',
    logo: '/generated/token/faction/guild.jpg',
    name: 'Spacing Guild',
  },
};

export const Iduali: Story = {
  args: {
    leader: '/generated/token/leader/iduali/hero.jpg',
    background: '/generated/utils/background/iduali.jpg',
    logo: '/generated/token/faction/iduali.jpg',
    name: 'Iduali',
  },
};

export const Ixian: Story = {
  args: {
    leader: '/generated/token/leader/ixian/hero.jpg',
    background: '/generated/utils/background/ixian.jpg',
    logo: '/generated/token/faction/ixian.jpg',
    name: 'Ixian',
  },
};

export const Moritani: Story = {
  args: {
    leader: '/generated/token/leader/moritani/hero.jpg',
    background: '/generated/utils/background/moritani.jpg',
    logo: '/generated/token/faction/moritani.jpg',
    name: 'Moritani',
  },
};

export const Richese: Story = {
  args: {
    leader: '/generated/token/leader/richese/hero.jpg',
    background: '/generated/utils/background/richese.jpg',
    logo: '/generated/token/faction/richese.jpg',
    name: 'Richese',
  },
};
