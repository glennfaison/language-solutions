import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import QuoteCreationPage from '../components/pages/QuoteCreationPage/QuoteCreationPage';
import QuotePrintPreviewPage from '../components/pages/QuotePrintPreviewPage/QuotePrintPreviewPage';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPagePage from './pages/SignupPage/SignupPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import User from '../utilities/User';
import RedirectionPage from './pages/RedirectionPage/RedirectionPage';
import Settings from '../utilities/Settings';
import SignalManager from '../utilities/SignalManager';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      registeredUsers: {
        admin: new User("admin", "admin", "admin"),
      }
    };
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.printThis = this.printThis.bind(this);
    SignalManager.listenForSignal("printThis", this.printThis);
  }
  printThis(data) {console.log(this)}
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
  render() {
    if(!this.state.currentUser) {
      return(
        <Router style={{display: 'none !important'}} >
          <Switch >
            <SignupPagePage exact={true} path={Settings.baseRoutes.signup} onSignup={this.signup} />
            <LoginPage exact={true} path={Settings.baseRoutes.login} onLogin={this.login} />
            <RedirectionPage exact={false} path={Settings.baseRoutes.root} redirectPath={Settings.baseRoutes.login} />
          </Switch>
        </Router>
      );
    }
    else {
      return (
        <Router style={{display: 'none !important'}} >
          <Switch >
            <RedirectionPage exact={true} path={Settings.baseRoutes.root} redirectPath={Settings.baseRoutes.userProfile} currentUser={this.state.currentUser} />
            <UserProfilePage exact={true} path={Settings.baseRoutes.userProfile} onLogout={this.logout} currentUser={this.state.currentUser} />
            <QuoteCreationPage exact={true} path={Settings.baseRoutes.createQuote} onLogout={this.logout} currentUser={this.state.currentUser} />
            <QuotePrintPreviewPage exact={true} path={Settings.baseRoutes.printPreview} onLogout={this.logout} currentUser={this.state.currentUser} />
            <ErrorPage exact={true} path={Settings.baseRoutes.error} onLogout={this.logout} currentUser={this.state.currentUser} />
            <RedirectionPage exact={false} path={Settings.baseRoutes.root} redirectPath={Settings.baseRoutes.error} currentUser={this.state.currentUser} />
          </Switch>
        </Router>
      );
    }
  }
}

export default App;
