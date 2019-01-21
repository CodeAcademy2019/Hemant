
let filterByExtension = (list,ext) => {
    return list.filter((str) => str.split('.')[1] == ext);
}

let asyncFilterFilesByExtension = (dirName, ext, callback) => { 
    let getData = (fileName,ext) => {
        return new Promise(function (resolve, reject) {
            fs.readdir(fileName, (err, list) => {
                err ? callback(err) : resolve(null, filterByExtension(list,ext));
            });
        });
    }
}

module.exports = asyncFilterFilesByExtension;