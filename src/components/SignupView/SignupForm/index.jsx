import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';


import InputContainer from '../../InputContainer';
import { Routes } from '../../../constants';
import { signUpWithEmailAndPassword } from '../../../store/actions';


class SignupForm extends React.Component {
  render() {
    const { t, signUpWithEmailAndPassword } = this.props;
    return (
      <form className="container-fluid pt-3 px-0 py-3" onSubmit={e => e.preventDefault()}>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <label className="floating-label">{t('Your First Name')}</label>
              <input className="form-control"
                type="text"
                onChange={e => this.setState({ firstName: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <label htmlFor="lastNames" className="floating-label">{t('Last Names')}</label>
              <input type="text"
                className="form-control"
                onChange={e => this.setState({ lastNames: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <label className="floating-label">{t('Your Email')}</label>
              <input type="text"
                className="form-control"
                onChange={e => this.setState({ email: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <label className="floating-label">{t('Password')}</label>
              <input type="password" className="form-control" name="password" id="password"
                onChange={e => this.setState({ password: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <label className="floating-label">{t('Repeat Password')}</label>
              <input type="password" className="form-control" name="repeatPassword" id="repeatPassword"
                onChange={e => this.setState({ repeatPassword: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="btn-group mx-auto">
            <label className="btn btn-outline-secondary btn-group-item text-left">
              <input type="radio" name="one" id="one" />
              <span> {t('Seller')}</span>
            </label>
            <label className="btn btn-outline-secondary btn-group-item text-left">
              <input type="radio" name="two" id="tow" />
              <span> {t('Buyer')}</span>
            </label>
            <label className="btn btn-outline-secondary btn-group-item text-left">
              <input type="radio" name="three" id="three" />
              <span> {t('Both')}</span>
            </label>
          </div>
        </div>
        <div className="form-group d-flex" id="recaptcha">
          <label className="form-check">
            <input className="form-check-input" type="checkbox" value="notARobot" />
            <span className="">{t(`I'm not a Robot`)}</span>
          </label>
        </div>
        <label className="form-check">
          <input className="form-check-input" type="checkbox" value="rememberMe" />
          <span className="">{t('Remember Me')}</span>
        </label>
        <div className="form-group row">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary btn-block"
              onClick={() => signUpWithEmailAndPassword(this.state)}>{t('Register')}</button>
          </div>
        </div>
        <div className="form-group text-center">
          <Link to={Routes.login}>{t('Log In')}</Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    thisUser: state.thisUser
  };
};

export default withNamespaces("src")(
  connect(mapStateToProps, { signUpWithEmailAndPassword })(SignupForm)
);