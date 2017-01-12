import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import Search from 'containers/Search';

const App = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title='PR Dashboard'
        showMenuIconButton={ false }
        iconElementRight={ <Search /> }
      />
      { children }
    </div>
  </MuiThemeProvider>
);
App.propTypes = {
  children: PropTypes.node,
};

export default App;
