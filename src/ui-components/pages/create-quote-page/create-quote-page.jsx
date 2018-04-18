import React from 'react';
import QuoteForm from '../../quote-form/quote-form';

export default class QuoteCreationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "addresserName": "Innocent Dekou",
      "addresserInfo": "lflskdj  lkdjfl  lkdj lkj  jl\nslkdjflsdkjlkdjflkjddlkjdls",
      "addresserSignature": "I.D signature",
      "registrationNumber": "RC/YAO/2016/B/959",
      "taxPayerNumber": "M 101612588826 A",
      "email": "languagesolutions04@gmail.com",
      "telephoneNuber": "+237 670 190 679 / +237 677 022 851"
    };
  }
  render() {
    return(
      <div className="container bg-white">
        <div className="pt-5">
          <div className="header offset-sm-1 col-sm-10"></div>
          <QuoteForm />
          <div className="footer mt-5 pb-5">
            <div className="clearfix">
              <pre className="addresser float-right">
                <b>{this.state.addresserName}</b><br/>
                {this.state.addresserInfo}<br/>
                {this.state.addresserSignature}</pre>
            </div>
            <footer className="mt-3 pb-5">
              <div className="row clearfix">
                <div className="col-sm-6">
                  <div>Registration Number: {this.state.registrationNumber}</div>
                  <div>Tax Payer’s Number: {this.state.taxPayerNumber}</div>
                </div>
                <div className="col-sm-6">
                  <div className="float-right">
                    <div>Tel.: {this.state.telephoneNuber}</div>
                    <div>{this.state.email}</div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}