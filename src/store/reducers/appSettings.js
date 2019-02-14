import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import thisUser from './thisUser';
import currentQuote from './currentQuote';
import asyncProcesses from './asyncProcesses';

const rootReducer = combineReducers({
  thisUser: thisUser,
  currentQuote: currentQuote,
  router: routerReducer,
  asyncProcesses: asyncProcesses
});

export default rootReducer;