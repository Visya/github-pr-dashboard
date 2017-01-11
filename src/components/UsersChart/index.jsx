import React, { PropTypes } from 'react';
import { List, fromJS } from 'immutable';

import { PieChart, Pie, Tooltip } from 'recharts';

const mockData = fromJS([
  { name: 'john', value: 4 },
  { name: 'user', value: 2 },
  { name: 'active', value: 7 },
]);

const UsersChart = ({
  color = '#76FF03',
  data = mockData,
  height = 300,
  width = 400,
}) => (
  <PieChart width={ width } height={ height }>
    <Pie
      data={ data.toJS() }
      outerRadius={ (height - 50) / 2 }
      fill={ color }
    />
    <Tooltip />
  </PieChart>
);

UsersChart.propTypes = {
  color: PropTypes.string,
  data: PropTypes.instanceOf(List),
  height: PropTypes.number,
  width: PropTypes.number,
};

export default UsersChart;
