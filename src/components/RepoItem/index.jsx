import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import ListItem from 'material-ui/List/ListItem';

import styles from './styles.scss';

const Repo = ({
  id,
  name,
}) => (
  <Link to={ `/repo/${id}` } className={ styles.repo }>
    <ListItem
      key={ name }
      primaryText={ name }
    />
  </Link>
);

Repo.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Repo;
