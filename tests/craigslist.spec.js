import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import { text } from 'stream/consumers';


test('test', async ({ page }, testInfo) => {
  await page.goto('https://www.craigslist.org/');
  await page.waitForLoadState('networkidle');
  await page.locator('a').nth(2).isEnabled();
  let links=await page.locator('a').all();
  console.log("Links "+ links.length);
  const list=await page.locator('a').allTextContents();
  await console.log(list);
  
 
});

async function takeScreenshot(page, elementName, testInfo) {
  // Take a screenshot
 // const screenshotPath = `./screenshots/${elementName}.png`;
  //await page.screenshot({ path: screenshotPath });

  // Add the screenshot to Allure report using testInfo
  testInfo.attach(`Screenshot: ${elementName}`,{body: await page.screenshot(),
    contentType: "image/png",
  });
}