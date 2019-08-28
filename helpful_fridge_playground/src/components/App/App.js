import React from 'react';
import './App.scss';
import FridgeBox from "../FridgeBox/FridgeBox";
import Navigation from "../Navigation/Navigation";
import LandingPage from "../LandingPage/LandingPage";
import AboutMe from "../About/AboutMe";
import {HashRouter,Switch,Route} from "react-router-dom";

const NotFound=()=> <h2>Houston, We Have a Problem 404</h2>;


function App() {
  return (
      <HashRouter>
        <Navigation/>
        <Switch>
        <Route exact path={"/"} component={LandingPage}/>
        <Route path={"/about"} component={AboutMe}/>
        <Route path={"/fridge"} component={FridgeBox}/>
        <Route component={NotFound}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
