import React from 'react';
import styled from "styled-components";
import {Grid, Hidden} from "@material-ui/core";
import anarchy_logo from '../assets/anarchy_logo.png'

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
  return(
      <Background>
        <Grid container>
          <Grid item xs={12} md={4}>
            <div>
              aaa
            </div>
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