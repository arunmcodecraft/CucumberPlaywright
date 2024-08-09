import { Page } from "playwright";
import * as locationPageLoc from "../locators/locationPageLocators.json";
import Basepage from "./basepage";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";
import locationDataFile from "../data/locationData.json";

export default class LocationPage extends Basepage {

    constructor(page: Page, log: ICreateLog) {
        super(page, log);
    }

async enterAllFieldsInPartnerLocationsTabCreateNewLocationPage()
{
    await this.waitForElementToBeVisible(locationPageLoc.addLocationNameField);
    await this.enter(locationPageLoc.addLocationNameField,locationDataFile.LocationName);
    await this.enter(locationPageLoc.addLocationDescriptionField,locationDataFile.LocationDescription);
    await this.enter(locationPageLoc.addLocationPartnerField,locationDataFile.PartnerName);
    await this.waitForElementToBeVisible(locationPageLoc.addLocationPartnerFieldsOptions);
    await this.selectFromDropdown(locationPageLoc.addLocationPartnerFieldsOptions,locationDataFile.PartnerName);
    await this.enter(locationPageLoc.addLocationAddress1Field,locationDataFile.LocationAddressLine1);
    await this.enter(locationPageLoc.addLocationAddress2Field,locationDataFile.LocationAddressLine2);
    await this.click(locationPageLoc.addLocationCountryField);
    await this.selectFromDropdown(locationPageLoc.addLocationCountryFieldOptions,locationDataFile.LocationCountry);
    await this.click(locationPageLoc.addLocationStateField);
    await this.selectFromDropdown(locationPageLoc.addLocationStateFieldOptions,locationDataFile.LocationState);
    await this.enter(locationPageLoc.addLocationZipcodeField,locationDataFile.LocationZipCode); 
    await this.click(locationPageLoc.addLocationCityField);
    await this.selectFromDropdown(locationPageLoc.addLocationCityFieldOptions,locationDataFile.LocationCity)
    await this.enter(locationPageLoc.addLocationPhoneNumberField,locationDataFile.LocationPhoneNumber);
    await this.click(locationPageLoc.addLocationSaveButton);
    await this.waitForElementToBeVisible(locationPageLoc.addLocationSuccessMessage) ;   
    const createLocationSuccessMessagestatus = await this.getLocator(locationPageLoc.addLocationSuccessMessage).isVisible();   
    return createLocationSuccessMessagestatus;
}

}