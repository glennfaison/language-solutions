import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Routes } from '../../../constants';
import { getNewQuote } from '../../../store/actions';

class ProfileInfo extends React.Component {
  renderQuoteList() {
    if (!this.props.thisUserProfile.data.quoteList) { return; }
    return this.props.thisUserProfile.data.quoteList.map(quote => (
      <li key={quote.code} className="list-group-item bg-transparent">
        {quote.venue + ", " + quote.event}
      </li>
    ));
  }
  render() {
    const { t, thisUserProfile } = this.props;
    return (
      <section className="row">
        {
          (thisUserProfile.data && thisUserProfile.data.userInfo) &&
          <React.Fragment>
            <div className="col-md-4 px-0 pr-lg-1 mt-4">
              <div className="mt-5 pt-5"></div>
              <div className="pb-4">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent">
                    <i className="fas fa-briefcase fa-lg fa-fw"></i>
                    Software Engineer
                  </li>
                  <li className="list-group-item bg-transparent">
                    <i className="fas fa-home fa-lg fa-fw"></i>
                    Buea, Cameroon
                  </li>
                  <li className="list-group-item bg-transparent">
                    <i className="fas fa-envelope fa-lg fa-fw"></i>
                    <Link to={"mailto:" + thisUserProfile.data.userInfo.email}>
                      {thisUserProfile.data.userInfo.email}
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent">
                    <i className="fas fa-phone fa-lg fa-fw"></i>
                    (+237) 675 611 933
                  </li>
                  <li className="list-group-item bg-transparent">
                    <i className="fas fa-home fa-lg fa-fw"></i>
                    Buea, Cameroon
                  </li>
                </ul>
                <Link to={Routes.newQuote}
                  className="btn btn-block btn-dark"
                  onClick={() => getNewQuote()}>
                  {t('New Quote')}
                </Link>
              </div>
            </div>
            <div className="col-md-8 px-0 pl-lg-1 mt-4">
              <div className="px-0 pb-4 pt-1">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent text-center h4 font-weight-bold">{t('Quote History')}</li>
                  <li className="list-group-item bg-transparent p-0 border-0">
                    <form className="d-block row">
                      <div className="input-group input-group col-12">
                        <input type="search" className="form-control border-right-0" autoComplete="off" placeholder={t("Search")} aria-label={t("Search")} />
                        <span className="input-group-btn">
                          <button className="btn btn-outline-dark border-left-0 rounded-right" type="button" aria-label="">
                            <i className="fas fa-search fa-lg fa-fw"></i>
                          </button>
                        </span>
                      </div>
                    </form>
                  </li>
                  {this.renderQuoteList()}
                </ul>
              </div>
            </div>
          </React.Fragment>
        }
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    thisUserProfile: state.thisUserProfile
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return { "dispatch": dispatch };
};

export default withNamespaces("src")(
  connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)
);
