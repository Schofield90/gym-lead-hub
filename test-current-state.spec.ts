import { test } from '@playwright/test';

test('check current form state and measure positioning', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
  });

  const page = await context.newPage();

  await page.goto('https://randbfitness.gymleadhub.co.uk/men', {
    waitUntil: 'networkidle',
  });

  await page.waitForTimeout(3000);

  // Scroll to form
  await page.evaluate(() => {
    const form = document.getElementById('inline-MUQgZECmSWI8l5WJSN7M');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  await page.waitForTimeout(1000);

  const wrapper = page.locator('.gym-landing_iframeWrapper__QXXEe').first();
  const iframe = page.locator('#inline-MUQgZECmSWI8l5WJSN7M');

  // Get current positions
  const wrapperBox = await wrapper.boundingBox();
  const iframeBox = await iframe.boundingBox();

  console.log('Wrapper:', wrapperBox);
  console.log('Iframe:', iframeBox);

  // Take screenshot of wrapper
  await wrapper.screenshot({ path: 'current-form-wrapper.png' });

  // Try to scroll inside the iframe to see what's there
  await iframe.evaluate((el: any) => {
    const doc = el.contentDocument || el.contentWindow?.document;
    if (doc) {
      console.log('Iframe body height:', doc.body.scrollHeight);
    }
  });

  await context.close();
});
