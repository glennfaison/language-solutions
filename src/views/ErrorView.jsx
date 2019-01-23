import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './ErrorView.css';


let ErrorView = (props) => {
  return (
    <div className="container-fluid text-center">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Faresafe</h1>
      </header>
      <p className="App-intro">
        Get back to our <code><Link to={this.props.routes.welcome}>home page</Link></code>.
      </p>
      <h1>Oops! We've encountered a problem.</h1>
      <h3>Please, try again</h3>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { "routes": state.routes };
};


export default connect(
  mapStateToProps,
  null
)(withRouter(ErrorView));