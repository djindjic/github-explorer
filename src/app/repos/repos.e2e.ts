describe('App', () => {

  beforeEach(() => {
    browser.get('/#/repos');
  });

  it('should have a div panel "by repos"', () => {
    let elem = element(by.css('.by-repos'));

    expect(elem.isPresent()).toEqual(true);
  });

});
