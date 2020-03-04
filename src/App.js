import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Auth/Login';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login/" exact component={Login} />
    </Switch>
  );
}

export default App;
