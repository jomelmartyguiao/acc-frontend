import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Central } from '../components/Region/Central';
import { Navigation } from '../components/Shared/Navigation';

class CentralContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation from='Central' region={this.props.id} />
        <Central from='Central' region={this.props.id} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, routeParams) => {
	return {
		id: routeParams.match.params.id,
		 };
};

export default withRouter(connect( mapStateToProps, null )(CentralContainer));
