import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

let LetterHead = (props) => {
  return (
    <div className="row">
      <div id="letterhead" className="col-12 position-relative border-bottom border-dark">
        <div className="row">
          <img src="./images/Language Solutions Letter Head.png"
            className="img-fluid mx-auto" id="cover-photo" alt="" />
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => ({
  thisUser: state.thisUser
});

export default withNamespaces('src/components/LetterHead')(
  connect(mapStateToProps, null)(LetterHead)
);
