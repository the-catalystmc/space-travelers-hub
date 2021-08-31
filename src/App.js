import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { getMissionsThunk } from "./redux/missions/missions";
import NavBar from "./components/NavBar";
import Missions from "./components/Missions";
import Rockets from "./components/Rockets";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsThunk());
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <div>prof</div>
        </Route>
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Redirect from="/" to="rockets" />
      </Switch>
    </Router>
  );
}

export default App;
