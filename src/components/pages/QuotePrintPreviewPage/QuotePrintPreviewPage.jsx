import React from 'react';
import QuoteSectionState from '../../../utilities/QuoteSectionState';
import PrintableQuoteSection from '../../PrintableQuoteSection/PrintableQuoteSection';
import spellNumber from '../../../utilities/spellNumber';
import PageHeader from '../../QuoteHeader/QuoteHeader';
import PageFooter from '../../QuoteFooter/QuoteFooter';
import { withRouter } from 'react-router-dom';


class QuotePrintPreviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paperSizes: {
        A6: {
          inInches: {
            height: 5.83,
            width: 4.13,
            margins: 0.75
          },
        },
        A5: {
          inInches: {
            height: 8.27,
            width: 5.83,
            margins: 0.75
          },
        },
        A4: {
          inInches: {
            height: 11.69,
            width: 8.27,
            margins: 0.75
          }
        },
        A3: {
          inInches: {
            height: 16.54,
            width: 11.69,
            margins: 0.75
          },
        },
      },
      addresserName: "Innocent Dekou",
      addresserInfo: "lflskdj  lkdjfl  lkdj lkj  jl\nslkdjflsdkjlkdjflkjddlkjdls",
      addresserSignature: "I.D signature",
      registrationNumber: "RC/YAO/2016/B/959",
      taxPayerNumber: "M 101612588826 A",
      email: "languagesolutions04@gmail.com",
      telephoneNuber: "+237 670 190 679 / +237 677 022 851",

      id: "",
      date: new Date(),
      addressee: "Direction de la lutte contre les maladies et les épidémies MINSANTE",
      addresseeAbbreviation: "DLM",
      services: "Simultaneous Interpretation & Equipment Rental",
      event: "DLM Event",
      venue: "Mbalmayo, Hotel Départemental",
      attendance: "20-30",
      duration: 0,
      languages: ["English", "French"],
      teamOfInterpreters: 0,
      teamOfSoundEngineers: 0,
      currencyUsed: "(XAF) CFA Francs",

      sections: {
        section1: QuoteSectionState(),
        section2: QuoteSectionState(),
        section3: QuoteSectionState(),
        section4: QuoteSectionState(),
        section5: QuoteSectionState(),
        section6: QuoteSectionState(),
        section7: QuoteSectionState(),
        section8: QuoteSectionState(),
        section9: QuoteSectionState(),
        section10: QuoteSectionState(),
        section11: QuoteSectionState(),
      },
      quoteTotal: 140000*11,
      
      first: "TOTAL 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8",
      second: "140000 + 140000 + 140000 + 140000 + 140000 + 140000 + 140000 + 140000 + 140000",
    };
  }
  getQuoteId() {
    return "LS_" + this.state.addresseeAbbreviation + "_"
      + this.state.date.toDateString();
  }
  renderWordedQuoteTotalAddition() {
    return(
      <div className="text-center mt-5">
      <div>
        <b>{this.state.first}: </b>
        <span>{this.state.second}</span>
        <span> = </span>
        <span> {this.state.quoteTotal} </span>
      </div>
        <b>
          This price quote is closed at the sum of XAF 
          <span> {this.state.quoteTotal} </span> 
          (<span className="text-capitalize"> {spellNumber(this.state.quoteTotal)}</span>)
        </b>
      </div>
    );
  }
  renderSections() {
    let quoteSectionList = [];
    let i;
    for(let section in this.state.sections) {
      i = this.state.sections[section].id;
      quoteSectionList.push(
        <PrintableQuoteSection key={i}
          id={i}
          stateProp={this.state.sections[section]} />
      );
    }
    return quoteSectionList;
  }
  render() {
    return(
      <div className="container-fluid bg-white">
        <div className="pt-5">
          <div className="header offset-sm-1 col-sm-10">
            <PageHeader />
          </div>

          <div className="quote-form mt-5">
            <div className="identification clearfix">
              <div className="float-right">
                <span className="underline">QUOTE:</span> {this.getQuoteId()}<br/>
                <span className="underline">DATE:</span> {this.state.date.toDateString()}<br/>
              </div>
            </div>
            <div className="addressee clearfix">
              <div className="float-left text-left">
                <span className="underline">TO:</span> {this.state.addressee}<br/>
                <span className="underline">Event:</span> {this.state.event}<br/>
                <span className="underline">Venue:</span> {this.state.venue}<br/>
                <span className="underline">Attendance:</span> {this.state.attendance}<br/>
                <span className="underline">Duration:</span> {this.state.duration}<br/>
                <span className="underline">Languages:</span> {this.state.languages}<br/>
                <span className="underline">Team of Interpreters:</span> {this.state.teamOfInterpreters}<br/>
                <span className="underline">Team of Sound Engineers:</span> {this.state.teamOfSoundEngineers}<br/>
                <span className="underline">Currency Used:</span> {this.state.currencyUsed}
              </div>
            </div>

            {this.renderSections()}

            {this.renderWordedQuoteTotalAddition()}
          </div>

          <div className="footer mt-5 pb-5">
            <div className="clearfix">
              <div className="addresser float-right">
                <b>{this.state.addresserName}</b><br/>
                {this.state.addresserInfo}<br/>
                {this.state.addresserSignature}</div>
            </div>
            <PageFooter registrationNumber={this.state.registrationNumber}
              taxPayerNumber={this.state.taxPayerNumber}
              email={this.state.email}
              telephoneNuber={this.state.telephoneNuber} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuotePrintPreviewPage);