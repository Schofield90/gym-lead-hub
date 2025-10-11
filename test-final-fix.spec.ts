import { test } from '@playwright/test';

test('verify mobile form fix is working', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
  });

  const page = await context.newPage();

  // Navigate and wait for page load
  await page.goto('https://randbfitness.gymleadhub.co.uk/men', {
    waitUntil: 'networkidle',
  });

  // Wait for LeadDec script to load and iframe to stabilize
  await page.waitForTimeout(3000);

  const iframe = page.locator('#inline-MUQgZECmSWI8l5WJSN7M');
  const wrapper = page.locator('.gym-landing_iframeWrapper__QXXEe').first();

  // Check if inline styles were removed
  const inlineStyle = await iframe.evaluate((el) => el.getAttribute('style'));
  console.log('Inline style attribute:', inlineStyle);

  // Get computed styles
  const computed = await iframe.evaluate((el) => {
    const styles = window.getComputedStyle(el);
    return {
      height: styles.height,
      marginTop: styles.marginTop,
      width: styles.width,
    };
  });

  console.log('Computed styles:', computed);

  // Get bounding box
  const iframeBox = await iframe.boundingBox();
  const wrapperBox = await wrapper.boundingBox();

  console.log('Wrapper box:', wrapperBox);
  console.log('Iframe box:', iframeBox);

  // Take screenshots
  await wrapper.screenshot({ path: 'mobile-form-final-fix.png' });
  await page.screenshot({ path: 'mobile-page-final-fix.png', fullPage: false });

  // Success criteria:
  // 1. Inline styles should be empty or not contain height
  // 2. Computed height should be 4700px
  // 3. Computed margin-top should be -1750px
  // 4. Iframe should be positioned within wrapper (y position relative to wrapper)

  const success =
    computed.height === '4700px' &&
    computed.marginTop === '-1750px' &&
    iframeBox &&
    wrapperBox &&
    iframeBox.y < wrapperBox.y + wrapperBox.height;

  console.log('\n✅ SUCCESS CRITERIA:');
  console.log('Height is 4700px:', computed.height === '4700px');
  console.log('Margin-top is -1750px:', computed.marginTop === '-1750px');
  console.log('Iframe within wrapper:', iframeBox && wrapperBox && iframeBox.y < wrapperBox.y + wrapperBox.height);
  console.log('\nOverall success:', success);

  await context.close();
});
