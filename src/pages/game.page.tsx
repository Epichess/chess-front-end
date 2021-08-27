import React from 'react';
import Board from "../components/board.component";
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import BoardProvider from "../context/providers/board_provider/board.provider";
import {Grid, FormControl, InputLabel, MenuItem, Select, FormHelperText} from "@material-ui/core";
import {createGame} from "../api/board.api";
import {player} from "../audio/audio";
import banner from "../assets/anarchybanner.jpg";
import anarchy_logo from "../assets/logo.png";
import logo_anarchychess from "../assets/logo_anarchychess.png";
import bg from "../assets/main_lesslesshardcore.gif";
import styled from "styled-components";
import InputBase from '@material-ui/core/InputBase';



const options = [
    '5 min', '10 min', '30 min'
];
const defaultOption = options[0];

const Logo = styled.img`
  width: 20vh;
  position: absolute;
  bottom: 0px;
  left: 11vw;
`

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

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top 20px;
`
const Rectangle = styled.div`
  background-color: white;
  mix-blend-mode: normal;
  opacity: 0.8;
  box-shadow: 5px 5px 5px grey;
  width: 15vw;
  height: 8vw;
  display: flex;
  flex-direction: row;
  margin-left: 4vw;
`

const TextRectangle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: bold;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`

const TimeText = styled.div`
  font-size: 1vw;
  box-sizing: border-box;
  line-height: 1vw;
  color: #1E2439;
  background-color: #EBEBEB;
  border: 1px solid #E2DCDC;
  box-sizing: border-box;
  border-radius: 3px;
  height: 2.5vw;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer; 
    font-size: 1.2vw;
  }
`

const PlayText = styled.div`
  box-sizing: border-box;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1vw;
  line-height: 1vw;
  color: #FFFFFF;
  background-color: #1E2439;
  border: 1px solid #A9A5A5;
  border-radius: 3px;
  
  height: 3vw;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer; 
    font-size: 1.2vw;
  }
`

const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        input: {
            boxSizing: 'border-box',
            borderRadius: '3px',
            backgroundColor: '#EBEBEB',
            border: '1px solid #E2DCDC',
            height: '2.8vw',
            width: '8.2vw',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '1.2vw',
            color: '#1E2439',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'IBM Plex Sans',
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    }),
);


const GamePage = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('5');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

  return (
      <BoardProvider >
      <div style={{
          backgroundColor: '#E9E3E3',
          width: '100vw',
          height: '1000vh',
          display: 'flex'
      }}>
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
          </BottomBanner>
          <Main>
          <Board/>

          <Rectangle>
              <TextRectangle>
                  <FormControl className={classes.margin}>
                      <InputLabel id="demo-customized-select-label">Duration</InputLabel>
                      <Select
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={age}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                      >
                          <MenuItem value={5}>5 min</MenuItem>
                          <MenuItem value={10}>10 min</MenuItem>
                          <MenuItem value={30}>30 min</MenuItem>
                      </Select>
                  </FormControl>
                  <PlayText>PLAY</PlayText>
              </TextRectangle>
          </Rectangle>
          </Main>


      </Background>
      </div>
    </BoardProvider>
  );
};

export default GamePage;
