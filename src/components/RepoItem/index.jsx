import React, { PropTypes } from 'react';

import ListItem from 'material-ui/List/ListItem';

const Repo = ({
  name,
}) => (<ListItem
  key={ name }
  primaryText={ name }
/>);

Repo.propTypes = {
  name: PropTypes.string,
};

export default Repo;
