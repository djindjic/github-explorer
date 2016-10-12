describe('App', () => {

  beforeEach(() => {
    browser.get('/#/seniors');
  });

   it('should have a message panel "respect to seniors!"', () => {
    let elem = element(by.css('.message-seniors'));

    expect(elem.getText()).toEqual('respect to seniors!');
  });

});
