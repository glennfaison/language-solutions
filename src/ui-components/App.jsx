import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import QuoteCreationPage from '../ui-components/pages/create-quote-page/create-quote-page';
import QuotePrintPreviewPage from '../ui-components/pages/print-quote-page/print-quote-page';
import ErrorPage from '../ui-components/pages/error-page/error-page';
import LoginPage from './pages/login/login';
import SignUpPage from './pages/signup/signup';
import UserProfilePage from './pages/user-profile/user-profile';

class App extends React.Component {
  render() {
    return (
      <Router style={{display: 'none !important'}}>
        <div className="hidden">
          <Route exact={true} path="/" component={QuoteCreationPage}/>
          <Route exact={true} path="/login" component={LoginPage}/>
          <Route exact={true} path="/signup" component={SignUpPage}/>
          <Route exact={true} path="/profile" component={UserProfilePage}/>
          <Route exact={true} path="/create-quote" component={QuoteCreationPage}/>
          <Route exact={true} path="/print-preview" component={QuotePrintPreviewPage}/>
          <Route path="/error" component={ErrorPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
