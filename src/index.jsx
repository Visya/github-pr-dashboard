import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';

import App from 'components/App';
import createStore from 'store';

import 'styles/index.scss';

// TODO: dependency of Material UI
injectTapEventPlugin();

const { document } = global;
const store = createStore();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);
