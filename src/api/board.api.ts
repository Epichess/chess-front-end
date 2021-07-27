import io from 'socket.io-client';
const socket = io('http://localhost:8000');

console.log('board api') 

export function pong(){
    socket.emit("pong", {text: 'Hello World'});
    console.log('socket emit pong');
}

export function createGame(){
    socket.emit('create_game')
    console.log('socket emit create_game');
}

export function joinGame(){
    socket.emit('join_game')
    console.log('socket emit join_game');
}


socket.on('pong', function () {
    console.log('Pong')
})

socket.on('creating', function () {
    console.log('creating')
})

socket.on('joining', function () {
    console.log('joining')
})