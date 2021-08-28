import React from 'react';
import Board from "../components/board.component";
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import BoardProvider from "../context/providers/board_provider/board.provider";
import { Grid, FormControl, InputLabel, MenuItem, Select, FormHelperText } from "@material-ui/core";
import SocketProvider from "../context/providers/socket_provider/socket.io.provider";
import { player } from "../audio/audio";
import banner from "../assets/anarchybanner.jpg";
import anarchy_logo from "../assets/logo.png";
import logo_anarchychess from "../assets/logo_anarchychess.png";
import bg from "../assets/main_lesslesshardcore.gif";
import styled from "styled-components";
import InputBase from '@material-ui/core/InputBase';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';

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
const LeftSide = styled.div`
    display: flex;
  flex-direction: column;
  align-content: space-between;
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

const ReverseButtonDiv = styled.div`
  opacity: 0.8;
  width: 18vw;
  display: flex;
  flex-direction: row;
  margin-left: 7vw;
  margin-top: 18vw; 
`

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
`

const Rectangle = styled.div`
  opacity: 0.8;
  width: 15vw;
  display: flex;
  flex-direction: row;
  margin-left: 4vw;
  
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
            fontSize: '0.8vw',
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
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),

            boxShadow: '5px 5px 5px grey',
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),


        },
        resetContainer: {
            padding: theme.spacing(3),
        },
    }),
);

function getSteps() {
    return ['Game duration', 'Play against...', 'Anarchy Chess Rules'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return (
                <FormControl >
                <InputLabel id="demo-customized-select-label">Duration</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    input={<BootstrapInput />}
                >
                    <MenuItem value={5}>5 min</MenuItem>
                    <MenuItem value={10}>10 min</MenuItem>
                    <MenuItem value={30}>30 min</MenuItem>
                </Select>
            </FormControl>
            );
        case 1:
            return (
                <FormControl >
                    <InputLabel id="demo-customized-select-label">Duration</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        input={<BootstrapInput />}
                    >
                        <MenuItem value={5}>AI</MenuItem>
                        <MenuItem value={10}>Friend</MenuItem>
                        <MenuItem value={30}>User</MenuItem>
                    </Select>
                </FormControl>
            );
        case 2:
            return `You are about to play Anarchy Chess. This is no random game. 
            En-passant are mandatory. 
            If you don't know what it is, you should not be here.`;
        default:
            return 'Unknown step';
    }
}

const GamePage = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('5');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

  return (
    <SocketProvider>
      <BoardProvider>
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
            <img src={banner} width='100%' alt='banner' />
            <BottomBanner>
              <AnarchyLogo src={anarchy_logo} />
              <TextDiv>
                <MainText>Anarchy Chess</MainText>
                <SubText>play/AnarchyChess</SubText>
              </TextDiv>
            </BottomBanner>
            <Main>
              <Board />

                <LeftSide>
          <Rectangle>
              <div className={classes.root}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                      {steps.map((label, index) => (
                          <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                              <StepContent>
                                  <Typography>{getStepContent(index)}</Typography>
                                  <div className={classes.actionsContainer}>
                                      <div>
                                          <Button
                                              disabled={activeStep === 0}
                                              onClick={handleBack}
                                              className={classes.button}
                                          >
                                              Back
                                          </Button>
                                          <Button
                                              variant="contained"
                                              color="primary"
                                              onClick={handleNext}
                                              className={classes.button}
                                          >
                                              {activeStep === steps.length - 1 ? 'Play' : 'Next'}
                                          </Button>
                                      </div>
                                  </div>
                              </StepContent>
                          </Step>
                      ))}
                  </Stepper>
                  {activeStep === steps.length && (
                      <Paper square elevation={0} className={classes.resetContainer}>
                          <Typography>All set! Enjoy the game.</Typography>
                          <Button onClick={handleReset} className={classes.button}>
                              Reset
                          </Button>
                      </Paper>
                  )}
              </div>

          </Rectangle>
                    <ReverseButtonDiv>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<FlipCameraAndroidIcon color="primary"  />}
                    >
                        Reverse Board
                    </Button>
                    </ReverseButtonDiv>
                </LeftSide>
          </Main>
      </Background>
      </div>
    </BoardProvider>
    </SocketProvider>
  );
};

export default GamePage;
