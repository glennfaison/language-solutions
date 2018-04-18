import React from 'react';
import QuoteSection from '../quote-section/quote-section';
import spellNumber from '../../entities/number-speller';

export default class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.sectionTotalList = [0];
    this.state = {
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
      sections: [<QuoteForm key={0} id={0} getSectionTotalProp={this.getSectionTotal} />,],
      sectionTotalList: [0],
      quoteTotal: 0,
      first: "TOTAL 1",
      second: "",
    };
    this.getSectionTotal = this.getSectionTotal.bind(this);
  }
  getQuoteId() {
    return "LS_" + this.state.addresseeAbbreviation + "_" + this.state.date.toDateString();
  }
  addSection() {
    let id = this.state.sections.length;
    let tempSections = this.state.sections;
    tempSections.push(<QuoteSection id={id} key={id} getSectionTotalProp={this.getSectionTotal} />);
    this.setState({sections: tempSections});
  }
  renderSections() {
    let quoteSectionList = [];
    for(let i = 0; i < this.state.sections.length; i++) {
      quoteSectionList.push(<QuoteSection key={i} id={i} getSectionTotalProp={this.getSectionTotal} />);
    }
    return quoteSectionList;
  }
  getQuoteTotal() {
    let tempQuoteTotal = 0;
    for(let i = 0; i < this.sectionTotalList.length; i++) {
      tempQuoteTotal += this.sectionTotalList[i];
    }
    return tempQuoteTotal;
  }
  getSectionTotal(index, refValue) {
    if(!this.sectionTotalList) {return;}
    this.sectionTotalList[index] = refValue;
    this.setState({
      sectionTotalList: this.sectionTotalList, 
      quoteTotal: this.getQuoteTotal(),
    });
    
    let first = "TOTAL 1";
    let second = "" + this.sectionTotalList[0];
    for(let i = 1; i < this.sectionTotalList.length; i++) {
      first += " + " + (i + 1);
      second += " + " + this.sectionTotalList[i];
    }
    this.setState({first: first, second: second});
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
        <b>This price quote is closed at the sum of XAF <span>{this.state.quoteTotal}</span> (<span>{spellNumber(this.state.quoteTotal)}</span>)</b>
      </div>
    );
  }
  render() {
    return(
      <div className="quote-form mt-5">
        <div className="identification clearfix">
          <pre className="float-right">
            <span className="underline">QUOTE:</span> {this.getQuoteId()}<br/>
            <span className="underline">DATE:</span> {this.state.date.toDateString()}<br/>
          </pre>
        </div>
        <div className="addressee clearfix">
          <pre className="float-left text-left">
            <span className="underline">TO:</span> {this.state.addressee}<br/>
            <span className="underline">Event:</span> {this.state.event}<br/>
            <span className="underline">Venue:</span> {this.state.venue}<br/>
            <span className="underline">Attendance:</span> {this.state.attendance}<br/>
            <span className="underline">Duration:</span> {this.state.duration}<br/>
            <span className="underline">Languages:</span> {this.state.languages}<br/>
            <span className="underline">Team of Interpreters:</span> {this.state.teamOfInterpreters}<br/>
            <span className="underline">Team of Sound Engineers:</span> {this.state.teamOfSoundEngineers}<br/>
            <span className="underline">Currency Used:</span> {this.state.currencyUsed}
          </pre>
        </div>

        {this.renderSections()}
        
        <button name="addTableButton"
          id="addTableButton" 
          className="btn btn-secondary btn-lg btn-block mt-5"
          onClick={()=>this.addSection()}>
          Add Section
        </button>

        {this.renderWordedQuoteTotalAddition()}
      </div>
    );
  }
}