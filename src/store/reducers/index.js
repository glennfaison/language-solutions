import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import thisUser from './thisUser';
import quoteInFocus from './quoteInFocus';
import asyncProcesses from './asyncProcesses';

const rootReducer = combineReducers({
  thisUser: thisUser,
  quoteInFocus: quoteInFocus,
  router: routerReducer,
  asyncProcesses: asyncProcesses
});

export default rootReducer;