import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import { SEARCH_REPO_SUCCESS } from 'constants';

const initialState = fromJS({
  allIds: [],
  byId: {},
  totalCount: 0,
});

export default handleActions({
  [SEARCH_REPO_SUCCESS]: (state, { payload: { items, total_count } }) => {
    const normalizedItems = items.reduce(({ allIds, byId }, { id, name, url }) => ({
      allIds: [...allIds, String(id)],
      byId: { ...byId, [id]: { name, url } },
    }), {
      allIds: [],
      byId: {},
    });

    return fromJS({
      ...normalizedItems,
      totalCount: total_count,
    });
  },
}, initialState);
