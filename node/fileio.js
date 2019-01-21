var fs = require('fs');

buffer = fs.readFileSync(process.argv[2]).toString();
let buff_array = buffer.split('\n');
console.log(buff_array.length-1);

module.exports = (file_name) => {
    buffer = fs.readFileSync(file_name).toString();
    return buffer.split('\n').length - 1;
}

