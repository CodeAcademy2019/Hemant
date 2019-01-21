var fs = require('fs');

let filterByExtension = (list, ext) => {
    return list.filter((str) => str.split('.')[1] == ext);
}

let getData = (fileName, ext) => {
    return new Promise(function (resolve, reject) {
        fs.readdir(fileName, (err, list) => {
            err ? reject(err) : resolve(filterByExtension(list, ext));
        });
    });
}

// getData(process.argv[2], process.argv[3]).then((list) => {
//     list.forEach(element => {
//         console.log(element);
//     });
// })

module.exports = { getData, filterByExtension };