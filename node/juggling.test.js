const route = require('./server');
const testFunc = require('./juggling');

describe('juggleAsync()', () => {
  it('should receive info array from http URLs', (done) => {
    const callbackF = (data) => {
      expect(data).toEqual(['q', 'w', 'e']);
      done();
    }; 
    process.argv = ['node', 'juggling.js', 'http://localhost:7000/q', 'http://localhost:7000/w', 'http://localhost:7000/e'];
    testFunc(callbackF);
  });
  xit('should receive not receive anything other info from http URLs', (done) => {
    const callbackF = (data) => {
      expect(data).not.toEqual([null, null, null]);
      done();
    }; 
    process.argv = ['node', 'juggling.js', 'http://localhost:7000/hello', 'http://localhost:7000/world', 'http://localhost:7000/bye'];
    testFunc(callbackF);
  });
});