import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import AppSkeleton from './components/AppSkeleton';
import * as serviceWorker from './serviceWorker';

import i18n from './i18n';


ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store} >
      <ConnectedRouter history={history} >
        <AppSkeleton />
      </ConnectedRouter>
    </Provider>
  </I18nextProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
