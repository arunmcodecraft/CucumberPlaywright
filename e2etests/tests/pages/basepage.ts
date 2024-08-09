import { Page } from "playwright";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export default class Basepage {

    protected page: Page;
    protected log: ICreateLog;

    constructor(page: Page, log: ICreateLog) {
        this.page = page;
        this.log = log;
    }



    async click(object: any, roleFlag = false) {
        if (!roleFlag) {
            await this.getLocator(object).click(object["actOptions"]);
            this.log(`Clicked on ${object["description"]}`);
        }
        else {
            const myEle = object.locator as "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" | "caption" | "cell" | "checkbox" | "code" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "deletion" | "dialog" | "directory" | "document" | "emphasis" | "feed" | "figure" | "form" | "generic" | "grid" | "gridcell" | "group" | "heading" | "img" | "insertion" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "meter" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "none" | "note" | "option" | "paragraph" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "strong" | "subscript" | "superscript" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "time" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem";
            await this.page.getByRole(myEle, object.actOptions).click();
        }
    }

    async enter(object: any, data: string) {
        await this.getLocator(object).fill(data, object["actOptions"]);
        this.log(`Entered value ${data} on ${object["description"]}`)
    }

    getLocator(object: any) {
        return this.page.locator(object["locator"], object["locatorOptions"]);
    }

    async selectFromDropdown(object: any, data: string) {
        // Wait for 2 seconds before starting
        await this.page.waitForTimeout(500);

        // Get the Locator for the dropdown options
        let options = this.getLocator(object);

        // Get the count of options
        let count = await options.count();

        //For Debug puposes, uncomment
        //console.log(`Found ${count} options.`);

        // Iterate through the options
        for (let i = 0; i < count; i++) {
            let option = options.nth(i);

            // Wait for the option to be visible
            //await option.scrollIntoViewIfNeeded();

            let optionText = await option.textContent();

            // Log the text of each option for debugging
            //console.log(`Option ${i}: Text is : "${optionText}"`);

            // If the option text matches the data, click the option
            if (optionText && optionText.trim() === data) {
                //For Debug puposes, uncomment
                //console.log(`Clicking on option ${i} with text "${optionText.trim()}"`);
                await option.click();
                break; // Exit the loop after finding and clicking the match
            }
        }

    }

    async uploadFiles(object: any, data: string) {
        const locator = await this.getLocator(object);
        await locator.setInputFiles(data);
        this.log(`Uploaded the ${data} to ${object["description"]}`)
    }

    async waitForElementToBeVisible(object: any) {
        await this.getLocator(object).waitFor({ state: 'visible' });
        this.log(`waited for the element ${object["description"]}`)
    }

    async waitForElementToBeHidden(object: any) {
        await this.getLocator(object).waitFor({ state: 'hidden' });
        this.log(`Element ${object.description} is now hidden.`);
    }
    async waitForLoader() {
        await this.page.waitForTimeout(10000);
        this.log(`Waited for the loader.`);
    }
    async getTheTextContent(object:any) {
        
        const text = await this.getLocator(object).textContent();
        this.log(`Element ${object.description} is now hidden.`);
        return text;
    }
    
}