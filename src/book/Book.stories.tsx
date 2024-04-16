import { Meta, StoryObj } from '@storybook/react';
import { Book } from './Book';

import * as rulebook from './rulesbook';

const meta = {
  component: Book,
  args: {},
} satisfies Meta<typeof Book>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty = {
  args: {
    pages: [],
  },
} satisfies Story;

export const Rulebook = {
  args: {
    pages: [rulebook.pages[0]],
  },
} satisfies Story;
