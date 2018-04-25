import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import QuoteCreationPage from '../ui-components/pages/QuoteCreationPage/QuoteCreationPage';
import QuotePrintPreviewPage from '../ui-components/pages/QuotePrintPreviewPage/QuotePrintPreviewPage';
import ErrorPage from '../ui-components/pages/ErrorPage/ErrorPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPagePage from './pages/SignupPage/SignupPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import User from '../entities/User';
import RedirectionPage from './pages/RedirectionPage/RedirectionPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      registeredUsers: {
        admin: new User("admin", "admin", "admin"),
      }
    };
    this.SignupPage = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.redirectTo = this.redirectTo.bind(this);
  }
  signup(newUser) {
    let tempRegisteredUsers = this.state.registeredUsers;
    tempRegisteredUsers[newUser.email] = newUser;
    this.setState({registeredUsers: tempRegisteredUsers});
  }
  login(email, password) {
    let user = this.state.registeredUsers[email];
    if(!!user && user.password === password) {
      this.setState({currentUser: user});
    }
  }
  logout() {
    this.setState({currentUser: null});
  }
  redirectTo(pathname, history) {
    history.replace(pathname);
  }
  render() {
    if(!this.state.currentUser) {
      return(
        <Router style={{display: 'none !important'}} >
          <Switch >
            <SignupPagePage exact={true} path="/signup" onSignup={this.signup} />
            <LoginPage exact={true} path="/login" onLogin={this.login} />
            <RedirectionPage exact={false} path="/" redirectPath="/login" />
          </Switch>
        </Router>
      );
    }
    else {
      return (
        <Router style={{display: 'none !important'}} >
          <Switch >
            <RedirectionPage exact={true} path="/" redirectPath="/profile" currentUser={this.state.currentUser} />
            <UserProfilePage exact={true} path="/profile" onLogout={this.logout} currentUser={this.state.currentUser} />
            <QuoteCreationPage exact={true} path="/create-quote" onLogout={this.logout} currentUser={this.state.currentUser} />
            <QuotePrintPreviewPage exact={true} path="/print-preview" onLogout={this.logout} currentUser={this.state.currentUser} />
            <ErrorPage exact={true} path="/error" onLogout={this.logout} currentUser={this.state.currentUser} />
            <RedirectionPage exact={false} path="/" redirectPath="/error" currentUser={this.state.currentUser} />
          </Switch>
        </Router>
      );
    }
  }
}

export default App;
