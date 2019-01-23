import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import ContactForm from './ContactForm';


let AppFooter = (props) => {
  const { t } = props;
  return (
    <footer className="w-100 py-3 d-none d-lg-block bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">Language Solutions</div>
          <div className="col-sm-12 col-md-6 col-lg-3 order-lg-last">
            {t('Social Pages')}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">{t('Product')}</div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h3>{t('Contact Us')}</h3>
            <ContactForm onSubmit={(data) => console.log(data)} />
          </div>
        </div>
        <div className="bottom text-light">
          <small className="pr-3"><Link to="">{t('Terms')}</Link></small>
          <small className="pr-3"><Link to="">{t('Privacy')}</Link></small>
          <small className="pr-3"><Link to="">&copy; 2018 LS</Link></small>
        </div>
      </div>
    </footer>
  );
};

export default withNamespaces('src')(AppFooter);