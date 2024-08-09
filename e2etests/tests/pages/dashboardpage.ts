import { Page } from "playwright";
import { expect } from "playwright/test";
import * as dashboardPageLoc from "../locators/dashboardPageLocators.json"
import Basepage from "./basepage";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export default class DashboardPage extends Basepage {


    constructor(page: Page, log: ICreateLog) {
        super(page, log);

    }

    async checkTheDashboardTitle() {

        const dashboardTitle = await this.page.locator(dashboardPageLoc.dashboardTitle.locator).textContent();
        return dashboardTitle;
    }

    async checkTheDashboardURL() {
        await this.page.waitForURL('https://stage.assets.contifluidsolutions.com/#/home/dashboard');
        const actualDashboardURL = await this.page.url();
        return actualDashboardURL;
    }

    async clickOnProfileIcon() {
        await this.click(dashboardPageLoc.dashboardProfileIcon);
    }

    async clickOnLogoutButton() {
        await this.click(dashboardPageLoc.dashboardLogoutButton);
    }

    async clickOnDeletePopupYesButton()
    {
        await this.click(dashboardPageLoc.dashboardLogoutPopupYesButton);
    }

    async clickOnBreadCrumForCollapsingTheMenuBar()
    {
        await this.click(dashboardPageLoc.dashboardBreadCrumBForMenuBar);
        return await this.getLocator(dashboardPageLoc.dashboardHorseLogo).isVisible();
    }

    async clickOnBreadCrumForExpandingTheMenuBar()
    {
        await this.click(dashboardPageLoc.dashboardBreadCrumBForMenuBar);
        return await this.getLocator(dashboardPageLoc.dashboardContintentalLogo).isVisible();
    }

    async clickOnMasterData()
    {
        await this.click(dashboardPageLoc.dashboardMasterDataMenuIcon);
    }
    async clickOnTheMasterDataPartnersIcon ()
    {
        await this.click(dashboardPageLoc.dashboardMasterDataPartnersIcon);
    }

}