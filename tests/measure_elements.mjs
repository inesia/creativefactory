import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 2288 });
  await page.goto('http://localhost:3010', { waitUntil: 'networkidle' });

  const anchors = [
    { name: 'Header', sel: 'header' },
    { name: 'Hero', sel: '#hero-heading' },
    { name: 'NetworkIntro', sel: 'section[aria-label="Network Overview"]' },
    { name: 'HowItWorks', sel: '#how-it-works' },
    { name: 'Pathways', sel: '#pathways' },
    { name: 'Ecosystem', sel: '#ecosystem' },
    { name: 'Contact', sel: '#contact' },
    { name: 'Footer', sel: 'footer' },
  ];

  console.log('--- RENDERED Y OFFSETS vs PDF TARGETS ---');
  for (const a of anchors) {
    const el = page.locator(a.sel);
    const box = await el.boundingBox();
    console.log(`${a.name.padEnd(15)}: y = ${Math.round(box ? box.y : -1)}, h = ${Math.round(box ? box.height : -1)}`);
  }

  await browser.close();
}

run();
