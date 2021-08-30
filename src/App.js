import React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import NavBar from './components/NavBar'
// import {
//   BrowserRouter as Router, Switch, Route, Link,
// } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <NavBar />
    </div>
    </Router>
  );
}

export default App;
