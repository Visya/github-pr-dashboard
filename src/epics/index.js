import values from 'lodash.values';
import { combineEpics } from 'redux-observable';

const context = require.context('./', true, /^((?!index.js).)*\.js$/);
const getEpics = () => context.keys().reduce((memo, file) => {
  const epic = context(file);
  const epics = epic.default ? [epic.default] : values(epic);

  return epics.concat(memo);
}, []);

export default combineEpics(...getEpics());
