import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './components/Auth/Login';
import BodyComponentConsolidator from './components/Home/BodyComponentConsolidator';
import DashboardContainer from './containers/DashboardContainer';
import AnnouncementsContainer from './containers/AnnouncementsContainer';
import PageContainer from './containers/PageContainer';
import PostsContainer from './containers/PostsContainer';
import ReadingsContainer from './containers/ReadingsContainer';

import NewPage from './components/Page/NewPage';
import NewPost from './components/Posts/NewPost';
import NewReading from './components/Readings/NewReading';
import './App.css';

function App() {
  return (<>
    <Switch>
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute path="/login/" exact component={Login} />
			<PrivateRoute path="/dashboard/" exact component={DashboardContainer} />
      <PrivateRoute path="/announcements/" exact component={AnnouncementsContainer} />
      <PrivateRoute path="/page/" exact component={PageContainer} />
      <PrivateRoute path="/page/new-page" exact component={NewPage} />
      <PrivateRoute path="/posts" exact component={PostsContainer} />
      <PrivateRoute path="/posts/new-post" exact component={NewPost} />
      <PrivateRoute path="/readings" exact component={ReadingsContainer} />
      <PrivateRoute path="/readings/new-reading" exact component={NewReading} />
    </Switch>
  </>);
}
export default App;

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('access_token') ? (
        <BodyComponentConsolidator>
          <DashboardContainer />
        </BodyComponentConsolidator>
      ) : 
      <Component {...props} />
    }
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('access_token') ? (
        <BodyComponentConsolidator>
          <Component {...props} />
        </BodyComponentConsolidator>
      ) : 
      // <BodyComponentConsolidator>
        <h1>Cannot Access Page</h1>
      // </BodyComponentConsolidator>
    }
  />
);
