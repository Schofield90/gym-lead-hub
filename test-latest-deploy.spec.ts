import { test } from '@playwright/test';

test('test latest Vercel deployment mobile form', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });

  // Go to latest deployment
  await page.goto('https://gym-lead-n83d2qa7z-schofield90s-projects.vercel.app/men');

  // Wait for page to load
  await page.waitForTimeout(3000);

  // Find the iframe wrapper
  const wrapper = page.locator('.gym-landing_iframeWrapper__QXXEe').first();
  const iframe = page.locator('#inline-MUQgZECmSWI8l5WJSN7M');

  console.log('=== WRAPPER INFO ===');
  const wrapperBox = await wrapper.boundingBox();
  console.log('Wrapper dimensions:', wrapperBox);

  const wrapperStyles = await wrapper.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      height: computed.height,
      maxHeight: computed.maxHeight,
      overflow: computed.overflow,
    };
  });
  console.log('Wrapper styles:', wrapperStyles);

  console.log('\n=== IFRAME INFO ===');
  const iframeBox = await iframe.boundingBox();
  console.log('Iframe dimensions:', iframeBox);

  const iframeStyles = await iframe.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      width: computed.width,
      height: computed.height,
      marginTop: computed.marginTop,
      marginBottom: computed.marginBottom,
    };
  });
  console.log('Iframe styles:', iframeStyles);

  // Take screenshot
  await wrapper.screenshot({ path: 'latest-deploy-form.png' });
  console.log('\nScreenshot saved: latest-deploy-form.png');
});
