import { WaiterWebPage } from './app.po';

describe('waiter-web App', function() {
  let page: WaiterWebPage;

  beforeEach(() => {
    page = new WaiterWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
