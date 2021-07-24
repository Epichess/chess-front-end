import React from 'react';
import './App.css';
import Board from "./components/board.component";
import BoardProvider from "./context/providers/board_provider/board.provider";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPage from "./pages/landing.page";
import TestPage from "./pages/test.page";
import Provider from "./context/providers/main.provider";


function App() {
  return (
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route path = "/game">
            </Route>
            <Route path = "/test">
              <TestPage/>
            </Route>
            <Route path = "/">
              <LandingPage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
