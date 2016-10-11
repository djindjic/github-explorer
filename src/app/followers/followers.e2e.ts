describe('App', () => {

  beforeEach(() => {
    browser.get('/#/followers');
  });

  it('should have a div panel "by followers"', () => {
    let elem = element(by.css('.by-followers'));

    expect(elem.isPresent()).toEqual(true);
  });

});
