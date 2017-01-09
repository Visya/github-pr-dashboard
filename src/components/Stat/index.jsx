import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Stat = ({
  className,
  value,
  label,
  ...props
}) => (
  <div
    className={ classnames(className, styles.stat) }
    { ...props }
  >
    <p className='mdl-typography--title'>
      <span className={ styles.value }>{ value }</span>
      { label }
    </p>
  </div>
);

Stat.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string,
};

export default Stat;
