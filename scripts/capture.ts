import { serve } from 'bun';
import cliProgress from 'cli-progress';
import { chromium } from 'playwright';

const BASE_PATH = './storybook-static';

const server = await serve({
  port: 3000,
  async fetch(req) {
    const filePath = BASE_PATH + new URL(req.url).pathname;
    const file = Bun.file(filePath);
    return new Response(file);
  },
  error() {
    return new Response(null, { status: 404 });
  },
});

const index = await fetch(`${server.url}/index.json`).then((res) => res.json());
const entries = Object.keys(index.entries);

const browser = await chromium.launch({ headless: !process.env.DEBUG });
const context = await browser.newContext({
  deviceScaleFactor: 2,
  locale: 'en-US',
  timezoneId: 'UTC',
});
const page = await context.newPage();

const bar1 = new cliProgress.SingleBar(
  {
    clearOnComplete: true,
    format: 'Generating {bar} | {entry} | {value}/{total}',
  },
  cliProgress.Presets.shades_classic,
);
let count = 0;

const mapToPath = (entry: string) => {
  return (
    index.entries[entry].importPath
      .replace('./src/', '')
      .replace(/\.stories\..*$/, '')
      .toLowerCase() +
    '/' +
    entry.replace(/^.*--/, '')
  );
};

bar1.start(entries.length, count);

for (const entry of entries.filter((entry) => entry.startsWith('util'))) {
  const path = `generated/${mapToPath(entry)}.jpg`;
  count++;
  bar1.update(count, { entry });

  if (process.env.LOCAL) {
    const exists = await Bun.file(path).exists();
    if (exists) {
      continue;
    }
  }

  await page.goto(`${server.url}iframe.html?id=${entry}&viewMode=story`);
  await page.waitForSelector('#storybook-root');
  await page.waitForLoadState('networkidle');
  await page.locator('#storybook-root').screenshot({ type: 'jpeg', path, scale: 'device' });

  const file = Bun.file(path);
  await Bun.write('storybook-static/' + path, file);
}

for (const entry of entries.filter((entry) => entry.startsWith('token'))) {
  const path = `generated/${mapToPath(entry)}.jpg`;
  count++;
  bar1.update(count, { entry });

  if (process.env.LOCAL) {
    const exists = await Bun.file(path).exists();
    if (exists) {
      continue;
    }
  }

  await page.goto(`${server.url}iframe.html?id=${entry}&viewMode=story`);
  await page.waitForSelector('#storybook-root');
  await page.waitForLoadState('networkidle');
  await page.locator('#storybook-root').screenshot({ type: 'jpeg', path, scale: 'device' });

  const file = Bun.file(path);
  await Bun.write('storybook-static/' + path, file);
}

for (const entry of entries.filter((entry) => entry.startsWith('card'))) {
  const path = `generated/${mapToPath(entry)}.jpg`;
  count++;
  bar1.update(count, { entry });

  if (process.env.LOCAL) {
    const exists = await Bun.file(path).exists();
    if (exists) {
      continue;
    }
  }

  await page.goto(`${server.url}iframe.html?id=${entry}&viewMode=story`);
  await page.waitForSelector('#storybook-root');
  await page.waitForLoadState('networkidle');
  await page.locator('#storybook-root').screenshot({ type: 'jpeg', path, scale: 'device' });

  const file = Bun.file(path);
  await Bun.write('storybook-static/' + path, file);
}

for (const entry of entries.filter((entry) => entry.startsWith('sheet'))) {
  const path = `generated/${mapToPath(entry)}.pdf`;
  count++;
  bar1.update(count, { entry });

  if (process.env.LOCAL) {
    const exists = await Bun.file(path).exists();
    if (exists) {
      continue;
    }
  }

  await page.goto(`${server.url}iframe.html?id=${entry}&viewMode=story`);
  await page.waitForSelector('#storybook-root');
  await page.waitForLoadState('networkidle');
  await page.pdf({
    path,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    printBackground: true,
  });
}

for (const entry of entries.filter((entry) => entry.startsWith('book'))) {
  const path = `generated/${mapToPath(entry)}.pdf`;
  count++;
  bar1.update(count, { entry });

  if (process.env.LOCAL) {
    const exists = await Bun.file(path).exists();
    if (exists) {
      continue;
    }
  }

  await page.goto(`${server.url}iframe.html?id=${entry}&viewMode=story`);
  await page.waitForSelector('#storybook-root');
  await page.waitForLoadState('networkidle');
  await page.pdf({
    path,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    printBackground: true,
  });
}

bar1.stop();

await browser.close();
await server.stop();
