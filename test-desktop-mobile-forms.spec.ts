import { test, expect } from '@playwright/test';

test.describe('Form Display Tests', () => {
  test('Desktop: Hero form displays properly (no mobile fix applied)', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }, // Desktop size
    });

    const page = await context.newPage();

    await page.goto('https://randbfitness.gymleadhub.co.uk/men', {
      waitUntil: 'networkidle',
    });

    await page.waitForTimeout(3000);

    const iframe = page.locator('#inline-MUQgZECmSWI8l5WJSN7M');
    const wrapper = page.locator('.gym-landing_iframeWrapper__QXXEe').first();

    // Check if mobile fix is NOT applied
    const hasMobileFix = await iframe.getAttribute('data-mobile-fix-applied');
    console.log('Desktop - Mobile fix applied:', hasMobileFix);

    // Get computed styles
    const iframeStyles = await iframe.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        height: computed.height,
        marginTop: computed.marginTop,
      };
    });

    console.log('Desktop iframe styles:', iframeStyles);

    // Get bounding box
    const iframeBox = await iframe.boundingBox();
    const wrapperBox = await wrapper.boundingBox();

    console.log('Desktop wrapper box:', wrapperBox);
    console.log('Desktop iframe box:', iframeBox);

    // Take screenshot
    await page.screenshot({ path: 'desktop-form-test.png', fullPage: false });
    await wrapper.screenshot({ path: 'desktop-wrapper-test.png' });

    // Assertions for desktop
    expect(hasMobileFix).toBeNull(); // Should NOT have mobile fix
    expect(iframeStyles.marginTop).not.toBe('-2050px'); // Should NOT have negative margin
    expect(iframeBox).not.toBeNull();
    expect(wrapperBox).not.toBeNull();

    console.log('\n✅ DESKTOP CHECKS:');
    console.log('No mobile fix applied:', hasMobileFix === null);
    console.log('No negative margin:', iframeStyles.marginTop !== '-2050px');
    console.log('Form visible:', iframeBox !== null);

    await context.close();
  });

  test('Mobile: Hero form has mobile fix applied', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 }, // Mobile size
    });

    const page = await context.newPage();

    await page.goto('https://randbfitness.gymleadhub.co.uk/men', {
      waitUntil: 'networkidle',
    });

    await page.waitForTimeout(3000);

    const iframe = page.locator('#inline-MUQgZECmSWI8l5WJSN7M');
    const wrapper = page.locator('.gym-landing_iframeWrapper__QXXEe').first();

    // Check if mobile fix IS applied
    const hasMobileFix = await iframe.getAttribute('data-mobile-fix-applied');
    console.log('Mobile - Mobile fix applied:', hasMobileFix);

    // Get computed styles
    const iframeStyles = await iframe.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        height: computed.height,
        marginTop: computed.marginTop,
      };
    });

    console.log('Mobile iframe styles:', iframeStyles);

    // Get bounding box
    const iframeBox = await iframe.boundingBox();
    const wrapperBox = await wrapper.boundingBox();

    console.log('Mobile wrapper box:', wrapperBox);
    console.log('Mobile iframe box:', iframeBox);

    // Take screenshot
    await page.screenshot({ path: 'mobile-form-test.png', fullPage: false });
    await wrapper.screenshot({ path: 'mobile-wrapper-test.png' });

    // Assertions for mobile
    expect(hasMobileFix).toBe('true'); // Should have mobile fix
    expect(iframeStyles.height).toBe('4700px'); // Should have full height
    expect(iframeStyles.marginTop).toBe('-2050px'); // Should have negative margin
    expect(wrapperBox?.height).toBe(620); // Wrapper should be 620px

    console.log('\n✅ MOBILE CHECKS:');
    console.log('Mobile fix applied:', hasMobileFix === 'true');
    console.log('Height is 4700px:', iframeStyles.height === '4700px');
    console.log('Margin-top is -2050px:', iframeStyles.marginTop === '-2050px');
    console.log('Wrapper height is 620px:', wrapperBox?.height === 620);

    await context.close();
  });

  test('Desktop: Modal form displays properly (no mobile fix)', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
    });

    const page = await context.newPage();

    await page.goto('https://randbfitness.gymleadhub.co.uk/men', {
      waitUntil: 'networkidle',
    });

    await page.waitForTimeout(2000);

    // Click CTA button to open modal
    const ctaButton = page.locator('button:has-text("SEND ME MORE INFO")').first();
    await ctaButton.click();

    await page.waitForTimeout(2000);

    // Check modal iframe
    const modalIframe = page.locator('#modal-MUQgZECmSWI8l5WJSN7M');
    const hasMobileFix = await modalIframe.getAttribute('data-mobile-fix-applied');

    console.log('Desktop Modal - Mobile fix applied:', hasMobileFix);

    const modalStyles = await modalIframe.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        height: computed.height,
        marginTop: computed.marginTop,
      };
    });

    console.log('Desktop modal styles:', modalStyles);

    await page.screenshot({ path: 'desktop-modal-test.png' });

    // Assertions
    expect(hasMobileFix).toBeNull(); // Should NOT have mobile fix on desktop
    console.log('Desktop modal - No mobile fix:', hasMobileFix === null);

    await context.close();
  });

  test('Mobile: Modal form has mobile fix applied', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
    });

    const page = await context.newPage();

    await page.goto('https://randbfitness.gymleadhub.co.uk/men', {
      waitUntil: 'networkidle',
    });

    await page.waitForTimeout(2000);

    // Click CTA button to open modal
    const ctaButton = page.locator('button:has-text("SEND ME MORE INFO")').first();
    await ctaButton.click();

    await page.waitForTimeout(2000);

    // Check modal iframe
    const modalIframe = page.locator('#modal-MUQgZECmSWI8l5WJSN7M');
    const hasMobileFix = await modalIframe.getAttribute('data-mobile-fix-applied');

    console.log('Mobile Modal - Mobile fix applied:', hasMobileFix);

    const modalStyles = await modalIframe.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        height: computed.height,
        marginTop: computed.marginTop,
      };
    });

    console.log('Mobile modal styles:', modalStyles);

    await page.screenshot({ path: 'mobile-modal-test.png' });

    // Assertions
    expect(hasMobileFix).toBe('true'); // Should have mobile fix
    expect(modalStyles.height).toBe('4700px');
    expect(modalStyles.marginTop).toBe('-2050px');

    console.log('Mobile modal - Has mobile fix:', hasMobileFix === 'true');
    console.log('Mobile modal - Height 4700px:', modalStyles.height === '4700px');
    console.log('Mobile modal - Margin -2050px:', modalStyles.marginTop === '-2050px');

    await context.close();
  });
});
