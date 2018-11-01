import React from 'react';

import styles from './ButtonGroup.module.css';

const ButtonGroup = ({ children, type }) => <div className={styles.buttonGroup}>
  {React.Children.map(children, child => React.cloneElement(
    child, {
      style: {background: 'red'},
      type: 'tc-cargo',
    }
  ))}
</div>;

export default ButtonGroup;
