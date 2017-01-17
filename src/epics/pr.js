import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';

import { GET_PR_LIST } from 'constants';
import { getPrsSuccess } from 'actions/pr';

const headers = { Authorization: `token ${process.env.TOKEN}` };

const findPr = url => ajax
  .getJSON(url, headers);

export default function findAll($action) {
  return $action
  .ofType(GET_PR_LIST)
  .map(action => action.payload.url)
  .mergeMap(url => ajax.getJSON(`${url}?state=all`, headers))
  .mergeMap(prs => Observable.forkJoin(
    ...prs.map(pr => findPr(pr.url)),
  ))
  .map(getPrsSuccess);
}
