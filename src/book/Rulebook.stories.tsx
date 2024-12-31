import { Meta, StoryObj } from '@storybook/react';
import { Book } from './Book';

import * as rulebook from './DreamrulesPages.stories';

const meta = {
  component: Book,
  args: {},
} satisfies Meta<typeof Book>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dreamrules = {
  args: {
    cover: rulebook.default.parameters.cover,
    pages: ((rulebook as any).__namedExportsOrder as Exclude<keyof typeof rulebook, 'default'>[])
      .filter((key) => key.match('default') && !key.startsWith('_'))
      .map((key) => rulebook[key].args.children),

    ratio: rulebook.default.args.ratio,
  },
} satisfies Story;
