const bl = require('bl');
const http = require('http');

// http.get(process.argv[2], (response) => {
//     response.pipe(bl((err, data)  => {
//         console.log(data.toString().length);
//         console.log(data.toString());
//     }))
// });

const callback = (res) => {
    console.log(res.length);
    console.log(res);
}

const wrapper = (callback) => {
    http.get(process.argv[2], (request) => {
        request.setEncoding('utf8');
        var result = '';
        request.on('data', data => {
            result += data;
        });
        request.on('end', () => {
            callback(result);
        });    
    });
};

module.exports = wrapper;
