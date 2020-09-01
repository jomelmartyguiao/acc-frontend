import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './components/Auth/Login';
import BodyComponentConsolidator from './components/Home/BodyComponentConsolidator';
import DashboardContainer from './containers/DashboardContainer';
import './App.css';

function App() {
  return (<>
    <Switch>
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute path="/login/" exact component={Login} />
			<PublicRoute path="/dashboard/" exact component={DashboardContainer} />
    </Switch>
  </>);
}
export default App;

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // localStorage.getItem('access_token') ? (
        <BodyComponentConsolidator>
          <Component {...props} />
        </BodyComponentConsolidator>
      // ) : 
      // <Component {...props} />
    }
  />
);
