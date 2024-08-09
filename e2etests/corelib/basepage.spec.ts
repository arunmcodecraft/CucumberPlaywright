import { Given, When, Then, Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, firefox } from "playwright";
import { expect } from "@playwright/test";
import dotenv from "dotenv";

let browser: Browser;
let browserContext: BrowserContext;
let page: Page;

BeforeAll(async function () {
    dotenv.config({
        path: `${process.cwd()}/config/.env.${process.env.npm_config_env}`
    });
    let browserType = process.env.browser;

    switch (browserType) {
        case 'chrome':
        case 'gc':
            browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
            break;
        case 'firefox':
        case 'ff':
            browser = await firefox.launch({ headless: false, channel: "firefox", args: ['--start-maximized'] });
            break;
        case 'edge':
        case 'msedge':
            browser = await chromium.launch({ headless: false, channel: "msedge", args: ['--start-maximized'] });
            break;

        default:
            throw new Error('Invalid browser type has passed ... Please check again ...');
            break;

    }
});

Before(async function (scenario) {
    browserContext = await browser.newContext({ viewport: null });
    page = await browserContext.newPage();
    console.log(`${scenario.pickle.name} is started.`);    
});

BeforeStep(async function (scenario) {
    this.log(`${scenario.pickleStep.text} is started.`);
});

After(
    async function (scenario) {
       
        this.log(`${scenario.pickle.name} is ended.`);
        this.log(`Scenario status is <<<<<${scenario.result?.status}>>>>>>>>>`);
        if(scenario.result?.status==Status.FAILED){
            this.log(`Taking Screenshot`);
            const img  = await page.screenshot({
              path :`./reports/${scenario.pickle.name}.png`
            });
            this.attach(img,'image/png');
        }
        await page.close();
        await browserContext.close();
    });


AfterStep(async function (scenario) {
    this.log(`${scenario.pickleStep.text} is ended.`);
});

AfterAll(
    async function () {
        await browser.close();
    });

export function getPage(): Page {
    return page;
}