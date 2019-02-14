import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import PhotoArea from './PhotoArea';
import ProfileInfo from './ProfileInfo';
import { loadQuotesByAuthor } from '../../store/actions';

class ProfileView extends React.Component {
  componentDidMount() { loadQuotesByAuthor(this.props.thisUser.id) }
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
  thisUser: state.thisUser
});

export default withNamespaces("src")(
  connect(mapStateToProps, { loadQuotesByAuthor })(ProfileView)
);
