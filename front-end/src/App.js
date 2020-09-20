import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/Cadastro" component={Cadastro}/>
      </Switch>
    </Router>
  );
}

export default App;
