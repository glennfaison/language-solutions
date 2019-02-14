import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import InputContainer from '../../InputContainer';
import { setQuote } from '../../../store/actions';
import './QuoteHeader.css';

let QuoteHeader = (props) => {
  const { t, quote, setQuote } = props;
  let state = props.quote.data;
  return (
    <section className="row no-gutters pt-3">
      <div className="col-md-6">
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="addresser" className="floating-label">{t('Addresser')}</label>
            <input type="text" className="form-control" name="addresser"
              value={quote.addresser}
              onBlur={e => setQuote({ ...state, addresser: e.target.value })} />
          </InputContainer>
        </div>
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="date" className="floating-label">{t('Date')}</label>
            <input type="date" className="form-control" name="date"
              value={quote.date}
              onBlur={e => setQuote({ ...state, date: e.target.value })} />
          </InputContainer>
        </div>
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="code" className="floating-label">{t('Code')}</label>
            <input type="text" className="form-control" name="code"
              value={quote.code}
              onBlur={e => setQuote({ ...state, code: e.target.value })} />
          </InputContainer>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="venue" className="floating-label">{t('Venue')}</label>
            <input type="text" className="form-control" name="venue"
              value={quote.venue}
              onBlur={e => setQuote({ ...state, venue: e.target.value })} />
          </InputContainer>
        </div>
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="event" className="floating-label">{t('Event')}</label>
            <input type="text" className="form-control" name="event"
              value={quote.event}
              onBlur={e => setQuote({ ...state, event: e.target.value })} />
          </InputContainer>
        </div>
        <div className="form-group offset-md-1 col-md-10 col-12 px-0">
          <InputContainer>
            <label htmlFor="addressee" className="floating-label">{t('Addressee')}</label>
            <input type="text" className="form-control" name="addressee"
              value={quote.addressee}
              onBlur={e => setQuote({ ...state, addressee: e.target.value })} />
          </InputContainer>
        </div>
      </div>
    </section>
  );
};


const mapStateToProps = (state, ownProps) => ({
  thisUser: state.thisUser,
  quote: state.quoteInFocus
});

export default withNamespaces('src/components/QuoteHeader')(
  connect(mapStateToProps, { setQuote })(QuoteHeader)
);
