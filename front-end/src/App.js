import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home";
import MyEvents from "./pages/MyEvents";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import EventPage from "./pages/EventPage";
import ContextProvider from './context/ContextProvider'

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
        <ContextProvider>
          <Route path="/home" exact component={Home} />
          <Route path="/myevents" exact component={MyEvents} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/user/profile/edit" exact component={EditProfile} />
          <Route path="/event" exact component={EventPage} />
        </ContextProvider>
      </Switch>
    </Router>
  );

}

export default App;
