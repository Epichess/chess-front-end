import React from 'react';
import Board from "../components/board.component";
import BoardProvider from "../context/providers/board_provider/board.provider";

const GamePage = () => {
  return (
      <BoardProvider>
        <Board/>
     </BoardProvider>
  );
};

export default GamePage;
