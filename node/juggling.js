const http = require('http');

const juggleAsync = (callback) => {
    const urlList = process.argv.slice(2);
    const array = [];
    urlList.forEach(() => {
        array.push(null);
    });
    urlList.forEach((url, index) => {
        http.get(url, (response) => {
            let body = '';
            response.setEncoding('utf-8');
            response.on('data', (data) => {
                body += data;
            });
            response.on('end', () => {
                array[index] = body;
                if (array.filter(val => val != null).length === urlList.length) {
                    array.forEach((val) => {
                        console.log(val);
                    });
                    callback(array);
                }
            });
        });
    });
};
juggleAsync();
module.exports = juggleAsync;