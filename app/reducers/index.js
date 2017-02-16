import { basename } from 'path';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const context = require.context('./', false, /^((?!index\.js).)*\.js$/);

const getReducers = () => context.keys().reduce((result, filename) => {
  const name = basename(filename, '.js');

  return Object.assign({ [name]: context(filename).default }, result);
}, { routing: routerReducer });

export default combineReducers(getReducers());
