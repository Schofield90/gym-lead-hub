import { test } from '@playwright/test';

test('visual check: mobile form displays correctly', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
  });

  const page = await context.newPage();

  await page.goto('https://randbfitness.gymleadhub.co.uk/men', {
    waitUntil: 'networkidle',
  });

  // Wait for form to stabilize
  await page.waitForTimeout(3000);

  // Scroll to form
  await page.evaluate(() => {
    const form = document.getElementById('inline-MUQgZECmSWI8l5WJSN7M');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  await page.waitForTimeout(1000);

  // Take screenshot of just the form area
  const wrapper = page.locator('.gym-landing_iframeWrapper__QXXEe').first();
  await wrapper.screenshot({ path: 'form-section-only.png' });

  // Take full mobile screenshot
  await page.screenshot({ path: 'production-mobile-full.png', fullPage: true });

  console.log('✅ Screenshots saved:');
  console.log('- form-section-only.png (just the form wrapper)');
  console.log('- production-mobile-full.png (full mobile page)');

  await context.close();
});
