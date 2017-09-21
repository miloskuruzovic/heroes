import { NgHeroesPage } from './app.po';

describe('ng-heroes App', () => {
  let page: NgHeroesPage;

  beforeEach(() => {
    page = new NgHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
