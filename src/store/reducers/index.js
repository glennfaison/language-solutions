import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import thisUser from './thisUser';
import quoteInFocus from './quoteInFocus';
import asyncProcesses from './asyncProcesses';
import thisUserProfile from './thisUserProfile';

const rootReducer = combineReducers({
  thisUser: thisUser,
  thisUserProfile: thisUserProfile,
  quoteInFocus: quoteInFocus,
  router: routerReducer,
  asyncProcesses: asyncProcesses
});

export default rootReducer;
