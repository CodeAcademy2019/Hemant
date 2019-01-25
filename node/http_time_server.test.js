const net = require('net');
const testObj = require('./http_time_server');

describe('checking time server', () => {
  it('should receive date from port', (done) => {
    function callbackFunction(data) {
      console.log(data.toString());
      expect(data.toString()).toEqual(testObj.now());
      done();
    }
    const client = net.connect(3000);
    client.on('data', callbackFunction);
  });
  it('should not receive anything other than date from port', (done) => {
    function callbackFunction(data) {
      console.log(data.toString());
      expect(data.toString()).not.toEqual('1997-12-01');
      done();
    }
    const client = net.connect(3000);
    client.on('data', callbackFunction);
  });
});