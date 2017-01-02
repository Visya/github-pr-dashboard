import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const { document } = global;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
