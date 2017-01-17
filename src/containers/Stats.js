import { connect } from 'react-redux';

import Stats from 'components/Stats';

const linesChanged = pr => pr.get('additions', 0) + pr.get('deletions', 0);

export default connect(
  ({ pr }) => {
    const prAmount = pr.get('allIds').size;

    // TODO: add selectors
    return {
      open: pr.get('byId').filter(item => item.get('state') === 'open').size,
      linesPerPr: (pr.get('byId').reduce((memo, item) => memo + linesChanged(item), 0) / prAmount).toFixed(2),
      filesPerPr: (pr.get('byId').reduce((memo, item) => memo + item.get('changed_files'), 0) / prAmount).toFixed(2),
    };
  },
)(Stats);
