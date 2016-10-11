describe('App', () => {

  beforeEach(() => {
    browser.get('/#/');
  });

  it('should have a div panel "by stars"', () => {
    let elem = element(by.css('.by-stars'));

    expect(elem.isPresent()).toEqual(true);
  });

});
