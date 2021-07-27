import React from 'react';
import Board from "../components/board.component";
import BoardProvider from "../context/providers/board_provider/board.provider";
import {Grid} from "@material-ui/core";
import {createGame} from "../api/board.api";
import {player} from "../audio/audio";

const GamePage = () => {
    const handlePlayBtnClick = () => {
        console.log("Test button");
        player.playButton();
    }

  return (
      <div>
      <button onClick={handlePlayBtnClick}>Play now</button>
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
      </div>
  );
};

export default GamePage;
