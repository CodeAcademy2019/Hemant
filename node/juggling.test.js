const juggler = require('./juggling');

describe('Juggling asycn requests ', () => {
  it('should receive info from http URL', (done) => {
    function callbackF(data) {
      expect(data).toEqual(['Hello', 'world', 'e']);
      done();
    }
    const urls = ['http://localhost:4000/', 'http://localhost:4000/w', 'http://localhost:4000/e'];
    for (let i = 0; i < 3; i += 1) {
      juggler(urls[i], i, callbackF);
    }
  });
});