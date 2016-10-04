import { HappyMomentsPage } from './app.po';

describe('happy-moments App', function() {
  let page: HappyMomentsPage;

  beforeEach(() => {
    page = new HappyMomentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
