import React from 'react';
import Login from "./Components/Login";
import { FriendList } from "./Components/FriendList";
import PrivateRoute from "./Components/PrivateRoute";
import { AddFriend } from "./Components/AddFriend";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <NavLink to="/login">Login</NavLink>

        </ul>
        <ul>
          <NavLink to="/protected">Friends List</NavLink>
        </ul>
        <ul>
          <NavLink to="/addfriend">Add Friend</NavLink>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendList} />
          <PrivateRoute exact path="/addfriend" component={AddFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
