import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Next_Page from "./Next_Page";
import First_Page from "./First_Page";
import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Login from "./Login";
import { Card } from "react-bootstrap";
import MoreDeets from "./component/MoreDeets";

function App() {
  
  return (
    
    <div className="App">
      <Router>
      <Switch>
      <Route path="/">
        <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
        </div>
        </div>
        <First_Page />
        <Route path="/" component={MoreDeets}>
        </Route>
        </Route>
  
        <Route path="/Next_Page">
        <Next_Page /> 
        </Route>

        <Route exact path="/login">
        <Login />
       </Route>
       </Switch>
      </Router>  
    </div>
  );
}


export default App;
