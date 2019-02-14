import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import LetterHead from '../LetterHead';
import QuoteBody from './QuoteBody';
import QuoteHeader from './QuoteHeader';
import { getNewQuote } from '../../store/actions';

class QuoteCreationView extends React.Component {
  hasFetchedQuote = false;

  componentDidMount() {
    if(!this.hasFetchedQuote) {
      this.props.getNewQuote();
      this.hasFetchedQuote = true;
    }
  }
  render() {
    const { quoteInFocus } = this.props;
    return (
      <div className="container-fluid p-0">
        {
          (quoteInFocus.data && !quoteInFocus.waiting) &&
          <React.Fragment>
            <LetterHead />
            <QuoteHeader />
            <QuoteBody quote={quoteInFocus} />
          </React.Fragment>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  thisUser: state.thisUser,
  router: state.router,
  quoteInFocus: state.quoteInFocus
});

export default withNamespaces('src/components/QuoteForm')(
  connect(mapStateToProps, { getNewQuote })(QuoteCreationView)
);
