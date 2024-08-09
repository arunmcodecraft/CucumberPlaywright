
import { Page } from "playwright";
import * as partnerPageLoc from "../locators/partnerPageLocators.json";
import * as locationrPageLoc from "../locators/locationPageLocators.json";

import Basepage from "./basepage";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";
import partnerDataFile from "../data/partnerData.json";


export default class PartnerPage extends Basepage {

    constructor(page: Page, log: ICreateLog) {
        super(page, log);

    }

    async clickOnTheAddPartnersButton() {
        await this.click(partnerPageLoc.addPartnerButton);
    }

    async enterAllFieldsInPartnerDetailsTab() {

        await this.enter(partnerPageLoc.addPartnerNameField, partnerDataFile.PartnerName);
        await this.enter(partnerPageLoc.addPartnerEmailField, partnerDataFile.PartnerEmail);
        await this.enter(partnerPageLoc.addPartnerPhoneNumberField, partnerDataFile.PartnerPhoneNumber);
        await this.enter(partnerPageLoc.addPartnerPartnerAddressLine1Field, partnerDataFile.PartnerAddressLine1);
        await this.enter(partnerPageLoc.addPartnerPartnerAddressLine2Field, partnerDataFile.PartnerAddressLine2);
        await this.click(partnerPageLoc.addPartnerPartnerCountryField);
        await this.selectFromDropdown(partnerPageLoc.addPartnerPartnerCountryDropdowns, partnerDataFile.PartnerCountry);
        await this.click(partnerPageLoc.addPartnerPartnerStateField);
        await this.selectFromDropdown(partnerPageLoc.addPartnerPartnerStateDropdowns, partnerDataFile.PartnerState);
        await this.enter(partnerPageLoc.addPartnerPartnerZipCodeField, partnerDataFile.ZipCode);
        await this.click(partnerPageLoc.addPartnerPartnerCityField);
        await this.selectFromDropdown(partnerPageLoc.addPartnerPartnerCityDropdowns, partnerDataFile.PartnerCity);
        await this.enter(partnerPageLoc.addPartnerPartnerNotesField, partnerDataFile.Notes);
        await this.uploadFiles(partnerPageLoc.addPartnerPartnerLogoField, partnerDataFile.imageFile);
        await this.click(partnerPageLoc.addPartnerPartnerSaveButton);
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerPartnerSuccessMessage);
        const createPartnerSuccessMessagestatus = await this.getLocator(partnerPageLoc.addPartnerPartnerSuccessMessage).isVisible();
        return createPartnerSuccessMessagestatus;
    }

    async navigateToLocationsTab() {
        await this.waitForElementToBeHidden(partnerPageLoc.addPartnerPartnerSuccessMessage);
        await this.click(partnerPageLoc.addPartnerLocationsTabButton);
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerLocationsTabCreateNewLocationButton);
        const locationsTabCreateNewLocationButtonStatus = await this.getLocator(partnerPageLoc.addPartnerLocationsTabCreateNewLocationButton).isVisible();
        return locationsTabCreateNewLocationButtonStatus;
    }

    async clickOnCreateNewLocationButton() {
        await this.click(partnerPageLoc.addPartnerLocationsTabCreateNewLocationButton);
        await this.waitForElementToBeHidden(partnerPageLoc.addPartnerLocationsTabCreateNewLocationButton);
        await this.waitForElementToBeVisible(locationrPageLoc.addLocationTitle);
        const createNewLocationTitleStatus = await this.getLocator(locationrPageLoc.addLocationTitle).isVisible();
        return createNewLocationTitleStatus;
    }

    async navigateToContactsTab() {
        await this.click(partnerPageLoc.addPartnerContactsTabButton);
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerContactsTabCreateNewContactButton);
        const locationsTabCreateNewContactButtonStatus = await this.getLocator(partnerPageLoc.addPartnerContactsTabCreateNewContactButton).isVisible();
        return locationsTabCreateNewContactButtonStatus;
    }

    async clickOnCreateNewContactButton() {
        await this.click(partnerPageLoc.addPartnerContactsTabCreateNewContactButton);
        await this.waitForElementToBeHidden(partnerPageLoc.addPartnerContactsTabCreateNewContactButton);
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerContactsTabCreateNewContactTitle);
        const createNewContactTitleStatus = await this.getLocator(partnerPageLoc.addPartnerContactsTabCreateNewContactTitle).isVisible();
        return createNewContactTitleStatus;
    }

    async enterAllFieldsInPartnerContactsTab() {
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerContactsTabContactNameField);
        await this.enter(partnerPageLoc.addPartnerContactsTabContactNameField, partnerDataFile.ContactName);
        await this.enter(partnerPageLoc.addPartnerContactsTabJobTitleField, partnerDataFile.ContactJobTitle);
        await this.enter(partnerPageLoc.addPartnerContactsTabEmailField, partnerDataFile.ContactEmail);
        await this.enter(partnerPageLoc.addPartnerContactsTabTelephoneField, partnerDataFile.ContactTelephone);
        await this.click(partnerPageLoc.addPartnerContactsTabSaveButton);
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerContactSuccessMessage);
        const createCotactSuccessMessagestatus = await this.getLocator(partnerPageLoc.addPartnerContactSuccessMessage).isVisible();
        return createCotactSuccessMessagestatus;
    }

    async navigateToDetailsTab() {
        await this.waitForElementToBeHidden(partnerPageLoc.addPartnerContactSuccessMessage);
        await this.click(partnerPageLoc.addPartnerDetailsTabButton);
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerNameField);
        const partnerNameStatus = await this.getLocator(partnerPageLoc.addPartnerNameField).isVisible();
        return partnerNameStatus;
    }

    async clickOnBreadCrumLinkForPartners() {
        await this.click(partnerPageLoc.parnerBreadCrumLink);
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerButton);
        const addPartnerButtonStatus = await this.getLocator(partnerPageLoc.addPartnerButton).isVisible();
        return addPartnerButtonStatus;

    }

    async enterTheKeywordToSearch() {

        await this.enter(partnerPageLoc.parnerListingSearchField,partnerDataFile.PartnerName);
        await this.waitForLoader();
        const searchedPartnerName = await this.getTheTextContent(partnerPageLoc.parnerListingSearchedNameField);
        return searchedPartnerName;
    }

    async editThePartnerFromPartnerListing()
    {
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerButton);
        await this.click(partnerPageLoc.parnerListingSearchedNameField);
        await this.waitForElementToBeVisible(partnerPageLoc.addPartnerDetailsTabButton);
        const detailsTabButtonStatus = await this.getTheTextContent(partnerPageLoc.addPartnerDetailsTabButton);
        return detailsTabButtonStatus; 
    }

    async navigateToEditLocationFromLocationsTab()
    {
        await this.waitForElementToBeVisible(locationrPageLoc.editLocationFirstAddedLocation);
        await this.click(locationrPageLoc.editLocationFirstAddedLocation);
        await this.waitForElementToBeVisible(locationrPageLoc.editLocationDeleteButton);
        const editLocationPageStatus = await this.getLocator(locationrPageLoc.editLocationDeleteButton).isVisible();
        return editLocationPageStatus; 
    }

    async clickOnDeleteButtonForEditLocation()
    {
        await this.waitForElementToBeVisible(locationrPageLoc.editLocationDeleteButton);
        await this.click(locationrPageLoc.editLocationDeleteButton);
        await this.waitForElementToBeVisible(locationrPageLoc.editLocationDeletePopupYesButton);
        await this.click(locationrPageLoc.editLocationDeletePopupYesButton);
        
    }

}


