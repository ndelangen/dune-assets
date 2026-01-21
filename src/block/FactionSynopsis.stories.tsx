import { FactionSynopsis } from './FactionSynopsis';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: FactionSynopsis,
  args: {},
} satisfies Meta<typeof FactionSynopsis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    image: '/generated/token/faction/choam.jpg',
    text: 'Hello',
    flip: false,
  },
} satisfies Story;

export const Flipped = {
  args: {
    image: '/generated/token/faction/choam.jpg',
    text: 'Hello',
    flip: true,
  },
} satisfies Story;
