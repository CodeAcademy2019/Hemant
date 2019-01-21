var fs = require('fs');
var res;

let readfile = (callback) => {
    fs.readFile(process.argv[2], function doneReading(err, buffer) {
        res = buffer.toString().split('\n').length - 1;;
        callback();
    })
};

readfile(() => console.log(res));

let getData = (fileName) => {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, (err, data) => {
            err ? reject(err) : resolve(data.toString().split('\n').length-1);
        });
    });
}
module.exports = getData;
//console.log(fun('./file_test.txt'))

