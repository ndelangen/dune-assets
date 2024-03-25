import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

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

const enums = {
  generic,
  logo,
  decal,
  icon,
  leaders,
  troop,
  troop_modifier,
};

Bun.write(
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
  ${Object.keys(enums)
    .map((e) => e.toUpperCase())
    .join(',\n  ')}
]);
`,
);
