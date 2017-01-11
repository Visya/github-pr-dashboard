import { basename } from 'path';
import { combineReducers } from 'redux';

const context = require.context('./', false, /^((?!index\.js).)*\.js$/);

const getReducers = () => context.keys().reduce((result, filename) => {
  const name = basename(filename, '.js');

  return Object.assign({ [name]: context(filename).default }, result);
}, {});

export default combineReducers(getReducers());
