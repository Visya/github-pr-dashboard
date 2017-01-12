import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import AppBar from 'material-ui/AppBar';
// import Repo from 'components/Repo';
import RepoList from 'containers/RepoList';
import Search from 'containers/Search';

export default () => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title='PR Dashboard'
        showMenuIconButton={ false }
        iconElementRight={ <Search /> }
      />
      <RepoList />
    </div>
  </MuiThemeProvider>
);
