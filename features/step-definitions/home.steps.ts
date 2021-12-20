import {Given, Then} from '@cucumber/cucumber';
import HomePage from '../pageobjects/home.page';

Given(/^I open the browser and load the url (.+)$/, async (homepageurl) => {
    await HomePage.openPage(homepageurl);
  });

Then(/^I should see a header message with text (.+)$/, async (headertext) => {
    // const header = await $('.heading');
    // expect(await header.getText()).toEqual(headertext); 
    const headerText = await HomePage.getHeaderText();
    expect(headertext).toEqual(headertext);
  });