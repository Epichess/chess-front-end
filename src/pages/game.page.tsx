import React from 'react';
import Board from "../components/board.component";
import BoardProvider from "../context/providers/board_provider/board.provider";
import SocketProvider from "../context/providers/socket_provider/socket.io.provider";
import {Grid} from "@material-ui/core";
import {player} from "../audio/audio";

const GamePage = () => {
    const handlePlayBtnClick = () => {
        console.log("Test button");
        player.playButton();
    }

  return (
      <div>
        <SocketProvider>
          <BoardProvider>
            <Grid container>
              <Grid item lg={2}>

              </Grid>
              <Grid item lg={8}>
                <Board/>
              </Grid>
              <Grid item lg={2}>

              </Grid>
            </Grid>
         </BoardProvider>
        </SocketProvider>
      </div>
  );
};

export default GamePage;
