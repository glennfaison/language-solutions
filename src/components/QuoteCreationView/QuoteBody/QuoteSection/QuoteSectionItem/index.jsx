import React from 'react';
import ReactDOM from 'react-dom';
import { withNamespaces } from 'react-i18next';

import InputContainer from '../../../../InputContainer';
import { newQuoteSectionItem } from '../../../../../constants';

class QuoteSectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = newQuoteSectionItem(); console.log(this.state)
    for (let key in this.state) {
      if (key === "totalPrice") { continue; }
      this.state[key] = this.props.item[key];
    }
    this.editSectionItem = this.editSectionItem.bind(this);
    this.saveStateToQuote = this.saveStateToQuote.bind(this);
  }
  editSectionItem() {
    let { index, sectionIndex } = this.props;
    this.props.setQuoteSectionItem(sectionIndex, index, this.state);
  }
  saveStateToQuote(key, value) {
    this.setState({ [key]: value });
    let total = this.state.unitPrice * this.state.timeUnits;
    this.setState({ totalPrice: total });
    this.editSectionItem();
  }
  setUITotalPrice() {
    let totalPriceInput = ReactDOM.findDOMNode(this.refs['totalPrice']);
    totalPriceInput.value = this.state.totalPrice;
  }
  componentDidUpdate() {
    this.setUITotalPrice();
  }
  render() {
    const { t } = this.props;
    return (
      <div className="row no-gutters pt-lg-0 pt-3 mt-3 alert-dark">
        <div className="form-group col-md-6 col-lg-4 pr-md-2">
          <InputContainer>
            <label className="floating-label">{t('Description')}</label>
            <input type="text" className="form-control" style={{ height: '38px' }}
              onChange={e => this.saveStateToQuote("description", e.target.value)}
              onBlur={this.editSectionItem} />
          </InputContainer>
        </div>
        <div className="form-group col-md-6 col-lg-8 row p-0 m-0 no-gutters">
          <div className="col-md-3 col-6 px-0 pr-md-2 pr-2">
            <div className="btn-group col-12 px-0">
              <div className="form-group col-6 px-0">
                <InputContainer>
                  <label className="floating-label">{t('Personnel')}</label>
                  <input type="number" min={0} className="form-control rounded-0 rounded-left" style={{ height: '38px' }}
                    onChange={e => this.saveStateToQuote("personnelUnits", e.target.value)}
                    onBlur={this.editSectionItem} />
                </InputContainer>
              </div>
              <select className="form-control col-6 p-0"
                onChange={e => this.saveStateToQuote("personnelType", e.target.value)}
                onBlur={this.editSectionItem}>
                <option value="fixed">{t('Translator')}</option>
                <option value="daily">{t('Interpreter')}</option>
                <option value="hourly">{t('Sound Engineer')}</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 col-6 px-0 pr-md-2">
            <div className="btn-group col-12 px-0">
              <div className="form-group col-6 px-0">
                <InputContainer>
                  <label className="floating-label">{t('Pricing')}</label>
                  <input type="number" min={0} className="form-control rounded-0 rounded-left" style={{ height: '38px' }}
                    onChange={e => this.saveStateToQuote("unitPrice", e.target.value)}
                    onBlur={this.editSectionItem} />
                </InputContainer>
              </div>
              <select className="form-control col-6 px-0"
                onChange={e => this.saveStateToQuote("pricingBasis", e.target.value)}
                onBlur={this.editSectionItem}>
                <option value="fixed">{t('Fixed Price')}</option>
                <option value="daily">{t('Daily')}</option>
                <option value="hourly">{t('Hourly')}</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 col-6 px-0 pr-md-2 pr-2">
            <div className="btn-group col-12 px-0">
              <div className="form-group col-6 px-0">
                <InputContainer>
                  <label className="floating-label">{t('Time')}</label>
                  <input type="number" min={0} className="form-control rounded-0 rounded-left" style={{ height: '38px' }}
                    onChange={e => this.saveStateToQuote("timeUnits", e.target.value)}
                    onBlur={this.editSectionItem} />
                </InputContainer>
              </div>
              <select className="form-control col-6 p-0"
                onChange={e => this.saveStateToQuote("timeBasis", e.target.value)}
                onBlur={this.editSectionItem}>
                <option value="fixed">{t('Week')}</option>
                <option value="daily">{t('Day')}</option>
                <option value="hourly">{t('Hour')}</option>
                <option value="hourly">{t('Other')}</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 col-6 px-0">
            <InputContainer>
              <label className="floating-label">{t('Total')}</label>
              <input type="number" min={0} disabled ref="totalPrice" className="form-control" style={{ height: '38px' }}
                defaultValue={this.props.item.totalPrice} />
            </InputContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withNamespaces('src')(QuoteSectionItem);
