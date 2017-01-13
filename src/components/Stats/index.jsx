import React, { PropTypes } from 'react';

import GridList from 'material-ui/GridList/GridList';
import GridTile from 'material-ui/GridList/GridTile';
import Stat from 'components/Stat';

import styles from './styles.scss';

const labels = {
  readyToMerge: 'ready to merge',
  waiting: 'waiting for review',
  linesPerPr: 'lines per pr',
  filesPerPr: 'files per pr',
};

const renderStats = stats => Object.keys(stats).map((stat) => {
  const label = labels[stat];

  return (<Stat
    value={ stats[stat] }
    label={ label }
    key={ label }
  />);
});

const Stats = ({
  open,
  linesPerPr,
  filesPerPr,
}) => (
  <GridList cellHeight={ 180 } style={ { width: 400 } }>
    <GridTile>
      <div className={ styles.main }>
        <p className='mdl-typography--display-4'>{ open }</p>
        <p className='mdl-typography--title'>open</p>
      </div>
    </GridTile>
    <GridTile>
      <div className={ styles.stats }>
        { renderStats({ linesPerPr, filesPerPr }) }
      </div>
    </GridTile>
  </GridList>
);

Stats.propTypes = {
  open: PropTypes.number,
  filesPerPr: PropTypes.string,
  linesPerPr: PropTypes.string,
};

export default Stats;
