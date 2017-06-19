import { VcardAppPage } from './app.po';

describe('vcard-app App', () => {
  let page: VcardAppPage;

  beforeEach(() => {
    page = new VcardAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
