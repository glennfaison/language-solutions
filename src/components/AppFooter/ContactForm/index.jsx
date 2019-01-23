import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import InputContainer from '../../InputContainer';

// import { contactUs } from '../store/actions';

class ContactForm extends React.Component {
  submit() {
    console.log("Contact Form Submitted");
  }
  render() {
    const { t } = this.props;
    return (
      <form className="container-fluid px-0" onSubmit={e => e.preventDefault()}>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <label className="floating-label">{t('Your Email')}</label>
              <input type="email"
                className="form-control"
                name="email"
                onChange={(e) => this.setState({ email: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <label className="floating-label">{t('First Name')}</label>
              <input type="text"
                className="form-control"
                name="firstName"
                onChange={(e) => this.setState({ firstName: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <InputContainer>
              <label className="floating-label">{t('Subject')}</label>
              <input type="text"
                className="form-control"
                name="subject"
                onChange={(e) => this.setState({ subject: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            {/* <FloatingLabelTextArea className="w-100" rows={2} placeholder="Your message..." /> */}
            <InputContainer>
              <label className="floating-label">{t('Your Message')}</label>
              <textarea type="text"
                className="form-control"
                rows={"5"}
                name="message"
                onChange={(e) => this.setState({ message: e.target.value })} >
              </textarea>
            </InputContainer>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <button type="submit" onClick={(data) => this.submit(data)} className="btn btn-primary btn-block">{t('Submit')}</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { "dispatch": dispatch };
};

export default withNamespaces("src")(
  connect(null, mapDispatchToProps)(ContactForm)
);