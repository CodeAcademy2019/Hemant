const test_obj = require('./filteredls');

test(`check current directory for json files`, () => {
    return expect(test_obj.getData('./','json')).resolves.toEqual(["package-lock.json", "package.json"]);
});

test(`check current directory for files with no extensions`, () => {
    return expect(test_obj.getData('./','')).resolves.toEqual([]);
});

test(`check filterByExtension function with .txt extension`, () => {
    expect(test_obj.filterByExtension(["hello.txt", "qwe.js"],'txt')).toEqual(["hello.txt"]);
});

test(`check filterByExtension function with no extension`, () => {
    expect(test_obj.filterByExtension(["hello.txt", "qwe"],'txt')).not.toEqual(["qwe"]);
});