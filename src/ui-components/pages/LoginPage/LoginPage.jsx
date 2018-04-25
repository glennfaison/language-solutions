import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';
import Settings from '../../../entities/Settings';


class LoginPage extends React.Component{
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login() {
    let email = ReactDOM.findDOMNode(this.refs["email"]).value;
    let password = ReactDOM.findDOMNode(this.refs["password"]).value;
    this.props.onLogin(email, password);
    this.props.history.push(Settings.baseRoutes.root);
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="container">
          <div className="row" style={{height: 150}}></div>

          <div className="row">
            <div className="col-sm-8">
              <h1>Listen to Eminem!</h1>
              <p className="h3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Velit dolorum in magnam fugiat deleniti! Dolor ex blanditiis, 
                recusandae amet aliquam, laudantium saepe, sint eos quis voluptates 
                totam repellat dolorem ut!
              </p>
            </div>
            <div className="col-sm-4">
              <div className="col-sm-12 p-3 mt-3 card">
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-12 col-form-label">Email</label>
                  <div className="col-sm-12">
                    <input type="email" className="form-control" name="email" ref="email" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="password" className="col-sm-12 col-form-label">Password</label>
                  <div className="col-sm-12">
                    <input type="password" className="form-control" name="password" ref="password"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 mt-3">
                    <button type="submit" onClick={this.login} className="btn btn-success btn-block">login</button>
                  </div>
                </div>
                <small className="text-center">
                  <hr /> Don't have an account yet? <br />
                  <Link to={Settings.baseRoutes.signup}>Sign Up</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);