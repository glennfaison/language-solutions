import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import i18n from '../../i18n';
import { logOut } from '../../store/actions';
import { Settings } from '../../constants';


const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
};

class NavBar extends React.Component {
  render() {
    const { t, logOut } = this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light w-100 py-3">
        <div className="container">
          <a className="navbar-brand" href=".">{Settings.AppShortName}</a>
          <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label={t("Toggle Navigation")}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href=".">{t('Landing')}<span className="sr-only">{'(' + t('current') + ')'}</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".">{t('Link')}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="." id="dropdownId" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">{t('Dropdown')}</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href=".">{t('Action 1')}</a>
                  <a className="dropdown-item" href=".">{t('Action 2')}</a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <select className="btn btn-sm btn-light border border-primary ml-auto"
                  name="language" onChange={e => changeLanguage(e.target.value)}>
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                  <option value="es">ES</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="." id="dropdownId" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Glenn Faison</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to="/login"
                    onClick={() => logOut()}>
                    {t('Sign Out')}
                  </Link>
                  <a className="dropdown-item" href=".">{t('Check list')}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ thisUser, router }, ownProps) => ({
  thisUser,
  router
});

export default withNamespaces('src')(
  connect(mapStateToProps, { logOut })(withRouter(NavBar))
);