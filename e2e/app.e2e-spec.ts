import { GitProfileSearcherPage } from './app.po';

describe('git-profile-searcher App', function() {
  let page: GitProfileSearcherPage;

  beforeEach(() => {
    page = new GitProfileSearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
