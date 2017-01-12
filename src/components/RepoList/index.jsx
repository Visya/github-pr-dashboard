import React, { PropTypes } from 'react';
import { List as ImmutableList } from 'immutable';

import List from 'material-ui/List/List';
import RepoItem from 'containers/RepoItem';

const RepoList = ({
  repos,
}) => (
  <List>
    { !repos.size && <p>No items</p> }
    { repos.map(id => (
      <RepoItem
        key={ id }
        id={ id }
      />
    )) }
  </List>
);

RepoList.propTypes = {
  repos: PropTypes.instanceOf(ImmutableList),
};

export default RepoList;
