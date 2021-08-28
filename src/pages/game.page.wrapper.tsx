import React, {ComponentProps} from 'react';
import BoardProvider from "../context/providers/board_provider/board.provider";
import SocketProvider from "../context/providers/socket_provider/socket.io.provider";
import GamePage from "./game.page";

export default function GamePageWrapper(){
  return(
      <SocketProvider>
        <BoardProvider>
          <GamePage/>
        </BoardProvider>
      </SocketProvider>
  )
}