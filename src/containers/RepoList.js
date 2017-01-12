import { connect } from 'react-redux';

import RepoList from 'components/RepoList';

export default connect(
  ({ repo }) => ({
    repos: repo.get('allIds'),
  }),
)(RepoList);
