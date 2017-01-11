import React, { PropTypes } from 'react';
import { Map, fromJS } from 'immutable';

import GridList from 'material-ui/GridList/GridList';
import GridTile from 'material-ui/GridList/GridTile';
import Stat from 'components/Stat';

import styles from './styles.scss';

const mockRepoStats = fromJS({
  readyToMerge: { label: 'ready to merge', value: 5 },
  waiting: { label: 'waiting for review', value: 10 },
  lines: { label: 'lines per pr', value: 100 },
  files: { label: 'files per pr', value: 5.5 },
});

const renderStats = stats => stats.map(stat => (<Stat
  value={ stat.get('value') }
  label={ stat.get('label') }
  key={ stat.get('label') }
/>));

const Stats = ({
  main = fromJS({ label: 'open', value: 15 }),
  repoStats = mockRepoStats,
}) => (
  <GridList cellHeight={ 180 } style={ { width: 400 } }>
    <GridTile>
      <div className={ styles.main }>
        <p className='mdl-typography--display-4'>{ main.get('value', 0) }</p>
        <p className='mdl-typography--title'>{ main.get('label', '') }</p>
      </div>
    </GridTile>
    <GridTile>
      <div className={ styles.stats }>
        { renderStats(repoStats) }
      </div>
    </GridTile>
  </GridList>
);

Stats.propTypes = {
  main: PropTypes.instanceOf(Map),
  repoStats: PropTypes.instanceOf(Map),
};

export default Stats;
