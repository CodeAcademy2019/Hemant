var fs = require('fs');
const mymodule = require('./modular_module');

let promise = mymodule(process.argv[2], process.argv[3])