import React from 'react';
// import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';


const LoginView = (props) => {
  return (
    <section className="container-fluid px-0">
      <div className="row">
        <div className="d-none col-sm-12 col-md-6 col-lg-8 d-md-block">
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 pb-5">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default LoginView;