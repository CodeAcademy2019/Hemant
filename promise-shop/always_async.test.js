// const st = require('./always_async');

// test('test if fulfill is called', () => {
//     return expect(st[0]()).resolves.toBe('PROMISE VALUE');
// });

// test('test if reject is called', () => {
//     return expect(st[0]()).rejects.toThrow('REJECTED!');
// });

let outputData = "";
storeLog = inputs => (outputData += inputs);
test("console log Hello World", async () => {
  console["log"] = jest.fn(storeLog);
  await require('./always_async');
  return expect(outputData).toEqual("MAIN PROGRAMPROMISE VALUE");
});
