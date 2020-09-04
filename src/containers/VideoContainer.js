import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Navigation } from '../components/Shared/Navigation';
import { ReadMore } from '../components/Region/ReadMore';

class VideoContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation from='Region' region={this.props.id} />
        <ReadMore from='video' />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, routeParams) => {
	return {
		id: routeParams.match.params.id,
	};
};

export default withRouter(connect( mapStateToProps, null )(VideoContainer));
