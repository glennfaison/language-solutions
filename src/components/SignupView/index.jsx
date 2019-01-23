import React from 'react';
// import { withRouter } from 'react-router-dom';
import SignupForm from './SignupForm';

const SignupView = (props) => {
  return (
    <section className="container-fluid px-0">
      <div className="row">
        <div className="d-none col-sm-12 col-md-6 col-lg-8 d-md-block">
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 pb-5">
          <SignupForm />
        </div>
      </div>
    </section>
  );
}

export default SignupView;