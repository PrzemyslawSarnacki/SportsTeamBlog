import { SportsTeamBlogPage } from './app.po';

describe('sports-team-blog App', function() {
  let page: SportsTeamBlogPage;

  beforeEach(() => {
    page = new SportsTeamBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
