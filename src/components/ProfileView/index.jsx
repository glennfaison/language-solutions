import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import PhotoArea from './PhotoArea';
import ProfileInfo from './ProfileInfo';

import ActionTypes from '../../constants';
import Quotes from '../../HttpAgents';

class ProfileView extends React.Component {
  componentDidMount() { this.loadQuotes() }
  loadQuotes() {
    this.props.dispatch({
      type: ActionTypes.loadQuotes,
      payload: Quotes.byAuthor(this.props.thisUser.id)
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <PhotoArea />
        <ProfileInfo />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  "thisUser": state.thisUser
});
const mapDispatchToProps = (dispatch, ownProps) => ({ "dispatch": dispatch });

export default withNamespaces("src")(
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProfileView))
);