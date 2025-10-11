import { test } from '@playwright/test';

test('debug CSS cascade for iframe', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
  });

  const page = await context.newPage();
  await page.goto('https://randbfitness.gymleadhub.co.uk/men', {
    waitUntil: 'networkidle',
  });
  await page.waitForTimeout(3000);

  // Get ALL CSS rules that apply to the iframe
  const iframe = page.locator('#inline-MUQgZECmSWI8l5WJSN7M');

  const cssAnalysis = await iframe.evaluate((el) => {
    const computed = window.getComputedStyle(el);

    // Get all applied CSS rules
    const allRules: any[] = [];
    const sheets = Array.from(document.styleSheets);

    sheets.forEach((sheet) => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        rules.forEach((rule: any) => {
          if (rule.selectorText && el.matches(rule.selectorText)) {
            allRules.push({
              selector: rule.selectorText,
              height: rule.style.height || null,
              marginTop: rule.style.marginTop || null,
              stylesheet: sheet.href,
            });
          }
        });
      } catch (e) {
        // CORS error on external sheets
      }
    });

    return {
      computedHeight: computed.height,
      computedMarginTop: computed.marginTop,
      matchingRules: allRules.filter(r => r.height || r.marginTop),
      classList: Array.from(el.classList),
      inlineStyle: el.getAttribute('style'),
    };
  });

  console.log('CSS Analysis:', JSON.stringify(cssAnalysis, null, 2));

  await context.close();
});
