/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './backcall.module.css';
import img from '../../shared/img/backCall.png';

export function BackCall() {
  return (
    <div className={styles.root}>
      <div className={styles.blockLink}>
        <a className={styles.call} href='tel:+77774900091'>
          +7 (777) 490-00-91
        </a>
        <span className={styles.text}>время работы: 9:00-20:00</span>
        <a className={styles.backCall} href='#'>
          Заказать звонок
        </a>
      </div>
      <img src={img} className={styles.img} />
    </div>
  );
}
