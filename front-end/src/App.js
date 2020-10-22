import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Cadastro} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
