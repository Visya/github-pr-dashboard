import { handleActions } from 'redux-actions';
import { fromJS, OrderedMap } from 'immutable';

import { GET_PR_SUCCESS } from 'constants';

const initialState = fromJS({
  // TODO: Ordered map allows to work with reviews in much easier way
  // unfortunately we cannot guarantee that the order of the prs will
  // always be correct, so need to revise this
  byId: OrderedMap(),
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
    byId: { [pr.number]: normalizePr(pr) },
  }).update('allIds', allIds => allIds.push(String(pr.number))),
}, initialState);
