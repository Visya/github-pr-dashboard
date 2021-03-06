import { ajax } from 'rxjs/observable/dom/ajax';

import { SEARCH_REPO } from 'constants';
import { searchSuccess } from 'actions/repo';


export default function search(action$) {
  return action$
    .ofType(SEARCH_REPO)
    .debounceTime(300)
    .pluck('payload', 'text')
    .distinctUntilChanged()
    .filter(q => !!q)
    .mergeMap(query => ajax
      .getJSON(
        `https://api.github.com/search/repositories?q=${query}&sort=stars`,
        { Authorization: `token ${process.env.TOKEN}` },
      ))
    .map(searchSuccess);
}
