import preview from '../../.storybook/preview';
import * as rulebook from './dreamrules/Pages.stories';
import { Book } from './utils/Book';

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
      // biome-ignore lint/performance/noDynamicNamespaceImportAccess: dunno
      .map((key) => rulebook[key]?.input.args.children),

    ratio: rulebook.default.input.args.ratio,
  },
});
