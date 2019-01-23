import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

let PhotoArea = (props) => {
  return (
    <section className="row bg-success">
      <div id="photo-area" className="col-12 position-relative border-bottom border-dark">
        <div className="row">
          <div className="position-absolute offset-1" id="profile-photo">
            <img src="./images/ls-icon-1.png"
              className="img-thumbnail rounded position-relative border border-dark"
              alt="User" />
          </div>
          <img src="./images/Language Solutions Letter Head.png"
            className="img-fluid mx-auto" id="cover-photo" alt="Letter Head" />
        </div>
      </div>
    </section>
  );
};


const mapStateToProps = (state, ownProps) => ({
  "thisUser": state.thisUser
});
const mapDispatchToProps = (dispatch, ownProps) => ({ "dispatch": dispatch });

export default withNamespaces("src")(
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PhotoArea))
);