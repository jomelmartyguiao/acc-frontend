import React from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './components/Auth/Login';
import BodyComponentConsolidator from './components/Home/BodyComponentConsolidator';
import DashboardContainer from './containers/DashboardContainer';
import HomeContainer from './containers/HomeContainer';
import RegionContainer from './containers/RegionContainer';
import CentralContainer from './containers/CentralContainer';
import UploaderContainer from './containers/UploaderContainer';
import AnnouncementsContainer from './containers/AnnouncementsContainer';
import PageContainer from './containers/PageContainer';
import PostsContainer from './containers/PostsContainer';
import ReadingsContainer from './containers/ReadingsContainer';
import ReadMoreContainer from './containers/ReadMoreContainer';
import VideoContainer from './containers/VideoContainer';

import { Footer } from './components/Shared/Footer';
import NewPage from './components/Page/NewPage';
import NewPost from './components/Posts/NewPost';
import NewReading from './components/Readings/NewReading';

import Alert from 'react-s-alert';
import './App.css';

function App() {
  return (<>
    <Switch>
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute path="/login/" exact component={Login} />
      <HomeRoute path="/home/" exact component={HomeContainer} />
      <HomeRoute path="/region/:id" exact component={RegionContainer} />
      <HomeRoute path="/central/" exact component={CentralContainer} />
      <HomeRoute path="/read-more/" exact component={ReadMoreContainer} />
      <HomeRoute path="/read-more/video" exact component={VideoContainer} />
      <PrivateRoute path="/uploader/" exact component={UploaderContainer} />
			<PrivateRoute path="/dashboard/" exact component={DashboardContainer} />
      <PrivateRoute path="/announcements/" exact component={AnnouncementsContainer} />
      <PrivateRoute path="/page/" exact component={PageContainer} />
      <PrivateRoute path="/page/new-page" exact component={NewPage} />
      <PrivateRoute path="/posts" exact component={PostsContainer} />
      <PrivateRoute path="/posts/new-post" exact component={NewPost} />
      <PrivateRoute path="/readings" exact component={ReadingsContainer} />
      <PrivateRoute path="/readings/new-reading" exact component={NewReading} />
    </Switch>
    <Alert stack={true} timeout={4000} />
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

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => <>
      <Component {...props} />
      <Footer /></>
    }
  />
);

