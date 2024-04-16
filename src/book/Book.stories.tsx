import { Meta, StoryObj } from '@storybook/react';
import { Book } from './Book';

import * as rulebook from './Rulebook';

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
    cover: rulebook.cover,
    pages: rulebook.pages.slice(0, 15),
    ratio: rulebook.ratio,
  },
} satisfies Story;
