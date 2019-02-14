import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { Settings } from '../constants';

const superagent = superagentPromise(_superagent, global.Promise);

// const encode = encodeURIComponent;
const responseBody = res => res;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('access-token', token);
  }
};

export const setToken = _token => { token = _token; };

export const HttpResource = {
  del: url =>
    superagent.del(`${Settings.apiRoot}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${Settings.apiRoot}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${Settings.apiRoot}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${Settings.apiRoot}${url}`, body).use(tokenPlugin).then(responseBody)
};