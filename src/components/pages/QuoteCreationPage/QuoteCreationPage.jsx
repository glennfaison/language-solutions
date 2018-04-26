import React from 'react';
import QuoteSectionState from '../../../utilities/QuoteSectionState';
import spellNumber from '../../../utilities/spellNumber';
import QuoteSection from '../../QuoteSection/QuoteSection';
import PageHeader from '../../QuoteHeader/QuoteHeader';
import PageFooter from '../../QuoteFooter/QuoteFooter';
import { withRouter } from 'react-router-dom';

class QuoteCreationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      },
      quoteTotal: 140000,
      
      first: "TOTAL 1",
      second: "",
    };

    this.getSectionTotal = this.getSectionTotal.bind(this);
    this.removeSection = this.removeSection.bind(this);
    this.addSectionRow = this.addSectionRow.bind(this);
    this.removeSectionRow = this.removeSectionRow.bind(this);
  }
  getQuoteId() {
    return "LS_" + this.state.addresseeAbbreviation + "_"
      + this.state.date.toDateString();
  }
  addSection() {
    let id = 0;
    for(let section in this.state.sections) {
      id = (id < this.state.sections[section].id)? this.state.sections[section].id : id;
    }
    id++;
    let tempSections = this.state.sections;
    tempSections["section" + id] = QuoteSectionState();
    tempSections["section" + id].id = id;
    this.setState({sections: tempSections});
  }
  removeSection(id) {
    let tempSections = this.state.sections;
    delete tempSections["section" + id];
    this.setState({sections: tempSections});
  }
  addSectionRow(sectionId) {
    let tempSections = this.state.sections;
    let content;
    for(let columnName in tempSections["section" + sectionId].columns) {
      content = tempSections["section" + sectionId].columns[columnName].content;
      tempSections["section" + sectionId].columns[columnName].content.push(
        content[content.length - 1]
      );
    }
    this.setState({sections: tempSections});
  }
  removeSectionRow(sectionId, rowIndex) {
    let tempSections = this.state.sections;
    for(let columnName in tempSections.columns) {
      delete tempSections["section" + sectionId].columns[columnName].content[rowIndex];
    }
    this.setState({sections: tempSections});
  }
  getQuoteTotal() {
    let total = 0;
    for(let section in this.state.sections) {
      total += this.state.sections[section].sectionTotal;
    }
    return total;
  }
  getSectionTotal(sectionId, refTotal) {
    let tempSections = this.state.sections;
    tempSections["section" + sectionId].sectionTotal = refTotal;
    
    let sectionTotalList = [];
    for(let column in this.state.sections) {
      sectionTotalList.push(column);
    }
    let first = "TOTAL 1";
    let second = "" + this.state.sections[sectionTotalList[0]].sectionTotal;
    for(let i = 1; i < sectionTotalList.length; i++) {
      first += " + " + (i + 1);
      second += " + " + this.state.sections[sectionTotalList[i]].sectionTotal;
    }

    this.setState({
      sections: tempSections, 
      quoteTotal: this.getQuoteTotal(),
      first: first,
      second: second,
    });
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
          (<span className="text-capitalize"> {spellNumber(this.state.quoteTotal)} </span>)
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
        <QuoteSection key={i} 
          id={i} 
          getSectionTotalProp={this.getSectionTotal}
          onAddSectionRow={this.addSectionRow}
          stateProp={this.state.sections[section]}
          onDelete={this.removeSection} />
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
            
            <button name="addTableButton"
              id="addTableButton" 
              className="btn btn-secondary btn-lg btn-block mt-5"
              onClick={()=>this.addSection()}>
              Add Section
            </button>

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

export default withRouter(QuoteCreationPage);