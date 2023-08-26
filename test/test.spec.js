const pw = require('playwright-core')
const chai = require('chai')
const expect = chai.expect

let page, browser, context

describe('Sample Test', () => {
    beforeEach(async function() {
        this.timeout(35000)
        const capabilities = {
          'tb:options': {
            key: process.env.TB_KEY,
            secret: process.env.TB_SECRET
          },
          browserName: 'chrome',
          browserVersion: 'latest'
        }
        browser = await pw.chromium.connect({
          wsEndpoint: `wss://cloud.testingbot.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
        })
        context = await browser.newContext()
        page = await context.newPage('https://testingbot.com')
    })

    afterEach(async function() {
        await page.screenshot({ path: `${this.currentTest.title.replace(/\s+/g, '_')}.png` })
        await browser.close()
    })

    it('Checks the title of the page', async() => {
        await page.goto('https://testingbot.com/');
        const title = await page.title()
        expect(title).to.equal('Cross Browser Testing and Mobile App Testing | TestingBot')
    })
})