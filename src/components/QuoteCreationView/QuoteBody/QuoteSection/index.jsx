import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import QuoteSectionItem from "./QuoteSectionItem";
import InputContainer from '../../../InputContainer';
import newQuoteSection from '../../../../constants';
import { QuoteContextConsumer } from '../..';


class QuoteSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = newQuoteSection(); console.log(this.state)
    for (let key in this.state) {
      if (key === "totalPrice") { continue; }
      this.state[key] = this.props.item[key];
    }
    this.editSectionItem = this.editSection.bind(this);
    this.saveStateToQuote = this.saveStateToQuote.bind(this);
  }
  editSection() {
    let { sectionIndex } = this.props;
    this.props.setQuoteSection(sectionIndex, this.state);
  }
  saveStateToQuote(key, value) {
    this.setState({ [key]: value });
    let total = this.state.items.reduce((prevValue, currValue) => {
      return prevValue.totalPrice + currValue.totalPrice;
    }, 0);
    // let total = this.state.unitPrice * this.state.timeUnits;
    this.setState({ totalPrice: total });
    this.editSection();
  }
  setUITotalPrice() {
    let totalPriceInput = ReactDOM.findDOMNode(this.refs['totalPrice']);
    totalPriceInput.value = this.state.totalPrice;
  }
  componentDidUpdate() {
    this.setUITotalPrice();
  }
  render() {
    const { t, index } = this.props;
    return (
      <QuoteContextConsumer>
        {(methods) => {
          return (
            <div className="container-fluid p-0 pt-4 mt-3 alert-light">
              <div className="form-group alert-secondary position-relative">
                <button className="close mb-2 mr-2"
                  onClick={() => methods.removeQuoteSection(index)}>&times;</button>
                <div className="col-lg-4 col-md-6 col-sm-10 mx-auto">
                  <InputContainer>
                    <label className="floating-label">{t('Section Title')}</label>
                    <input type="text" className="form-control" />
                  </InputContainer>
                </div>
              </div>
              {this.renderSectionItems()}
              <div className="row no-gutters border border-dark">
                <div className="col-md-6">
                  <div className="form-group">
                    <button className="btn btn-link"
                      onClick={() => methods.addQuoteSectionItem(index)}>
                      {t('Add Item')}
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row no-gutters">
                    <label className="col-4 pl-3">{t('Section Total')}</label>
                    <input type="number" ref="totalPrice" disabled className="form-control form-control-sm col-8"
                      defaultValue={this.props.section.totalPrice} />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </QuoteContextConsumer>
    );
  }
  renderSectionItems() {
    let { items } = this.props.section;
    if (!items) { return; }
    return items.map((item, index) =>
      <QuoteSectionItem item={item} key={index.toString()} index={index} sectionIndex={this.props.index}
        {...this.props.methods} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  "thisUser": state.thisUser
});
const mapDispatchToProps = (dispatch, ownProps) => ({ dispatch: dispatch });

export default withNamespaces('src')(
  connect(mapStateToProps, mapDispatchToProps)(QuoteSection)
);