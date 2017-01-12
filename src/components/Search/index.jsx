import React, { PropTypes } from 'react';
import { darkWhite, lightWhite } from 'material-ui/styles/colors';

import SearchIcon from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

const Search = ({
  onChange,
}) => (
  <div>
    <SearchIcon color={ darkWhite } />
    <TextField
      hintText='Search'
      hintStyle={ { color: lightWhite } }
      onChange={ onChange }
    />
  </div>
);

Search.propTypes = {
  onChange: PropTypes.func,
};

export default Search;
