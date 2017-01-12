import { connect } from 'react-redux';

import Search from 'components/Search';

import { searchFor } from 'actions/repo';

export default connect(
  null,
  dispatch => ({
    onChange: (event, newValue) => dispatch(searchFor(newValue)),
  }),
)(Search);
