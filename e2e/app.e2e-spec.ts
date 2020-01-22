import { EdcenPage } from './app.po';

describe('edcen App', function() {
  let page: EdcenPage;

  beforeEach(() => {
    page = new EdcenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
