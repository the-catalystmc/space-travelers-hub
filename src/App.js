import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
// import {
//   BrowserRouter as Router, Switch, Route, Link,
// } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/missions">
          <div>miss</div>
        </Route>
        <Route path="/profile">
          <div>prof</div>
        </Route>
        <Route path="/rockets">
          <div>rock</div>
        </Route>
        <Redirect from="/" to="rockets" />
      </Switch>
    </Router>
  );
}

export default App;
