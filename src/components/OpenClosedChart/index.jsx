import React, { PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import styles from './styles.scss';

const OpenClosedChart = ({
  data,
  height = 300,
  width = 400,
  openColor = '#FF3D00',
  closedColor = '#76FF03',
}) => (
  <BarChart width={ width } height={ height } className={ styles.chart } data={ data }>
    <XAxis dataKey='name' />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey='open' fill={ openColor } />
    <Bar dataKey='closed' fill={ closedColor } />
  </BarChart>
);

OpenClosedChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    open: PropTypes.number,
    closed: PropTypes.number,
  })),
  height: PropTypes.number,
  width: PropTypes.number,
  closedColor: PropTypes.string,
  openColor: PropTypes.string,
};

export default OpenClosedChart;
