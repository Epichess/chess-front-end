import React from 'react';
import Board from "../components/board.component";
import BoardProvider from "../context/providers/board_provider/board.provider";
import {Grid} from "@material-ui/core";

const GamePage = () => {
  return (
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
  );
};

export default GamePage;
