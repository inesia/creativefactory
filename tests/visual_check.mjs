import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('tests/screenshots');
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: 'reference_1080', width: 1080, height: 2288 },
  { name: 'desktop_1440', width: 1440, height: 900 },
  { name: 'tablet_1024', width: 1024, height: 768 },
  { name: 'tablet_768', width: 768, height: 1024 },
  { name: 'mobile_390', width: 390, height: 844 },
  { name: 'mobile_360', width: 360, height: 740 },
];

async function run() {
  console.log('Starting Playwright visual checks...');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  for (const vp of VIEWPORTS) {
    console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3010', { waitUntil: 'networkidle' });

    // Check horizontal overflow
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`  Horizontal overflow: ${overflow ? 'FAIL' : 'PASS (no overflow)'}`);

    // Take full page screenshot
    const shotPath = path.join(SCREENSHOT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: true });
    console.log(`  Saved screenshot: ${shotPath}`);
  }

  // Test mobile menu interaction on mobile_390
  console.log('\nTesting mobile navigation interaction...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3010', { waitUntil: 'networkidle' });

  const hamburger = page.locator('button[aria-label="Buka navigasi"]');
  const isHamburgerVisible = await hamburger.isVisible();
  console.log(`  Hamburger visible on mobile: ${isHamburgerVisible}`);

  if (isHamburgerVisible) {
    await hamburger.click();
    await page.waitForTimeout(200);

    const menu = page.locator('div[role="dialog"]');
    const isMenuOpen = await menu.isVisible();
    console.log(`  Mobile menu open on click: ${isMenuOpen}`);

    // Test Escape key closes menu
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    const isMenuClosed = !(await menu.isVisible());
    console.log(`  Mobile menu closed on Escape: ${isMenuClosed}`);
  }

  console.log('\n--- CONSOLE ERRORS SUMMARY ---');
  if (consoleErrors.length === 0) {
    console.log('Zero console errors detected!');
  } else {
    console.error('Console errors:', consoleErrors);
  }

  await browser.close();
  console.log('\nVisual check completed successfully!');
}

run().catch((err) => {
  console.error('Test run failed:', err);
  process.exit(1);
});
