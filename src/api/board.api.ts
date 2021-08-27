import io from 'socket.io-client';

const socket = io('http://localhost:8000');

console.log('board api')

export function pong() {
    socket.emit("pong", { text: 'Hello World' });
    console.log('socket emit pong');
}

export function createGame() {
    socket.emit('create_game')
    console.log('socket emit create_game');
}

export function joinGame(uuid = null) {
    socket.emit('join_game', uuid == null ? {} : { 'uuid': uuid })
    console.log('socket emit join_game');
}

export function newGame() {
    socket.emit('new_game');
}


socket.on('pong', function (msg) {
    console.log(msg);
})

socket.on('create_game', function (msg) {
    console.log("creating game")
    console.log('UUID: ' + JSON.parse(msg['data'])[0]['fields']['uuid'])
})

socket.on('join_game', function (msg) {
    console.log('joining game')
    console.log('UUID: ' + JSON.parse(msg['data'])[0]['fields']['uuid'])
})

socket.on('new_game', function (msg) {
    console.log('new_game')
    console.log('UUID: ' + JSON.parse(msg['data'])[0]['fields']['uuid'])
})

socket.on('make_move', function (msg) {
    console.log(msg)
})