import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from 'epics';
import rootReducer from 'reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );
};
