import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';

import { GET_PRS } from 'constants';
import { getPrSuccess } from 'actions/pr';

const headers = { Authorization: `token ${process.env.TOKEN}` };

const findPr = url => ajax
  .getJSON(url, headers);

export default function findAll($action) {
  return $action
  .ofType(GET_PRS)
  .map(action => action.payload.url)
  .mergeMap(url => ajax.getJSON(`${url}?state=all`, headers))
  .mergeMap(prs => Observable.of(
    ...prs.map(pr => findPr(pr.url)),
  ))
  .concatAll()
  .map(getPrSuccess);
}
