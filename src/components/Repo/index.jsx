import React, { PropTypes } from 'react';

import Overview from 'components/Overview';
import Charts from 'components/Charts';

const Repository = ({
  name = 'My Repo',
  id = '0',
}) => (
  <div>
    <h2>{name}</h2>
    <Overview repository={ id } />
    <Charts repository={ id } />
  </div>
);

Repository.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Repository;
