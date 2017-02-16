import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createStore from 'store';
import App from 'containers/App';

const { document } = global;
const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path='/'>
        <IndexRoute component={App}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
