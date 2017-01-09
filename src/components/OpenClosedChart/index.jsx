import { List, fromJS } from 'immutable';
import React, { PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import styles from './styles.scss';

const mockData = fromJS([
  { week: 'week 1', open: 3, closed: 0 },
  { week: 'week 2', open: 4, closed: 2 },
  { week: 'week 3', open: 2, closed: 6 },
]);

const Chart = ({
  data = mockData,
  height = 300,
  width = 400,
  openColor = '#FF3D00',
  closedColor = '#76FF03',
}) => (
  <BarChart width={ width } height={ height } className={ styles.chart } data={ data.toJS() }>
    <XAxis dataKey='week' />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey='open' fill={ openColor } />
    <Bar dataKey='closed' fill={ closedColor } />
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
