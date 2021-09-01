import React from 'react';
import {
  Route, HashRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Redirect from="/" to="/rockets" />
      </Switch>
    </Router>
  );
}

export default App;
