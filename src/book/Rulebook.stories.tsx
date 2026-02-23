import preview from '../../.storybook/preview';
import { Book } from './utils/Book';

import * as rulebook from './dreamrules/Pages.stories';

const meta = preview.meta({
  component: Book,
  args: {},
  globals: {
    viewport: {
      value: 'page',
    },
  },
});

const pagesIds =
  // biome-ignore lint/suspicious/noExplicitAny: storybook specific, has no types
  ((rulebook as any).__namedExportsOrder as Exclude<keyof typeof rulebook, 'default'>[]) ||
  Object.keys(rulebook);

export const Dreamrules = meta.story({
  args: {
    cover: rulebook.default.input?.parameters?.cover,
    pages: pagesIds
      .filter((key) => !key.match('default') && !key.startsWith('_'))
      .map((key) => rulebook[key].input.args.children),

    ratio: rulebook.default.input.args.ratio,
  },
});
