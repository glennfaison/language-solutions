import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import { connect } from 'react-redux';

import NavBar from '../NavBar';
import AppFooter from '../AppFooter';
import LoginView from '../LoginView';
import SignupView from '../SignupView';
// import ProfileView from '../ProfileView';
// import QuoteCreationView from '../QuoteCreationView';
import { Routes } from '../../constants';

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
            <Switch>
              <Route exact path={Routes.login} component={LoginView} />
              <Route exact path={Routes.register} component={SignupView} />
              {
                (thisUser.data === null || thisUser.data === undefined) &&
                <Redirect to={Routes.login} />
              }
              {/*
                (thisUser.data !== null && thisUser.data !== undefined) &&
                <React.Fragment>
                  <ProfileView exact path={Routes.profile} />
                  <QuoteCreationView exact path={Routes.newQuote} />
                  <Redirect to={Routes.NotFound} />
                </React.Fragment>
              */}
            </Switch>
          </section>
        </div>

        <section className="row">
          <AppFooter />
        </section>

      </div>
    );
  }
}

const mapStateToProps = ({ router, thisUser }) => ({
  router,
  thisUser
});

const mapDispatchToProps = (dispatch) => ({ dispatch });



export default connect(mapStateToProps, mapDispatchToProps)(AppSkeleton);
