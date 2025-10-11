import { test } from '@playwright/test';

test('inspect LeadDec form directly on mobile', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });

  // Go directly to the LeadDec form
  await page.goto('https://link.leaddec.com/widget/form/MUQgZECmSWI8l5WJSN7M');

  // Wait for form to load
  await page.waitForTimeout(3000);

  // Take full page screenshot
  await page.screenshot({ path: 'leaddec-form-direct.png', fullPage: true });

  console.log('Screenshot saved: leaddec-form-direct.png');

  // Check the body height
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Body scroll height:', bodyHeight);

  // Check for any elements with large padding/margin
  const paddingInfo = await page.evaluate(() => {
    const body = document.body;
    const computed = window.getComputedStyle(body);
    return {
      bodyPadding: computed.padding,
      bodyMargin: computed.margin,
      bodyHeight: computed.height,
    };
  });
  console.log('Body styles:', paddingInfo);
});
