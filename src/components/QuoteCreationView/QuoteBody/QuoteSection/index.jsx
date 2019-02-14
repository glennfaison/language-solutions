import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import QuoteSectionItem from "./QuoteSectionItem";
import InputContainer from '../../../InputContainer';
import { removeQuoteSection, addQuoteSectionItem, setQuoteSection } from '../../../../store/actions';
import { newQuoteSection } from '../../../../constants';


class QuoteSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = newQuoteSection();console.log(this.state);
    for (let key in this.state) {
      if (key === "totalPrice") { continue; }
      this.state[key] = this.props.section[key];
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
    const { t, index, section } = this.props;
    return (
      <div className="container-fluid p-0 pt-4 mt-3 alert-light">
        <div className="form-group alert-secondary position-relative">
          <button className="close mb-2 mr-2"
            onClick={() => removeQuoteSection(index)}>&times;</button>
          <div className="col-lg-4 col-md-6 col-sm-10 mx-auto">
            <InputContainer>
              <label className="floating-label">{t('Section Title')}</label>
              <input type="text" className="form-control"
                value={this.props.section.title || ""}
                onChange={e => setQuoteSection(index, { ...section, title: e.target.value })} />
            </InputContainer>
          </div>
        </div>
        {this.renderSectionItems()}
        <div className="row no-gutters border border-dark">
          <div className="col-md-6">
            <div className="form-group">
              <button className="btn btn-link"
                onClick={() => addQuoteSectionItem(index)}>
                {t('Add Item')}
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row no-gutters">
              <label className="col-4 pl-3">{t('Section Total')}</label>
              <input type="number" ref="totalPrice" disabled className="form-control form-control-sm col-8"
                value={this.props.section.totalPrice} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderSectionItems() {
    let { items } = this.props.section;
    if (!items) { return; }
    return items.map((item, index) =>
      <QuoteSectionItem
        item={item}
        key={index.toString()}
        index={index}
        sectionIndex={this.props.index}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  thisUser: state.thisUser
});

export default withNamespaces('src')(
  connect(mapStateToProps, {
    addQuoteSectionItem,
    removeQuoteSection
  })(QuoteSection)
);
