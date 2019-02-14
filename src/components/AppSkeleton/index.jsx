import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import { connect } from 'react-redux';

import NavBar from '../NavBar';
import AppFooter from '../AppFooter';
import LoginView from '../LoginView';
import SignupView from '../SignupView';
import ProfileView from '../ProfileView';
import QuoteCreationView from '../QuoteCreationView';
import { Routes } from '../../constants';

import '../../assets/css/index.css';

class AppSkeleton extends React.Component {
  render() {
    const { thisUser } = this.props;
    return (
      <div className="container-fluid" id="page-container">
        <section className="row sticky-top">
          <NavBar />
        </section>

        <section className="row">
          <NotificationContainer />
        </section>

        <div className="container-fluid">
          <section className="row">
              {
                (thisUser.data === null || thisUser.data === undefined) &&
                <Switch>
                  <Route exact path={Routes.login} component={LoginView} />
                  <Route exact path={Routes.register} component={SignupView} />
                  <Route exact={false} path={Routes.root} component={LoginView} />
                </Switch>
              }
              {
                (thisUser.data !== null && thisUser.data !== undefined) &&
                <Switch>
                  <Route exact path={Routes.login} component={LoginView} />
                  <Route exact path={Routes.register} component={SignupView} />
                  <Route exact path={Routes.profile} component={ProfileView} />
                  <Route exact path={Routes.newQuote} component={QuoteCreationView} />
                  <Route exact={false} path={Routes.root} component={LoginView} />
                </Switch>
              }
          </section>
        </div>

        <section className="row">
          <AppFooter />
        </section>

      </div>
    );
  }
}

const mapStateToProps = ({ router, thisUser, thisUserProfile }) => ({
  router,
  thisUser,
  thisUserProfile
});

export default connect(mapStateToProps, null)(AppSkeleton);