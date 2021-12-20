import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class FormsPage extends Page {
    public get inputFirstname(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[id=firstName]');
    } 
    public get inputLastname(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[id=lastName]');
    }
    
    public get inputEmail(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[id=userEmail]');
    }

    public get inputSubject(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[id=subjectsInput]');
    }

    public async enterFirstnameAndLastname(firstname: string, lastname: string): Promise<void> {
        await this.inputFirstname.addValue(firstname);
        await this.inputLastname.addValue(lastname);
    }

    public async enterEmail(email: string): Promise<void> {
        await this.inputEmail.addValue(email);
    }

    public get inputMobileNumberInput(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[id=userNumber]');
    }

    public async clickOnGenderButton(gender: string): Promise<void> {
        if(gender === 'Male') {
            const male_gender_input = $('[for=gender-radio-1]');
            await male_gender_input.click();
            return;
         }
         if(gender === 'Female') {
            const female_gender_input = $('[for=gender-radio-2]');
            await female_gender_input.click();
            return;
        }
    }

    public async enterMobileNumber(mobilenumber: string): Promise<void> {
        await this.inputMobileNumberInput.setValue(mobilenumber);
    }

    public async enterSubject(subject: string): Promise<void> {
        await this.inputSubject.setValue(subject);
        await browser.keys("\uE007"); 
    }

    public async clickOnHobby(hobby: string): Promise<void> {
        if(hobby === 'Sports') {
            const hobbiesInput = $('//*[@id="hobbiesWrapper"]/div[2]/div[1]');
            await hobbiesInput.click();
            return;
         }
         if(hobby === 'Reading') {
           const hobbiesInput = $('//*[@id="hobbiesWrapper"]/div[2]/div[2]');
           await hobbiesInput.click();
           return;
        }
        if(hobby === 'Music') {
           const hobbiesInput = $('//*[@id="hobbiesWrapper"]/div[2]/div[3]');
           await hobbiesInput.click();
           return;
        }
    }

    public get inputAddress(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[id=currentAddress]');
    }

    public async enterCurrentAddress(currentaddress: string): Promise<void> {
        await this.inputAddress.setValue(currentaddress);
    }

    public get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[id=submit]');
    }

    public async submit(): Promise<void> {
        await this.btnSubmit.scrollIntoView();
        await this.btnSubmit.click();
    }

    public get messageModal(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[id=example-modal-sizes-title-lg]');
    }

    public async getMessageModalText(): Promise<string> {
        return await this.messageModal.getText();
    }
    
}

export default new FormsPage();