import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';


/*test('test', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await testInfo.attach('test',{
    body: await page.screenshot(),
    contentType: "image/png",
  });
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('#item_4_title_link').click();
  await takeScreenshot(page,'Login',testInfo)
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.locator('[data-test="checkout"]').click();
  await takeScreenshot(page,'Checkout',testInfo)
  await page.locator('[data-test="firstName"]').fill('test');
  await page.locator('[data-test="lastName"]').fill('test');
  await page.locator('[data-test="postalCode"]').fill('test');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await testInfo.attach('Finish',{
    body: await page.screenshot(),
    contentType: "image/png",
  });
  await page.locator('[data-test="back-to-products"]').click();
});
*/
async function takeScreenshot(page, elementName, testInfo) {
  // Take a screenshot
 // const screenshotPath = `./screenshots/${elementName}.png`;
  //await page.screenshot({ path: screenshotPath });

  // Add the screenshot to Allure report using testInfo
  testInfo.attach(`Screenshot: ${elementName}`,{body: await page.screenshot(),
    contentType: "image/png",
  });
}