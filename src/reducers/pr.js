import { handleActions } from 'redux-actions';
import { fromJS, Map } from 'immutable';

import { GET_PR_LIST_SUCCESS } from 'constants';

const initialState = fromJS({
  byId: Map(),
  allIds: [],
});

export default handleActions({
  [GET_PR_LIST_SUCCESS]: (state, { payload }) => state.mergeDeep({
    byId: payload.entities.prs,
    allIds: payload.result,
  }),
}, initialState);
