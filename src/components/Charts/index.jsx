import { Map, fromJS } from 'immutable';
import React, { PropTypes } from 'react';

import TimeChart from 'components/Chart';
import { Tab, Tabs } from 'material-ui';

const tabs = [
  {
    label: 'Open/Closed',
    Chart: TimeChart,
    id: 'openClosed',
  },
];

function renderTab({ label, Chart }, data) { // eslint-disable-line
  return (
    <Tab label={ label } key={ label }>
      <Chart data={ data } />
    </Tab>
  );
}

const Charts = ({
  groupedData = fromJS({}),
}) => (
  <Tabs>
    { tabs.map(tab => renderTab(tab, groupedData[tab.id])) }
  </Tabs>
);

Charts.propTypes = {
  groupedData: PropTypes.instanceOf(Map),
};

export default Charts;
