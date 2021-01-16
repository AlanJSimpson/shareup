import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home';
import MyEvents from './pages/MyEvents';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import EventPage from './pages/EventPage';
import ContextProvider from './context/ContextProvider';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
        <ContextProvider>
          <ProtectedRoute path="/home" exact component={Home} />
          <ProtectedRoute path="/myevents" exact component={MyEvents} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/user/profile/edit" exact component={EditProfile} />
          <ProtectedRoute path="/event" exact component={EventPage} />
        </ContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
