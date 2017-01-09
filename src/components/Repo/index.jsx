import React, { PropTypes } from 'react';

import GridList from 'material-ui/GridList/GridList';
import GridTile from 'material-ui/GridList/GridTile';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import Stats from 'components/Stats';
import Chart from 'components/Chart';

import styles from './styles.scss';

const widgets = [
  // {
  //   Component: Overview,
  //   title: 'Overview',
  // },
  {
    Component: Stats,
    title: 'Stats',
    featured: true,
  },
  {
    Component: Chart,
    title: 'Open/Closed',
  },
  {
    Component: Chart,
    title: 'Statistics by user',
  },
];

const Repository = ({
  name = 'My Repo',
  id = '0',
}) => (
  <div>
    <h2 className={ styles.name }>{ name }</h2>
    <GridList cellHeight='auto'>
      {
        widgets.map(({ Component, title, featured }) => (
          <GridTile key={ title } cols={ featured ? 2 : 1 }>
            <Paper style={ { margin: 10 } }>
              <Subheader>{ title }</Subheader>
              <Component repoId={ id } />
            </Paper>
          </GridTile>
        ))
      }
    </GridList>
  </div>
);

Repository.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Repository;
