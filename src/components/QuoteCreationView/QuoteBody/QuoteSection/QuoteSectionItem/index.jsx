import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import InputContainer from '../../../../InputContainer';
import { setQuoteSectionItem } from '../../../../../store/actions';

class QuoteSectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.saveStateToQuote = this.saveStateToQuote.bind(this);
  }
  saveStateToQuote(key, value) {
    const { setQuoteSectionItem, sectionIndex, index , item } = this.props;
    setQuoteSectionItem(sectionIndex, index, { ...item, [key]: value});
  }
  render() {
    const { t } = this.props;
    return (
      <div className="row no-gutters pt-lg-0 pt-3 mt-3 alert-dark">
        <div className="form-group col-md-6 col-lg-4 pr-md-2">
          <InputContainer>
            <label className="floating-label">{t('Description')}</label>
            <input type="text" className="form-control" style={{ height: '38px' }}
              value={this.props.description}
              onChange={e => this.saveStateToQuote("description", e.target.value)} />
          </InputContainer>
        </div>
        <div className="form-group col-md-6 col-lg-8 row p-0 m-0 no-gutters">
          <div className="col-md-3 col-6 px-0 pr-md-2 pr-2">
            <div className="btn-group col-12 px-0">
              <div className="form-group col-6 px-0">
                <InputContainer>
                  <label className="floating-label">{t('Personnel')}</label>
                  <input type="number" min={0} className="form-control rounded-0 rounded-left" style={{ height: '38px' }}
                    value={this.props.personnelUnits}
                    onChange={e => this.saveStateToQuote("personnelUnits", e.target.value)} />
                </InputContainer>
              </div>
              <select className="form-control col-6 p-0"
                value={this.props.personnelType}
                onChange={e => this.saveStateToQuote("personnelType", e.target.value)} >
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
                    value={this.props.unitPrice}
                    onChange={e => this.saveStateToQuote("unitPrice", e.target.value)} />
                </InputContainer>
              </div>
              <select className="form-control col-6 px-0"
                value={this.props.pricingBasis}
                onChange={e => this.saveStateToQuote("pricingBasis", e.target.value)} >
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
                    value={this.props.timeUnits}
                    onChange={e => this.saveStateToQuote("timeUnits", e.target.value)} />
                </InputContainer>
              </div>
              <select className="form-control col-6 p-0"
                value={this.props.timeBasis}
                onChange={e => this.saveStateToQuote("timeBasis", e.target.value)} >
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
                value={this.props.item.totalPrice} />
            </InputContainer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  item: state.quoteInFocus.data.quoteSections[ownProps.sectionIndex].items[ownProps.index]
});

export default withNamespaces('src')(
  connect(mapStateToProps, {
    setQuoteSectionItem
  })(QuoteSectionItem)
);
