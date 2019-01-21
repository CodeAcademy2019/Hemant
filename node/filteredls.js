var fs = require('fs');

let filterByExtension = (list) => {
    return list.filter((str) => str.split('.')[1] == process.argv[3]);
}

let getData = (fileName) => {
    return new Promise(function (resolve, reject) {
        fs.readdir(fileName, (err, list) => {
            err ? reject(err) : resolve(filterByExtension(list));
        });
    });
}

getData(process.argv[2]).then((list) => {
    list.forEach(element => {
        console.log(element);
    });
})

module.exports = getData;