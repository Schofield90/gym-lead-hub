import { test } from '@playwright/test';

test('simple form check', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('https://randbfitness.gymleadhub.co.uk/men');
  await page.waitForTimeout(5000);

  // Take full page screenshot
  await page.screenshot({ path: 'production-mobile-full.png', fullPage: true });
  console.log('Full page screenshot saved');

  // Find iframe by ID
  const iframe = page.locator('#inline-MUQgZECmSWI8l5WJSN7M');
  const iframeExists = await iframe.count();
  console.log('Iframe exists:', iframeExists > 0);

  if (iframeExists > 0) {
    const iframeBox = await iframe.boundingBox();
    console.log('Iframe position and size:', iframeBox);

    // Take screenshot of just the form area
    const formSection = page.locator('.gym-landing_heroFormContainer__zHrAZ');
    await formSection.screenshot({ path: 'form-section-only.png' });
    console.log('Form section screenshot saved');
  }
});
