import React, { PropTypes } from 'react';
import { List, fromJS } from 'immutable';

import Paper from 'material-ui/Paper';
import Stat from 'components/Stat';

import styles from './styles.scss';

const mockStats = fromJS([
  { label: 'open', value: 15 },
  { label: 'ready to merge', value: 5 },
  { label: 'waiting for review', value: 10 },
  { label: 'lines per pr', value: 100 },
  { label: 'files per pr', value: 5.5 },
]);

const Overview = ({
  stats = mockStats,
}) => (
  <Paper className={ styles.overview }>
    {
      stats.map(stat => (<Stat
        value={ stat.get('value') }
        label={ stat.get('label') }
        key={ stat.get('label') }
      />))
    }
  </Paper>
);
Overview.propTypes = {
  stats: PropTypes.instanceOf(List),
};

export default Overview;
