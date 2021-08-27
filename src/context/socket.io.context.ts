import {createContext} from "react";
import socketIOClient, {Socket} from "socket.io-client";
import {Coord} from "../types/coord.type";

export interface MySocket {
  socket: Socket;
  newGame: () => void;
  pong: () => void;
  movePiece: (start: Coord, end: Coord, promotionPieceType: number, uuid: string) => void;
}

const defaultValues = {
  socket: socketIOClient("http://localhost:8000"),
  newGame: () => {},
  pong: () => {},
  movePiece: () => {}
}

export const SocketContext = createContext<MySocket>(defaultValues)