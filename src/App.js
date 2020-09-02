import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './components/Auth/Login';
import BodyComponentConsolidator from './components/Home/BodyComponentConsolidator';
import DashboardContainer from './containers/DashboardContainer';
import HomeContainer from './containers/HomeContainer';
import RegionContainer from './containers/RegionContainer';
import UploaderContainer from './containers/UploaderContainer';
import { Footer } from './components/Shared/Footer';
import './App.css';

function App() {
  return (<>
    <Switch>
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute path="/login/" exact component={Login} />
			<PublicRoute path="/dashboard/" exact component={DashboardContainer} />
      <PublicRoute path="/uploader/" exact component={UploaderContainer} />
      <HomeRoute path="/home/" exact component={HomeContainer} />
      <HomeRoute path="/region/:id" exact component={RegionContainer} />
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

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => <>
      <Component {...props} />
      <Footer /></>
    }
  />
);

