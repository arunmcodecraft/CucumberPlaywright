import {Page} from "playwright";
import * as loginPageLoc from "../locators/loginPageLocators.json"
import Basepage from "./basepage";
import dotenv from "dotenv";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export default class LoginPage extends Basepage{
  
    constructor(page:Page,log:ICreateLog)
    {
       super(page,log);
      
    }

    async launchURL()
    {
        await this.page.goto(process.env.app_url!);
    }

    async loginToApp(user_name:string, pass_word:string) {
        await this.enter(loginPageLoc.usernameField,user_name);
        await this.enter(loginPageLoc.passwordField,pass_word);
    }

    async clickOnLoginButton()
    {
        await this.click(loginPageLoc.loginButton);
        await this.page.waitForTimeout(10000);
        //await this.page.locator(loginPageLoc.loginButton.locator).click();
    }

    async checkTheInvalidCredentialsErrorMessage()
    {
        return await this.getLocator(loginPageLoc.invalidCredentialError);
    }

    async checkTheLoginPageURL()
    {
        await this.page.waitForURL('https://stage.assets.contifluidsolutions.com/#/login');
        const actualLoginPageURL = await this.page.url();
        return actualLoginPageURL;
    }
}