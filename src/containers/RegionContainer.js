import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { RegionBody } from '../components/Region/RegionComponents';
import { Navigation } from '../components/Shared/Navigation';

class RegionContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation from='region' region={this.props.id} />
        <RegionBody region={this.props.id} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, routeParams) => {
	return {
		id: routeParams.match.params.id,
		 };
};

export default withRouter(connect( mapStateToProps, null )(RegionContainer));
