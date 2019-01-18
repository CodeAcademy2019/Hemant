var http = require('q-io/http');

let prom = http.read("http://localhost:1337").then((json) => console.log(JSON.parse(json)))
    .then(null, console.error)
    .done()

module.exports = prom;