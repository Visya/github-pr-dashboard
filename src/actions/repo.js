import {
  SEARCH_REPO,
  SEARCH_REPO_SUCCESS,
} from 'constants';

export const searchFor = text => ({
  type: SEARCH_REPO,
  payload: { text },
});

export const searchSuccess = payload => ({
  type: SEARCH_REPO_SUCCESS,
  payload,
});
