import React from 'react';

export default class SignUpPage extends React.Component{
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
              <form className="col-sm-12 p-3 mt-3 card">
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-12 col-form-label">Email</label>
                  <div className="col-sm-12">
                    <input type="text" className="form-control" name="email" id="email" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="username" className="col-sm-12 col-form-label">Username</label>
                  <div className="col-sm-12">
                    <input type="text" className="form-control" name="username" id="username" placeholder=""/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="password" className="col-sm-12 col-form-label">Password</label>
                  <div className="col-sm-12">
                    <input type="text" className="form-control" name="password" id="password"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 mt-3">
                    <button type="submit" className="btn btn-success btn-block">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}