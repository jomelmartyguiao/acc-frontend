import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Welcome, Misson, Card, Readings } from '../components/Main/HomeComponents';
import { Navigation } from '../components/Shared/Navigation';
class HomeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation from='home' />
        <Welcome />
        <Misson />
        <div className="body-wrapper">
          <Card />
          <Readings />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(connect( null, null )(HomeContainer));
