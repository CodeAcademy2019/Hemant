const testFunc = require('./http_collect');

describe('wrapper()', () => {
    it ('should return "Hello" ]', (done) => {
        function callbackFunction(data){
            expect(data).toEqual('Hello');
            done();
        }
        process.argv = ['node', 'http_client.js','http://localhost:3000'];
        testFunc(callbackFunction);
    });    
    it ('should not return empty string ', (done) => {
        function callbackFunction(data){
            expect(data).not.toEqual('');
            done();
        }
        process.argv = ['node', 'http_client.js','http://localhost:3000'];
        testFunc(callbackFunction);
    });    
    
});