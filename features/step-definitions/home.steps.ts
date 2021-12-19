import {Given, Then} from '@cucumber/cucumber';

Given(/^I open the browser and load the url (.+)$/, async (homepageurl) => {
    browser.url(homepageurl);
    browser.maximizeWindow();
  });

Then(/^I should see a header message with text (.+)$/, async (headertext) => {
    const header = await $('.heading');
    expect(await header.getText()).toEqual(headertext); 
  });