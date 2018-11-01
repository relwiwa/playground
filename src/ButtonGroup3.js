import React from 'react';

import styles from './ButtonGroup3.module.css';

class ButtonGroup extends React.Component {
  render() {
    return <div className={styles.buttonGroup}
    >
      {this.props.children({
        type: this.props.type,
      })}
    </div>;
  }
}

export default ButtonGroup;
