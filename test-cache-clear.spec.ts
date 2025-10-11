import { test, expect } from '@playwright/test';

test('mobile form with cache clear and hard reload', async ({ browser }) => {
  // Create a fresh browser context with no cache
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
    ignoreHTTPSErrors: true,
  });

  const page = await context.newPage();

  // Clear any existing cache
  await context.clearCookies();

  // Navigate with networkidle to ensure all resources loaded
  await page.goto('https://randbfitness.gymleadhub.co.uk/men', {
    waitUntil: 'networkidle',
  });

  // Force hard reload to bypass cache
  await page.reload({ waitUntil: 'networkidle' });

  // Wait for form to stabilize
  await page.waitForTimeout(3000);

  // Check if new CSS is loaded by inspecting computed styles
  const wrapper = page.locator('.gym-landing_iframeWrapper__QXXEe').first();
  const iframe = page.locator('#inline-MUQgZECmSWI8l5WJSN7M');

  // Get computed styles
  const wrapperHeight = await wrapper.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      height: computed.height,
      maxHeight: computed.maxHeight,
      overflow: computed.overflow,
      position: computed.position,
    };
  });

  const iframeStyles = await iframe.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      height: computed.height,
      marginTop: computed.marginTop,
      width: computed.width,
    };
  });

  console.log('Wrapper computed styles:', wrapperHeight);
  console.log('Iframe computed styles:', iframeStyles);

  // Get bounding box positions
  const wrapperBox = await wrapper.boundingBox();
  const iframeBox = await iframe.boundingBox();

  console.log('Wrapper box:', wrapperBox);
  console.log('Iframe box:', iframeBox);

  // Take screenshot
  await page.screenshot({ path: 'mobile-form-cache-clear.png', fullPage: true });
  await wrapper.screenshot({ path: 'wrapper-only.png' });

  // Check what CSS files are loaded
  const stylesheets = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    return links.map(link => link.getAttribute('href'));
  });

  console.log('Loaded CSS files:', stylesheets);

  await context.close();
});
