import { useAppSelector } from 'app/store/hooks';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './basket.module.css';

export function Basket() {
  const basket = useAppSelector((state) => state.basket.data);
  const [bask, setBask] = useState(basket);

  useEffect(() => {
    setBask(basket);
  }, [basket]);

  return (
    <Link to='/sultan/basket'>
      <div className={styles.root}>
        <div className={styles.blockBasket}>
          <button className={styles.btnBasket}>
            <SvgIcon type='basket' color='var(--color-2)' />
          </button>
          <div className={styles.count}>{bask.generalCount}</div>
        </div>
        <div className={styles.blockText}>
          <p className={styles.name}>Корзина</p>
          <p className={styles.price}>{bask.generalPrice} ₸</p>
        </div>
      </div>
    </Link>
  );
}
