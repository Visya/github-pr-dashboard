import { connect } from 'react-redux';

import RepoItem from 'components/RepoItem';

export default connect(
  ({ repo }, { id }) => ({
    name: repo.getIn(['byId', id, 'name']),
  }),
)(RepoItem);
