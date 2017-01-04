import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import AppBar from 'material-ui/AppBar';
import Overview from 'components/Overview';

export default () => (
  <MuiThemeProvider>
    <div>
      <AppBar title='PR Dashboard' showMenuIconButton={ false } />
      <Overview />
    </div>
  </MuiThemeProvider>
);
