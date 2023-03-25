import React from 'react';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './basket.module.css';

export function Basket() {
  return (
    <div className={styles.root}>
      <div className={styles.blockBasket}>
        <button className={styles.btnBasket}>
          <SvgIcon type='basket' color='var(--color-2)' />
        </button>
        <div className={styles.count}>3</div>
      </div>
      <div className={styles.blockText}>
        <p className={styles.name}>Корзина</p>
        <p className={styles.price}>12 478 ₸</p>
      </div>
    </div>
  );
}
