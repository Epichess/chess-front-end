import {createContext} from "react";
import {Socket} from "socket.io-client";

export interface MySocket {
  socket?: Socket;
}

const defaultValues = {
  socket: undefined
}

export const SocketContext = createContext<MySocket>(defaultValues)