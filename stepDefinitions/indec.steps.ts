import {Given, When, Then} from '@cucumber/cucumber';
import IndecPage from '../pages/indec.page';

Given(/^indec web site$/, async () => {
    //
    let pageurl = "https://cne.indec.gob.ar/#/consulta";
    await IndecPage.openPage(pageurl);
  });

  When(/^search cuil number (.+)$/, async (cuil) => {
      await IndecPage.enterCuit(cuil);
  });

  Then(/^user doesn't need to complete CNE$/, async () => {
    const message = await IndecPage.getCNEMessageText();
    expect(message).toEqual("El CUIT indicado no está obligado a completar el CNE.");
  });