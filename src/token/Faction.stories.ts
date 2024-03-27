import type { Meta, StoryObj } from '@storybook/react';
import { FactionToken } from './Faction';

const meta = {
  component: FactionToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof FactionToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Atreides: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'vector/logo/atreides.svg',
  },
};

export const Harkonnen: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'vector/logo/harkonnen.svg',
  },
};

export const Emperor: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'vector/logo/emperor.svg',
  },
};

export const Fremen: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'vector/logo/fremen.svg',
  },
};

export const BeneGesserit: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'vector/logo/bg.svg',
  },
};

export const BeneTleilax: Story = {
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'vector/logo/bt.svg',
  },
};

export const Ixian: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'vector/logo/ix.svg',
  },
};

export const Guild: Story = {
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'vector/logo/guild.svg',
  },
};

export const Iduali: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'vector/logo/iduali.svg',
  },
};

export const Ginaz: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'vector/logo/ginaz.svg',
  },
};

export const Landsraad: Story = {
  args: {
    background: `url('/generated/utils/background/landsraad.jpg') top left / cover no-repeat`,
    image: 'vector/generic/landsraad.svg',
  },
};

export const Richese: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'vector/logo/richese.svg',
  },
};

export const Ecaz: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'vector/logo/ecaz.svg',
  },
};

export const CHOAM: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'vector/logo/choam.svg',
  },
};
