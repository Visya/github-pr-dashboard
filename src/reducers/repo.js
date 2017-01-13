import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import { SEARCH_REPO_SUCCESS } from 'constants';

const initialState = fromJS({
  allIds: [],
  byId: {},
  totalCount: 0,
});

const normalizeRepo = (id, { full_name, url, pulls_url }) => ({
  id: String(id),
  name: full_name,
  url,
  prsUrl: pulls_url.split('{')[0],
});

export default handleActions({
  [SEARCH_REPO_SUCCESS]: (state, { payload: { items, total_count } }) => {
    const normalizedItems = items.reduce(({ allIds, byId }, { id, ...rest }) => ({
      allIds: [...allIds, String(id)],
      byId: { ...byId, [id]: normalizeRepo(id, rest) },
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
