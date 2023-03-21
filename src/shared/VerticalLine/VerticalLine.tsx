import React from 'react';
import styles from './verticalline.module.css';

interface IProps {
  hight: number;
}

export function VerticalLine({ hight }: IProps) {
  return <div className={styles.line} style={{ height: hight }}></div>;
}
