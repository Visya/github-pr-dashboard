import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

import 'styles/index.scss';

const { document } = global;

// TODO: dependency of Material UI
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
