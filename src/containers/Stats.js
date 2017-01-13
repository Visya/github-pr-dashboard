import { connect } from 'react-redux';

import Stats from 'components/Stats';

export default connect(
  ({ pr }) => {
    const prAmount = pr.get('allIds').size;

    return {
      open: pr.get('byId').filter(item => item.get('state') === 'open').size,
      linesPerPr: (pr.get('byId').reduce((memo, item) => memo + item.get('linesChanged'), 0) / prAmount).toFixed(2),
      filesPerPr: (pr.get('byId').reduce((memo, item) => memo + item.get('filesChanged'), 0) / prAmount).toFixed(2),
    };
  },
)(Stats);
