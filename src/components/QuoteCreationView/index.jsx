import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import LetterHead from '../LetterHead';
import QuoteBody from './QuoteBody';
import QuoteHeader from './QuoteHeader';
import newQuote from '../../constants';
import newQuoteSection from '../../constants';
import newQuoteSectionItem from '../../constants';

const QuoteContext = React.createContext();
export const QuoteContextConsumer = QuoteContext.Consumer;

class QuoteCreationView extends React.Component {
  constructor(props) {
    super(props);
    // If we're creating a new Quote
    if (!this.props.currentQuote) {
      this.state = newQuote();
    }
    // If we're viewing an existing Quote...

    this.getNewQuote = this.getNewQuote.bind(this);
    this.addQuoteSection = this.addQuoteSection.bind(this);
    this.removeQuoteSection = this.removeQuoteSection.bind(this);
    this.addQuoteSectionItem = this.addQuoteSectionItem.bind(this);
    this.removeQuoteSectionItem = this.removeQuoteSectionItem.bind(this);
    this.setQuoteSectionItem = this.setQuoteSectionItem.bind(this);
    this.saveQuote = this.saveQuote.bind(this);
  }
  getNewQuote() {
    this.setState(newQuote());
  }
  addQuoteSection() {
    let quote = this.state;
    quote.quoteSections.push(newQuoteSection());
    this.setState(quote);
  }
  removeQuoteSection(sectionIndex) {
    let quote = this.state;
    quote.quoteSections.splice(sectionIndex, 1);
    this.setState(quote);
  }
  setQuoteSection(sectionIndex, quoteSection) {
    let quote = this.state;
    quote.quoteSections[sectionIndex] = quoteSection;
    this.setState(quote);
  }
  addQuoteSectionItem(sectionIndex) {
    let quote = this.state;
    quote.quoteSections[sectionIndex].items.push(newQuoteSectionItem());
    this.setState(quote);
  }
  removeQuoteSectionItem(sectionIndex, sectionItemIndex) {
    let quote = this.state;
    quote.quoteSections[sectionIndex].items.splice(sectionItemIndex, 1);
    this.setState(quote);
  }
  setQuoteSectionItem(sectionIndex, sectionItemIndex, quoteSectionItem) {
    let quote = this.state;
    quote.quoteSections[sectionIndex].items[sectionItemIndex] = quoteSectionItem;
    this.setState(quote);
  }
  saveQuote() { }
  render() {
    let currentQuote = this.state;
    let methods = {
      getNewQuote: this.getNewQuote,
      removeQuoteSection: this.removeQuoteSection,
      addQuoteSection: this.addQuoteSection,
      removeQuoteSectionItem: this.removeQuoteSectionItem,
      addQuoteSectionItem: this.addQuoteSectionItem,
      saveQuote: this.saveQuote,
      setQuoteSectionItem: this.setQuoteSectionItem
    };
    return (
      <QuoteContext.Provider value={methods}>
        <QuoteContextConsumer>
          {(methods) => {
            return <div className="container-fluid p-0">
              <LetterHead quote={currentQuote} {...methods} />
              <QuoteHeader quote={currentQuote} {...methods} />
              <QuoteBody quote={currentQuote} {...methods} />
            </div>
          }}
        </QuoteContextConsumer>
      </QuoteContext.Provider>
    );
  }
};



const mapStateToProps = (state, ownProps) => ({
  "thisUser": state.thisUser,
  "currentQuote": state.currentQuote
});
const mapDispatchToProps = (dispatch, ownProps) => ({ dispatch: dispatch });

export default withNamespaces('src/components/QuoteForm')(
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(QuoteCreationView)
  )
);