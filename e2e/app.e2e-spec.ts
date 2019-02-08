import { MusicShopPage } from './app.po';

describe('music-shop App', () => {
  let page: MusicShopPage;

  beforeEach(() => {
    page = new MusicShopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
