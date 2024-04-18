import { Meta, StoryObj } from '@storybook/react';
import { Book } from './Book';

import * as rulebook from './RulebookPages.stories';

const meta = {
  component: Book,
  args: {},
} satisfies Meta<typeof Book>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rulebook = {
  args: {
    cover: rulebook.default.parameters.cover,
    pages: Object.entries(rulebook)
      .filter(([key]) => key !== 'default' && !key.startsWith('_'))
      .map(([_, value]: any) => value.args?.children),

    ratio: rulebook.default.args.ratio,
  },
} satisfies Story;
