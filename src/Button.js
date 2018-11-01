import React from 'react';

import styles from './Button.module.css';

const Button = ({ children, style = null, type }) => <button className={`${styles.button} ${styles[type]}`} style={style}>{children}</button>;

export default Button;
