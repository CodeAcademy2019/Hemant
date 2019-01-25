const net = require('net')

const addZero = (i) => {
    return (i < 10 ? '0' : '') + i
}

let now = () => {
    const date = new Date();
    return date.getFullYear() + '-' +
        addZero(date.getMonth() + 1) + '-' +
        addZero(date.getDate()) + ' ' +
        addZero(date.getHours()) + ':' +
        addZero(date.getMinutes());
}

const server = net.createServer((socket) => {
    socket.end(now());
})

server.listen(3000);

module.exports = {now};