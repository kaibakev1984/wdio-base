import Page from './page';

class IndecPage extends Page {
    
    public get inputCuit() {
        return $("[id=cuit_consulta]");
    }

    public get btnConsult() {
        return $("//span[normalize-space()='Consultar']");
    }

    public get cuitMessage() {
        return $("//p[contains(text(),'El CUIT indicado no está obligado a completar el C')]");
    }

    public async enterCuit(cuit: number): Promise<void> {
        await this.inputCuit.setValue(cuit);
        await this.btnConsult.click();
    }

    public async getCNEMessageText() {
        return await (await this.cuitMessage).getText();
    }

} 

export default new IndecPage();