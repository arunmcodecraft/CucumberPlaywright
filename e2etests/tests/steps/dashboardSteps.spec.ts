import { Given, When, Then, Before, After,setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium} from "playwright";
import { getPage } from "../../corelib/basepage.spec";
import {expect} from "@playwright/test";
import DashboardPage from "../pages/dashboardpage";


let dashboardpage:DashboardPage;

setDefaultTimeout(60 * 1000);

Then('Check the URL of the dashboard Page', async function () {
  dashboardpage = new DashboardPage(getPage(),this.log);
  expect( await dashboardpage.checkTheDashboardURL()).toBe('https://stage.assets.contifluidsolutions.com/#/home/dashboard');
});

Then('Dashboard Page should be displayed', async function () {
  dashboardpage = new DashboardPage(getPage(),this.log);
  expect(await dashboardpage.checkTheDashboardTitle()).toBe('Home');
  });

  Then('Click on Profile Icon', async function () {
    dashboardpage = new DashboardPage(getPage(),this.log);
    await dashboardpage.clickOnProfileIcon();
  });

  Then('Click on Logout Button', async function () {
    dashboardpage = new DashboardPage(getPage(),this.log);
    await dashboardpage.clickOnLogoutButton();
  });
 

  Then('Click on Logout Popup Yes Button', async function () {
    dashboardpage = new DashboardPage(getPage(),this.log);
    await dashboardpage.clickOnDeletePopupYesButton();
  });

  Then('Click on the Breadcrum for collapsing the MenuBar', async function () {
    expect(await dashboardpage.clickOnBreadCrumForCollapsingTheMenuBar()).toBeTruthy;
  });
 
  Then('Click on the Breadcrum for expanding the menubar', async function () {
    expect(await dashboardpage.clickOnBreadCrumForExpandingTheMenuBar()).toBeTruthy;
  });

  Then('Click on the MasterData', async function () {
   await dashboardpage.clickOnMasterData();
  });

  Then('Click on the Master Data Partners Icon', async function () {
    await dashboardpage.clickOnTheMasterDataPartnersIcon();
   });

   