import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sign_In from "./Sign_In";
import Home_Page from "./Home_Page";
import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import { Card } from "react-bootstrap";
import Dynamic_Card from "./component/Dynamic_Card";

function App() {
  
  return (
    <Router>
    <div className="App">
      
      <Switch>
      
      <Route path="/Home_Page">
        <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
        </div>
        </div>
        <Home_Page />
        
        <Route path="/Home_Page" component={Dynamic_Card}>
        </Route>
        
        </Route>
        <Route path="/">
        <Sign_In /> 
       </Route> 

        <Route exact path="/login">
        <Home_Page />
       </Route>
       </Switch>
       </div>
      </Router>  
    
  );
}


export default App;
