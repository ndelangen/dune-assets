import { serve } from 'bun';
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
const page = await browser.newPage();

for (const entry of entries) {
  const path = `generated/${entry}.png`;

  await page.goto(`${server.url}iframe.html?id=${entry}&viewMode=story`);
  await page.waitForSelector('#storybook-root');
  await page.locator('#storybook-root').screenshot({ type: 'png', path, scale: 'css' });
}

await browser.close();
await server.stop();
