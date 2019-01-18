function logger(namespace) {
    return function (...args) {
        console.log.apply(null, [namespace].concat(args));
    }
}

module.exports = logger;