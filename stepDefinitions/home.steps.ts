import {Given, Then} from '@cucumber/cucumber';
import HomePage from '../pages/home.page';

Given(/^I open the browser and load the url (\w+)$/, async (homepageurl) => {
  await HomePage.openPage(homepageurl);
  });

Then(/^I should see a header message with text (.+)$/, async (headertext) => {
    const headerText = await HomePage.getHeaderText();
    await expect(headertext).toEqual(headerText);
  });