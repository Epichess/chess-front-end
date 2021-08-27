import React from 'react';
import styled from "styled-components";
import {Grid, Hidden} from "@material-ui/core";
import anarchy_logo from '../assets/anarchy_logo.png'
import { useHistory } from 'react-router-dom'
// import { createGame, joinGame } from '../api/board.api';
import { player } from "../audio/audio";

const Background = styled.div`
  background-color: #EC1722;
  height: 100vh;
`

const Logo = styled.img`
  width: 90vh;
  position: absolute;
  right: 10vh;
  top: 5vh;
`


export default function LandingPage(){
  const history = useHistory();
  player.playIntro();

  // const handlePlayBtnClick = () => {
  //   console.log("Play Now")
  //   player.playButton();
  //   player.pauseIntro();
  //   createGame()
  //   history.push('/Game')
  // }
  //
  // const handleJoinBtnClick = () => {
  //   console.log("Join Now")
  //   player.playButton();
  //   joinGame()
  //   history.push('/Game')
  // }

  return(
      <Background>
        <Grid container>
          <Grid item xs={12} md={4}>
            <button onClick={() => {}}>Play now</button>
            <br/>
            <button onClick={() => {}}>Join now</button>
          </Grid>
          <Hidden only={"xs"}>
            <Grid item md={8}>
              <Logo src={anarchy_logo}/>
            </Grid>
          </Hidden>
        </Grid>
      </Background>
  )
}