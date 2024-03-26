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
bar1.start(entries.length, count);

for (const entry of entries) {
  const path = `generated/${entry.replace('--', '/').replace('objects-', '')}.png`;
  count++;

  bar1.update(count, { entry });

  await page.goto(`${server.url}iframe.html?id=${entry}&viewMode=story`);
  await page.waitForSelector('#storybook-root');
  await page.locator('#storybook-root').screenshot({ type: 'png', path, scale: 'device' });
}

bar1.stop();

await browser.close();
await server.stop();
