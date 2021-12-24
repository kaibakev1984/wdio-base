import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";
import Constants from "../commons/constants";

class FormsPage extends Page {
  genders = new Map<string, string>([
    ["Male", "[for=gender-radio-1]"],
    ["Female", "[for=gender-radio-2]"],
    ["Other", "[for=gender-radio-3]"],
  ]);

  hobbies = new Map<string, string>([
    ["Sports", '//*[@id="hobbiesWrapper"]/div[2]/div[1]'],
    ["Reading", '//*[@id="hobbiesWrapper"]/div[2]/div[2]'],
    ["Music", '//*[@id="hobbiesWrapper"]/div[2]/div[3]'],
  ]);

  public get inputFirstname(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("[id=firstName]");
  }
  public get inputLastname(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("[id=lastName]");
  }

  public get inputEmail(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("[id=userEmail]");
  }

  public get inputSubject(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("[id=subjectsInput]");
  }

  public get inputMobileNumberInput(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("[id=userNumber]");
  }

  public get inputAddress(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("[id=currentAddress]");
  }

  public get btnSubmit(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("[id=submit]");
  }

  public get messageModal(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("[id=example-modal-sizes-title-lg]");
  }
  public async enterFirstnameAndLastname(
    firstname: string,
    lastname: string
  ): Promise<void> {
    await this.inputFirstname.addValue(firstname);
    await this.inputLastname.addValue(lastname);
  }

  public async enterEmail(email: string): Promise<void> {
    await this.inputEmail.addValue(email);
  }

  public async clickOnGenderButton(gender: string): Promise<void> {
    if (!this.genders.has(gender)) {
      return;
    }
    const gender_input = $(this.genders.get(gender));
    await gender_input.click();
  }

  public async enterMobileNumber(mobilenumber: string): Promise<void> {
    await this.inputMobileNumberInput.setValue(mobilenumber);
  }

  public async enterSubject(subject: string): Promise<void> {
    await this.inputSubject.setValue(subject);
    await browser.keys(Constants.ENTER_KEY);
  }

  public async clickOnHobby(hobby: string): Promise<void> {
    if (!this.hobbies.has(hobby)) {
      return;
    }
    const hobby_checkbox = $(this.hobbies.get(hobby));
    await hobby_checkbox.click();
  }

  public async enterCurrentAddress(currentaddress: string): Promise<void> {
    await this.inputAddress.setValue(currentaddress);
  }

  public async submit(): Promise<void> {
    await this.btnSubmit.scrollIntoView();
    await this.btnSubmit.click();
  }

  public async getMessageModalText(): Promise<string> {
    return await this.messageModal.getText();
  }
}

export default new FormsPage();