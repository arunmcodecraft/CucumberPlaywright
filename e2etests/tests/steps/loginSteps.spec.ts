
import { Given, When, Then, Before, After,setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { getPage} from "../../corelib/basepage.spec";
import LoginPage from "../pages/loginpage";
import {expect} from "@playwright/test";

setDefaultTimeout(60 * 1000);
let loginPage:LoginPage;

Given('User is at login Page', async function () {
  loginPage = new LoginPage(getPage(),this.log)
  await loginPage.launchURL();
});

When('Enter your {string} and {string}', async function (username, password) {
  await loginPage.loginToApp(username,password);
});


Then('Click on Login Button', async function () {
  await loginPage.clickOnLoginButton();
});

Then('Invalid Credentials Error message should be displayed', async function () {
expect((await loginPage.checkTheInvalidCredentialsErrorMessage()).isVisible()).toBeTruthy();
});

Then('Check the Login Page URL', async function () {
  expect( await loginPage.checkTheLoginPageURL()).toBe('https://stage.assets.contifluidsolutions.com/#/login');
});




