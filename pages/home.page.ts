import Page from './page';

class HomePage extends Page {

    public get header() {
        return $('.heading');
    } 

    public async getHeaderText(): Promise<string> {
        return (await this.header).getText();
    }
}

export default new HomePage();