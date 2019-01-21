var fs = require('fs');
var res;

let readfile = (callback) => {
    fs.readFile(process.argv[2], function doneReading(err, buffer) {
        res = buffer.toString().split('\n').length - 1;;
        callback();
    })
  };
  
readfile(() => console.log(res));

module.exports = (file_name) => {
    let readfile = (callback) => {
        fs.readFile(process.argv[2], function doneReading(err, buffer) {
            res = buffer.toString().split('\n').length - 1;;
            callback();
        })
      };
      
    readfile(() => res);
    return res;
};