import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import RepoOverview from 'components/RepoOverview';

import { getPrs } from 'actions/pr';

export default compose(
  connect(
    ({ repo }, { params: { id } }) => ({
      id,
      name: repo.getIn(['byId', id, 'name']),
      prsUrl: repo.getIn(['byId', id, 'prsUrl']),
    }),
    dispatch => ({
      getPrsFor: url => dispatch(getPrs(url)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      return this.props.getPrsFor(this.props.prsUrl);
    },
  }),
)(RepoOverview);
