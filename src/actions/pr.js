import {
  GET_PRS,
  GET_PR_SUCCESS,
} from 'constants';

export const getPrs = url => ({
  type: GET_PRS,
  payload: { url },
});

export const getPrSuccess = pr => ({
  type: GET_PR_SUCCESS,
  payload: { pr },
});
