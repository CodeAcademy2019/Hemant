// let userArray = process.argv.slice(2);
// let [a, username, email, , ,d] = userArray;
// console.log(`{ username: '${username}', email: '${email}' }`); // {username: "jdoe", email: "john@doe.com"}

module.exports = function check(userArray) {
    let [a, username, email, , ,d] = userArray;
    return (`{ username: '${username}', email: '${email}' }`);
}