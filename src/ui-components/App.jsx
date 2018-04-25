import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import QuoteCreationPage from '../ui-components/pages/create-quote-page/create-quote-page';
import QuotePrintPreviewPage from '../ui-components/pages/print-quote-page/print-quote-page';
import ErrorPage from '../ui-components/pages/error-page/error-page';
import LoginPage from './pages/login/login';
import SignUpPage from './pages/signup/signup';
import UserProfilePage from './pages/user-profile/user-profile';
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
    this.signup = this.signup.bind(this);
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
            <SignUpPage exact={true} path="/signup" signupProp={this.signup} />
            <LoginPage exact={true} path="/login" loginProp={this.login} />
            <RedirectionPage exact={false} path="/" redirectPath="/login" />
          </Switch>
        </Router>
      );
    }
    else {
      return (
        <Router style={{display: 'none !important'}} >
          <Switch >
            <RedirectionPage exact={true} path="/" redirectPath="/profile" />
            <UserProfilePage exact={true} path="/profile" onLogout={this.logout} />
            <QuoteCreationPage exact={true} path="/create-quote" onLogout={this.logout} />
            <QuotePrintPreviewPage exact={true} path="/print-preview" onLogout={this.logout} />
            <ErrorPage exact={true} path="/error" onLogout={this.logout} />
            <RedirectionPage exact={false} path="/" redirectPath="/error" />
          </Switch>
        </Router>
      );
    }
  }
}

export default App;
