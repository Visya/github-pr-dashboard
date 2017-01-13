import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'rxjs';

import App from 'components/App';
import RepoList from 'containers/RepoList';
import RepoOverview from 'containers/RepoOverview';

import createStore from 'store';

import 'styles/index.scss';

// TODO: dependency of Material UI
injectTapEventPlugin();

const { document } = global;
const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path='/' component={ App }>
        <IndexRoute component={ RepoList } />
        <Route path='repo/:id' component={ RepoOverview } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
