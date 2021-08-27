import {SocketContext} from "../../socket.io.context";
import {ComponentProps, useState, useEffect} from "react";
import socketIOClient, {Socket} from "socket.io-client";
import {Coord} from "../../../types/coord.type";

export default function SocketProvider({children}: ComponentProps<any>){

  const mySocket = socketIOClient("http://localhost:8000");

  function pong(){
    mySocket.emit("pong", {text: 'Hello World'});
    console.log('socket emit pong');
  }

  function newGame(){
    mySocket.emit('new_game')
    console.log('socket emit create_game');
  }

  function movePiece(start: Coord, end: Coord, promotionPieceType: number, uuid: string){
    mySocket.emit('make_move', {
      uuid: uuid,
      start: {row: start.row,
               col: start.col},
      end: {row: end.row,
            col: end.col},
    })
  }

  return(
      <SocketContext.Provider value={{
        socket: mySocket,
        pong,
        newGame,
        movePiece
      }}>
        {children}
      </SocketContext.Provider>
  )
}
