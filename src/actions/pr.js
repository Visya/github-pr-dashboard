import { normalize } from 'normalizr';
import { pr as prSchema, prList as prListSchema } from 'schemas';

import {
  GET_PR_LIST,
  GET_PR_SUCCESS,
  GET_PR_LIST_SUCCESS,
} from 'constants';

export const getPrs = url => ({
  type: GET_PR_LIST,
  payload: { url },
});

export const getPrSuccess = response => ({
  type: GET_PR_SUCCESS,
  payload: normalize(response, prSchema),
});

export const getPrsSuccess = response => ({
  type: GET_PR_LIST_SUCCESS,
  payload: normalize(response, prListSchema),
});
