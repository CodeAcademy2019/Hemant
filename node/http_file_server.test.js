const getClient = require('./http_file_server');

describe('getFile()', () => {
    it('should send file contents at http URL', (done) => {
        function callbackFunction(data) {
            expect(data).toEqual('qwerty');
            done();
        }
        process.argv = ['node', 'http_file_server.js', '7001', './testFile.txt'];
        getClient(callbackFunction);
    });
    xit('should not send anything other than file contents at http URL', (done) => {
        function callbackF(data) {
            expect(data).not.toEqual('qwerty');
            done();
        }
        process.argv = ['node', '7-http-client.js', 'http://localhost:7000'];
        getClient(callbackF);
    });
});