import {Given, When, Then} from '@cucumber/cucumber';
import FormsPage from '../pageobjects/forms.page';

Given(/^I open the browser and load the url (.+)$/, async (pageurl) => {
   await FormsPage.openPage(pageurl);
  });

  When(/^I enter firstname (.+) and lastname (.+)$/, async (firstname, lastname) => {
   await FormsPage.enterFirstnameAndLastname(firstname, lastname);
  });

  When(/^I enter email (.+)$/, async (email) => {
     await FormsPage.enterEmail(email);
  });

  When(/^I click on gender (.+)$/, async (gender) => {
      await FormsPage.clickOnGenderButton(gender);
  });

  When(/^I enter phone number (.+)$/, async (mobilenumber) => {
       await FormsPage.enterMobileNumber(mobilenumber);
  });

  When(/^I enter birth date (.+)$/, async (birthdate) => {
      //  const birthdateInput = $('[id=dateOfBirthInput]');
      //  await birthdateInput.clearValue();
      //  await birthdateInput.addValue(birthdate);
  });

  When(/^I enter subject (.+)$/, async (subjects) => {
       await FormsPage.enterSubject(subjects);
  });

  When(/^I click on hobbies (.+)$/, async (hobbies) => {
      await FormsPage.clickOnHobby(hobbies);
  });

  When(/^I enter current address (.+)$/, async (currentaddress) => {
       await FormsPage.enterCurrentAddress(currentaddress);
  });

  When(/^I click on button submit$/, async () => {
       await FormsPage.submit();
  });

  Then(/^I should see summiting message (.+)$/, async (message) => {
      // const messageModal = $('[id=example-modal-sizes-title-lg]');
      // expect(await messageModal.getText()).toEqual(message);
      const messageModal = await FormsPage.getMessageModalText();
      expect(messageModal).toEqual(message);
 });