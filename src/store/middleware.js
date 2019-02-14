import { setToken } from '../httpResources';
import { ActionTypes } from '../constants';

function isFunction(v) {
  return v && typeof v === typeof(function(){});
};

const asyncActionMiddleware = store => next => action => {
  if (isFunction(action)) {
    action(store.dispatch);
    return;
  }

  next(action);
};

const localStorageMiddleware = store => next => action => {
  if (/* action.type === ActionTypes.signup || */ action.type === ActionTypes.login) {
    if (!action.error) {
      window.localStorage.setItem('jwt', action.payload.data.token);
      setToken(action.payload.data.token);
    }
  } else if (action.type === ActionTypes.logout) {
    window.localStorage.setItem('jwt', '');
    setToken(null);
  }

  next(action);
};


export { asyncActionMiddleware, localStorageMiddleware }
