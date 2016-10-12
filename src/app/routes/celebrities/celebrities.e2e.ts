describe('App', () => {

  beforeEach(() => {
    browser.get('/#/celebrities');
  });

  it('should have a message panel "road to bay area"', () => {
    let elem = element(by.css('.message'));

    expect(elem.getText()).toEqual('road to bay area');
  });

});
