import React, { PropTypes } from 'react';

import GridList from 'material-ui/GridList/GridList';
import GridTile from 'material-ui/GridList/GridTile';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import Stats from 'containers/Stats';
import OpenClosedChart from 'containers/OpenClosedChart';
import UsersChart from 'components/UsersChart';

import styles from './styles.scss';

const widgets = [
  {
    Component: Stats,
    title: 'Stats',
    featured: true,
  },
  {
    Component: OpenClosedChart,
    title: 'Open/Closed',
  },
  {
    Component: UsersChart,
    title: 'Statistics by user',
  },
];

const Repo = ({
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

Repo.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Repo;
