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

let callback = (arg) => {
    console.log(arg);
}

const server = net.createServer((socket) => {
    socket.end(now() + '\n');
})

server.listen(process.argv[2]);