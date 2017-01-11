import { combineEpics } from 'redux-observable';

const context = require.context('./', true, /^((?!index.js).)*\.js$/);
const getEpics = () => context.keys().map(epic => context(epic).default);

export default combineEpics(...getEpics());
