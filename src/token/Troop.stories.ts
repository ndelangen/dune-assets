import type { Meta, StoryObj } from '@storybook/react';
import { TroopToken } from './Troop';

const meta = {
  component: TroopToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof TroopToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Atreides: Story = {
  args: {
    background: `url('/generated/utils/background/atreides.jpg') top left / cover no-repeat`,
    image: 'vector/troop/atreides.svg',
  },
};

export const Suboid: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ixian.svg',
  },
};
export const Cyborg: Story = {
  args: {
    background: `url('/generated/utils/background/ixian.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ixian.svg',
    star: 'vector/troop_modifier/star-left.svg',
  },
};

export const BeneGesserit: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'vector/troop/bene-gesserit.svg',
  },
};

export const Advisor: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'vector/troop/bene-gesserit.svg',
    striped: true,
  },
};

export const BeneTleilaxu: Story = {
  args: {
    background: `url('/generated/utils/background/bene-tleilaxu.jpg') top left / cover no-repeat`,
    image: 'vector/troop/bene-tleilaxu.svg',
  },
};

export const Emperor: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'vector/troop/emperor.svg',
  },
};

export const Sardaukar: Story = {
  args: {
    background: `url('/generated/utils/background/emperor.jpg') top left / cover no-repeat`,
    image: 'vector/troop/emperor.svg',
    star: 'vector/troop_modifier/star-right.svg',
  },
};

export const Fremen: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'vector/troop/fremen.svg',
  },
};

export const Fedaykin: Story = {
  args: {
    background: `url('/generated/utils/background/fremen.jpg') top left / cover no-repeat`,
    image: 'vector/troop/fremen.svg',
    star: 'vector/troop_modifier/star-right.svg',
  },
};

export const Guild: Story = {
  args: {
    background: `url('/generated/utils/background/guild.jpg') top left / cover no-repeat`,
    image: 'vector/troop/guild.svg',
  },
};

export const Iduali: Story = {
  args: {
    background: `url('/generated/utils/background/iduali.jpg') top left / cover no-repeat`,
    image: 'vector/troop/iduali.svg',
  },
};

export const Harkonnen: Story = {
  args: {
    background: `url('/generated/utils/background/harkonnen.jpg') top left / cover no-repeat`,
    image: 'vector/troop/harkonnen.svg',
  },
};

export const Moritani: Story = {
  args: {
    background: `url('/generated/utils/background/moritani.jpg') top left / cover no-repeat`,
    image: 'vector/troop/moritani.svg',
  },
};

export const Ginaz: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ginaz.svg',
  },
};

export const HoneredGaurd: Story = {
  args: {
    background: `url('/generated/utils/background/ginaz.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ginaz.svg',
    star: 'vector/troop_modifier/star-right.svg',
  },
};

export const Landsraad: Story = {
  args: {
    background: `url('/generated/utils/background/landsraad.jpg') top left / cover no-repeat`,
    image: 'vector/troop/landsraad.svg',
  },
};

export const Richese: Story = {
  args: {
    background: `url('/generated/utils/background/richese.jpg') top left / cover no-repeat`,
    image: 'vector/troop/richese.svg',
  },
};

export const Ecaz: Story = {
  args: {
    background: `url('/generated/utils/background/ecaz.jpg') top left / cover no-repeat`,
    image: 'vector/troop/ecaz.svg',
  },
};

export const CHOAM: Story = {
  args: {
    background: `url('/generated/utils/background/choam.jpg') top left / cover no-repeat`,
    image: 'vector/troop/choam.svg',
  },
};
