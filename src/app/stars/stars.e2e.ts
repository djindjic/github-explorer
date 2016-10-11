describe('App', () => {

  beforeEach(() => {
    browser.get('/#/stars');
  });

  it('should have a dib panel "by stars"', () => {
    let elem = element(by.css('.by-stars'));

    expect(elem.isPresent()).toEqual(true);
  });

});
