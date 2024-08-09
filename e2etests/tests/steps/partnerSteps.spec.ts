
import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { getPage } from "../../corelib/basepage.spec";
import PartnerPage from "../pages/partnerpage";
import LocationPage from "../pages/locationpage";
import { expect } from "@playwright/test";
import partnerDataFile from "../data/partnerData.json";

setDefaultTimeout(60 * 1000);
let partnerpage: PartnerPage;
let locationpage: LocationPage;

Then('Click on the Add Partners Button', async function () {
    partnerpage = new PartnerPage(getPage(), this.log);
    await partnerpage.clickOnTheAddPartnersButton();
});

Then('Enter all the fields in Partner Details Tab & click on Save button', async function () {
    expect(await partnerpage.enterAllFieldsInPartnerDetailsTab()).toBeTruthy();
});

Then('Navigate to Locations Tab', async function () {
    expect(await partnerpage.navigateToLocationsTab()).toBeTruthy();
});

Then('Click on Create New Location Button in Location Tab', async function () {
    expect(await partnerpage.clickOnCreateNewLocationButton()).toBeTruthy();
});

Then('Enter all the fields in Partner Locations Tab & click on Save button', async function () {
    locationpage = new LocationPage(getPage(), this.log);
    expect(await locationpage.enterAllFieldsInPartnerLocationsTabCreateNewLocationPage()).toBeTruthy();
});

Then('Navigate to Contacts Tab', async function () {
    expect(await partnerpage.navigateToContactsTab()).toBeTruthy();
});

Then('Click on Create New Contact Button in Cotacts Tab', async function () {
    expect(await partnerpage.clickOnCreateNewContactButton()).toBeTruthy();
});

Then('Enter all the fields in Partner Contacts Tab & click on Save button', async function () {
    partnerpage = new PartnerPage(getPage(), this.log);
    expect(await partnerpage.enterAllFieldsInPartnerContactsTab()).toBeTruthy();
});

Then('Navigate to Details Tab', async function () {
    expect(await partnerpage.navigateToDetailsTab()).toBeTruthy();
});

Then('Click on bread crum link for Partners', async function () {
    expect(await partnerpage.clickOnBreadCrumLinkForPartners()).toBeTruthy();
});

Then('Enter the Partner Name to search in search field', async function () {
    partnerpage = new PartnerPage(getPage(), this.log);
    expect(await partnerpage.enterTheKeywordToSearch()).toBe(partnerDataFile.PartnerName);
});

Then('Click on the Partner Name to Edit the same', async function () {
    expect(await partnerpage.editThePartnerFromPartnerListing()).toBeTruthy();
});

Then('Click on the Location Name to edit in the Locations Tab', async function () {
    expect(await partnerpage.navigateToEditLocationFromLocationsTab()).toBeTruthy();
  });

  Then('Click on Delete button for Locations', async function () {
    expect(await partnerpage.navigateToEditLocationFromLocationsTab()).toBeTruthy();
  });
