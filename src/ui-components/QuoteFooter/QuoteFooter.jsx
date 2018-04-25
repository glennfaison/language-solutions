import React from 'react';

export default class PageFooter extends React.Component {
  render() {
    return(
      <footer className="mt-3 pb-5">
        <div className="row clearfix">
          <div className="col-sm-6">
            <div>Registration Number: {this.props.registrationNumber}</div>
            <div>Tax Payer’s Number: {this.props.taxPayerNumber}</div>
          </div>
          <div className="col-sm-6">
            <div className="float-right">
              <div>Tel.: {this.props.telephoneNuber}</div>
              <div>{this.props.email}</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}