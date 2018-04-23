import React from 'react';

export default class ErrorPage extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <h1>Oops! We've encountered a problem.</h1>
        <h3>Please, try again</h3>
      </div>
    );
  }
}