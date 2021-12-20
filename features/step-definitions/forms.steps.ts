import {Given, When, Then} from '@cucumber/cucumber';

Given(/^I open the browser and load the url (.+)$/, async (homepageurl) => {
   await browser.url(homepageurl);
   await browser.maximizeWindow();
  });

  When(/^I enter firstname (.+) and lastname (.+)$/, async (firstname, lastname) => {
   const firstname_input = $('[id=firstName]');
   const lastname_input = $('[id=lastName]');
   await firstname_input.addValue(firstname);
   await lastname_input.addValue(lastname);
  });

  When(/^I enter email (.+)$/, async (email) => {
     const email_input = $('[id=userEmail]');
     await email_input.addValue(email);
  });

  When(/^I click on gender (.+)$/, async (gender) => {
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

  });

  When(/^I enter phone number (.+)$/, async (mobilenumber) => {
       const numberInput = $('[id=userNumber]');
       await numberInput.addValue(mobilenumber);
  });

  When(/^I enter birth date (.+)$/, async (birthdate) => {
      //  const birthdateInput = $('[id=dateOfBirthInput]');
      //  await birthdateInput.clearValue();
      //  await birthdateInput.addValue(birthdate);
  });

  When(/^I enter subject (.+)$/, async (subjects) => {
       const subjectsInput = $('[id=subjectsInput]');
       await subjectsInput.addValue(subjects);
       await browser.keys("\uE007"); 
  });

  When(/^I click on hobbies (.+)$/, async (hobbies) => {
       if(hobbies === 'Sports') {
          const hobbiesInput = $('//*[@id="hobbiesWrapper"]/div[2]/div[1]');
          await hobbiesInput.click();
          return;
       }
       if(hobbies === 'Reading') {
         const hobbiesInput = $('//*[@id="hobbiesWrapper"]/div[2]/div[2]');
         await hobbiesInput.click();
         return;
      }
      if(hobbies === 'Music') {
         const hobbiesInput = $('//*[@id="hobbiesWrapper"]/div[2]/div[3]');
         await hobbiesInput.click();
         return;
      }
  });

  When(/^I enter current address (.+)$/, async (currentaddress) => {
       const currentAddressInput = $('[id=currentAddress]');
       await currentAddressInput.addValue(currentaddress);
  });

  When(/^I click on button submit$/, async () => {
       const submitBtn = $('[id=submit]');
       await submitBtn.scrollIntoView();
       await submitBtn.click();
  });

  Then(/^I should see summiting message (.+)$/, async (message) => {
      const messageModal = $('[id=example-modal-sizes-title-lg]');
      expect(await messageModal.getText()).toEqual(message);
 });