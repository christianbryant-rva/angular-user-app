import { UserAppPage } from './app.po';

describe('user-app App', function() {
  let page: UserAppPage;

  beforeEach(() => {
    page = new UserAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
