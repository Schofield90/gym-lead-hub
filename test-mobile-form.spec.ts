import { test, expect } from '@playwright/test';

test('mobile form white space debug', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });

  // Navigate to men's page
  await page.goto('https://randbfitness.gymleadhub.co.uk/men');

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
      position: computed.position,
    };
  });
  console.log('Wrapper computed styles:', wrapperStyles);

  console.log('\n=== IFRAME INFO ===');
  const iframeBox = await iframe.boundingBox();
  console.log('Iframe dimensions:', iframeBox);

  const iframeStyles = await iframe.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      width: computed.width,
      height: computed.height,
      transform: computed.transform,
      transformOrigin: computed.transformOrigin,
    };
  });
  console.log('Iframe computed styles:', iframeStyles);

  // Take screenshot of the form area
  await wrapper.screenshot({ path: 'mobile-form-transform-test.png' });
  console.log('\nScreenshot saved: mobile-form-transform-test.png');

  // Try to inspect iframe content (may fail due to cross-origin)
  try {
    const iframeElement = await iframe.elementHandle();
    const frame = await iframeElement?.contentFrame();

    if (frame) {
      console.log('\n=== IFRAME CONTENT ===');
      const body = frame.locator('body');
      const bodyStyles = await body.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          padding: computed.padding,
          margin: computed.margin,
          height: computed.height,
        };
      });
      console.log('Iframe body styles:', bodyStyles);
    }
  } catch (error) {
    console.log('\nCannot access iframe content (cross-origin)');
  }
});
