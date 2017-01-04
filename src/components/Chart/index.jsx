import { List, fromJS } from 'immutable';
import React, { PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import styles from './styles.scss';

const mockData = fromJS([
  { week: 1, open: 3, closed: 0 },
  { week: 2, open: 4, closed: 2 },
  { week: 3, open: 2, closed: 6 },
]);

const Chart = ({
  data = mockData,
  height = 300,
  width = 600,
  openColor = '#FF3D00',
  closedColor = '#76FF03',
}) => (
  <BarChart width={ width } height={ height } className={ styles.chart } data={ data }>
    <XAxis datakey='week' />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar datakey='open' fill={ openColor } />
    <Bar datakey='closed' fill={ closedColor } />
  </BarChart>
);

Chart.propTypes = {
  data: PropTypes.instanceOf(List),
  height: PropTypes.number,
  width: PropTypes.number,
  closedColor: PropTypes.string,
  openColor: PropTypes.string,
};

export default Chart;
