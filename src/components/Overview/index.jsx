import React from 'react';

import Paper from 'material-ui/Paper';
import Stat from 'components/Stat';

import styles from './styles.scss';

const stats = [
  { label: 'open', value: 15 },
  { label: 'ready to merge', value: 5 },
  { label: 'waiting for review', value: 10 },
  { label: 'lines per pr', value: 100 },
  { label: 'files per pr', value: 5.5 },
];

const Overview = () => (
  <Paper className={ styles.overview }>
    {
      stats.map(stat => (<Stat
        value={ stat.value }
        label={ stat.label }
        key={ stat.label }
      />))
    }
  </Paper>
);

export default Overview;
