import React from 'react';
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>

          <Link to="/login">Submit</Link>

        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
