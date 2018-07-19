import { AppyPage } from './app.po';

describe('appy App', function() {
  let page: AppyPage;

  beforeEach(() => {
    page = new AppyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
