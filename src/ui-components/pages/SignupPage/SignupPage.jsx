import React from 'react';
import ReactDOM from 'react-dom';
import User from '../../../entities/User';
import { withRouter } from 'react-router-dom';


class SignupPagePage extends React.Component{
  constructor(props) {
    super(props);
    this.SignupPageButtonClick = this.SignupPageButtonClick.bind(this);
  }
  SignupPageButtonClick() {
    let username = ReactDOM.findDOMNode(this.refs["username"]).value;
    let email = ReactDOM.findDOMNode(this.refs["email"]).value;
    let password = ReactDOM.findDOMNode(this.refs["password"]).value;
    let newUser = new User(username, email, password);
    this.props.onSignup(newUser);
    this.props.history.push("/login");
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
                    <input type="text" className="form-control" name="email" ref="email" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="username" className="col-sm-12 col-form-label">Username</label>
                  <div className="col-sm-12">
                    <input type="text" className="form-control" name="username" ref="username" placeholder=""/>
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
                    <button type="submit"
                      className="btn btn-success btn-block"
                      onClick={this.SignupPageButtonClick} >Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupPagePage);