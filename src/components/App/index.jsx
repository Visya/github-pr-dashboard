import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import AppBar from 'material-ui/AppBar';
import Repo from 'components/Repo';

export default () => (
  <MuiThemeProvider>
    <div>
      <AppBar title='PR Dashboard' showMenuIconButton={ false } />
      <Repo />
    </div>
  </MuiThemeProvider>
);
