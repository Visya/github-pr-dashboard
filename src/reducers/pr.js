import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

import { GET_PR_SUCCESS } from 'constants';

const initialState = fromJS({
  byId: {},
  allIds: [],
});

const normalizePr = pr => ({
  id: pr.id,
  number: pr.number,
  state: pr.state,
  createdAt: pr.created_at,
  closedAt: pr.closed_at,
  linesChanged: pr.additions + pr.deletions,
  filesChanged: pr.changed_files,
});

export default handleActions({
  [GET_PR_SUCCESS]: (state, { payload: { pr } }) => state.mergeDeep({
    byId: { [pr.id]: normalizePr(pr) },
  }).update('allIds', allIds => allIds.push(pr.id)),
}, initialState);
