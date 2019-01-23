import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import InputContainer from '../../InputContainer';
import { Routes } from '../../../constants';
import { logInWithEmailAndPassword } from '../../../store/actions';

class LoginForm extends React.Component {
  render() {
    const { t, logInWithEmailAndPassword } = this.props;
    return (
      <form className="container-fluid px-0 py-3" onSubmit={e => e.preventDefault()}>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <span className="floating-label">{t('Email')}</span>
              <input type="email" className="form-control"
                onChange={e => this.setState({ email: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <span className="floating-label">{t('Password')}</span>
              <input type="password" className="form-control"
                onChange={e => this.setState({ password: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group d-flex">
          <div className="form-check form-check-inline mr-auto">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value="rememberMe" />
              <span>{t('Remember Me')}</span>
            </label>
          </div>
          <div className="form-text text-muted ml-auto">
            <label className="form-check-label small">{t('Forgot Your Password?')}</label>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary btn-block"
              onClick={() => logInWithEmailAndPassword(this.state)}>{t('Log In')}</button>
          </div>
        </div>
        <div className="form-group text-center">
          <Link to={Routes.register}>{t('Register')}</Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  thisUser: state.thisUser
});

export default withNamespaces('src')(
  connect(mapStateToProps, { logInWithEmailAndPassword })(LoginForm)
);