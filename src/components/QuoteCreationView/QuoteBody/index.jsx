import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import QuoteSection from './QuoteSection';
import './index.css';
import { addQuoteSection } from '../../../store/actions';


class QuoteBody extends React.Component {
  renderSections() {
    if (this.props.quote.data.quoteSections.length === 0) { return; }
    return this.props.quote.data.quoteSections
      .map((section, index) =>
        <QuoteSection section={section} key={index.toString()} index={index} />);
  }
  render() {
    const { t, addQuoteSection } = this.props;
    return (
      <div className="row no-gutters">
        {this.renderSections()}
        <div className="form-group w-100 row p-0 m-0 mt-3 no-gutters border border-dark">
          <div className="col-md-6">
            <div className="form-group">
              <button className="btn btn-link"
                onClick={addQuoteSection()}>
                {t('Add Section')}
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group row no-gutters">
              <label className="col-4 pl-3">{t('Quote Total')}</label>
              <input type="number" disabled className="form-control form-control-sm col-8"
                defaultValue={this.props.quote.totalPrice} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  thisUser: state.thisUser
});

export default connect(mapStateToProps, { addQuoteSection })(
  withNamespaces('src')(QuoteBody)
);


