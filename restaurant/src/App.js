import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Next_Page from "./Next_Page";
import First_Page from "./First_Page";
import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Login from "./Login";
import { Card } from "react-bootstrap";
import Dynamic_Card from "./component/Dynamic_Card";

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
        
        <Route path="/" component={Dynamic_Card}>
        </Route>
        
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
