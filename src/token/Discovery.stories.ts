import type { Meta, StoryObj } from '@storybook/react';
import { CustomToken } from './Custom';

const meta = {
  component: CustomToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof CustomToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Jacurutu: Story = {
  args: {
    background: `url('/generated/utils/background/hiereg.jpg') top left / cover no-repeat`,
    image: 'vector/icon/seitch.svg',
    circle: false,
    size: { width: 150, height: 150 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 4.5,
  },
};

export const Cistern: Story = {
  args: {
    background: `url('/generated/utils/background/hiereg.jpg') top left / cover no-repeat`,
    image: 'vector/decal/cistern.svg',
    circle: false,
    size: { width: 150, height: 150 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 3,
  },
};

export const EcologicalTestingStation: Story = {
  args: {
    background: `url('/generated/utils/background/hiereg.jpg') top left / cover no-repeat`,
    image: 'vector/decal/ecological-testing-station.svg',
    circle: false,
    size: { width: 180, height: 180 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 2,
  },
};

export const Shrine: Story = {
  args: {
    background: `url('/generated/utils/background/hiereg.jpg') top left / cover no-repeat`,
    image: 'vector/decal/shrine.svg',
    circle: false,
    size: { width: 180, height: 180 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 2,
  },
};

export const Ornithopter: Story = {
  args: {
    background: `url('/generated/utils/background/discovery.jpg') top left / cover no-repeat`,
    image: 'vector/decal/ornithopter.svg',
    circle: false,
    size: { width: 210, height: 210 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 2,
  },
};

export const OrgizProcessingPlant: Story = {
  args: {
    background: `url('/generated/utils/background/discovery.jpg') top left / cover no-repeat`,
    image: 'vector/decal/orgiz-processing-station.svg',
    circle: false,
    size: { width: 160, height: 160 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 2,
  },
};

export const TreacheryCash: Story = {
  args: {
    background: `url('/generated/utils/background/discovery.jpg') top left / cover no-repeat`,
    image: 'vector/icon/treachery.svg',
    circle: false,
    size: { width: 160, height: 160 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 3,
  },
};

export const SpiceCash: Story = {
  args: {
    background: `url('/generated/utils/background/discovery.jpg') top left / cover no-repeat`,
    image: 'vector/icon/spice.svg',
    circle: false,
    size: { width: 160, height: 160 },
    fill: '#000',
    stroke: '#fff',
    strokeWidth: 3,
  },
};
