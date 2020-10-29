import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home";
import MyEvents from "./pages/MyEvents";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path="/myevents" exact component={MyEvents} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/profile/edit" exact component={EditProfile} />
        <Route path="/event" exact component={EventPage} />
      </Switch>
    </Router>
  );
}

export default App;
