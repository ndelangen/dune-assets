import { readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { recursiveReaddirFiles } from 'recursive-readdir-files';

async function getFiles(path: string) {
  const files = await readdir(join(import.meta.dirname, '..', 'public', path));
  return files.filter((f) => !f.startsWith('.')).map((file) => join(path, file));
}

// images
const leaders = await getFiles('image/leader');

// vectors
const generic = await getFiles('vector/generic');
const decal = await getFiles('vector/decal');
const icon = await getFiles('vector/icon');
const logo = await getFiles('vector/logo');
const troop = await getFiles('vector/troop');
const troop_modifier = await getFiles('vector/troop_modifier');

const generated = (await recursiveReaddirFiles(join(import.meta.dirname, '..', 'generated')))
  .map((f) => relative(join(import.meta.dirname, '..'), f.path))
  .filter((f) => f.match(/\.(png|jpg|pdf)$/));

const enums = {
  generic,
  logo,
  decal,
  icon,
  leaders,
  troop,
  troop_modifier,
  generated,
};

await Bun.write(
  join(import.meta.dirname, '..', 'src/data/generated.ts'),
  `
import { z } from 'zod';

${Object.entries(enums)
  .map(
    ([name, files]) => `
export const ${name.toUpperCase()} = z.enum([
  ${files
    .sort()
    .map((file) => `'${file}'`)
    .join(',\n  ')}
]);`,
  )
  .join('\n')}

export const ALL = z.union([
  ${['GENERIC', 'LOGO', 'DECAL', 'ICON', 'TROOP'].join(',\n  ')}
]);
`,
);

const files = await readdir(join(import.meta.dirname, '../src/faction'));
await Promise.all(
  files.map(async (file) => {
    const { default: faction } = await import(`../src/faction/${file}`);
    const content = JSON.stringify(faction, null, 2);
    const path = join(import.meta.dirname, '../generated/faction', file.replace(/\.ts$/, '.json'));
    await Bun.write(path, content);
  }),
);
