import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import AppBar from 'material-ui/AppBar';

export default () => (
  <MuiThemeProvider>
    <div>
      <AppBar title='PR Dashboard' showMenuIconButton={ false } />
    </div>
  </MuiThemeProvider>
);
