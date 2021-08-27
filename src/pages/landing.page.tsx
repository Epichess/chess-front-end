import React from 'react';
import styled from "styled-components";
import {Grid, Hidden, TextField} from "@material-ui/core";
import anarchy_logo from '../assets/logo.png'
import bg from '../assets/main_lesslesshardcore.gif'
import banner from '../assets/anarchybanner.jpg'
import logo_anarchychess from '../assets/logo_anarchychess.png'
import { useHistory } from 'react-router-dom'
import { createGame, joinGame } from '../api/board.api';
import { player } from "../audio/audio";

const BottomBanner = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffff;
  height: 5vw;
  filter: drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25));
  position: relative;
  top: -4px;
`

const Background = styled.div`
  background-image: url("../assets/main_lesslesshardcore.gif");
  background-size: cover;
  background-color: #EBEBEB;
  height: 100%;
  width: 100%;  
`
const MainText = styled.div`
  font-weight: bold;
  font-size: 2vw;
  line-height: 3vw;
  color: #1C1C1C;
`

const SubText = styled.div`
  font-size: 1vw;
  line-height: 1vw;
  color: #7C7C7C;
`

const TextDiv = styled.div`
  position: absolute;
  top: 0.3vw;
  margin-left: 30vw;
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: bold;
`

const AnarchyLogo = styled.img`
  position: absolute;
  top: -50%;
  border-radius: 50%;
  height: 150%;
  margin-left: 20vw;
  border: 0.3vw solid #FFFFFF;
  box-sizing: border-box;
`

const Rectangle = styled.div`
  position: absolute;
  top: 240%;
  left: 35vw;
  background-color: #ED1B24;
  width: 30vw;
  height: 17vw;
  display: flex;
  flex-direction: row;
`

const TextRectangle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: bold;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const PlayText = styled.div`
  margin-top: -2vw;
  box-sizing: border-box;
  font-size: 2vw;
  line-height: 1vw;
  color: #FFFFFF;
  margin-bottom: 2vw;
  height: 4vw;
  width: 60%;
  border: 0.4vw solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer; 
    font-size: 2.2vw;
  }
  
`

const SignUpText = styled.div`
  font-size: 2vw;
  box-sizing: border-box;
  line-height: 1vw;
  color: #ED1B24;
  background-color: #FFFFFF;
  height: 3.5vw;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer; 
    font-size: 2.2vw;
    
  }
`

export default function LandingPage(){
  const history = useHistory();

  const handlePlayBtnClick = () => {
    console.log("Play Now")
    player.playButton();
    player.pauseIntro();
    createGame()
    history.push('/Game')
  }

  const handleJoinBtnClick = () => {
    console.log("Join Now")
    player.playButton();
    joinGame()
    history.push('/Game')
  }

  return(
      <Background>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap');
        </style>
        <img src={banner} width='100%' alt='banner'/>
        <BottomBanner>
          <AnarchyLogo src={anarchy_logo}/>
          <TextDiv>
            <MainText>Anarchy Chess</MainText>
            <SubText>play/AnarchyChess</SubText>
          </TextDiv>
            <Rectangle>
                <img src={logo_anarchychess} style={{height: '100%'}} alt='anarchychess_logo' />
                <TextRectangle>
                    <PlayText onClick={handlePlayBtnClick}>PLAY</PlayText>
                    <SignUpText>PATZ UP</SignUpText>
                </TextRectangle>
            </Rectangle>
        </BottomBanner>

        <img src={bg} style={{width: '100%', backgroundRepeat: "repeat-y"}} alt='background'/>
      </Background>
  )
}