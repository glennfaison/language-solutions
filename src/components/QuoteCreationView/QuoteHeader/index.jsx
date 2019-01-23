import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import './QuoteHeader.css';
import InputContainer from '../../InputContainer';

let QuoteHeader = (props) => {
  const { t } = props;
  return (
    <section className="row no-gutters pt-3">
      <div className="col-md-6">
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="addresser" className="floating-label">{t('Addresser')}</label>
            <input type="text" className="form-control" name="addresser"
              defaultValue={props.quote.addresser} />
          </InputContainer>
        </div>
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="date" className="floating-label">{t('Date')}</label>
            <input type="date" className="form-control" name="date"
              defaultValue={props.quote.date} />
          </InputContainer>
        </div>
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="code" className="floating-label">{t('Code')}</label>
            <input type="text" className="form-control" name="code"
              defaultValue={props.quote.code} />
          </InputContainer>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="venue" className="floating-label">{t('Venue')}</label>
            <input type="text" className="form-control" name="venue"
              defaultValue={props.quote.venue} />
          </InputContainer>
        </div>
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="event" className="floating-label">{t('Event')}</label>
            <input type="text" className="form-control" name="event"
              defaultValue={props.quote.event} />
          </InputContainer>
        </div>
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="addressee" className="floating-label">{t('Addressee')}</label>
            <input type="text" className="form-control" name="addressee"
              defaultValue={props.quote.addressee} />
          </InputContainer>
        </div>
      </div>
    </section>
  );
};


const mapStateToProps = (state, ownProps) => ({
  "thisUser": state.thisUser
});
const mapDispatchToProps = (dispatch, ownProps) => ({ dispatch: dispatch });

export default withNamespaces('src/components/QuoteHeader')(
  connect(mapStateToProps, mapDispatchToProps)(QuoteHeader)
);