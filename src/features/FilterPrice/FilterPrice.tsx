import { reset, sort } from 'app/store/catalogProductsStore';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './filterprice.module.css';

export function FilterPrice() {
  const productsCatalog = useAppSelector(
    (state) => state.productsCatalog.products
  );
  const dispatch = useAppDispatch();

  const min =
    productsCatalog.length > 0
      ? productsCatalog.reduce((prod, curr) =>
          prod.price < curr.price ? prod : curr
        ).price
      : 0;

  const max =
    productsCatalog.length > 0
      ? productsCatalog.reduce((prod, curr) =>
          prod.price > curr.price ? prod : curr
        ).price
      : 0;

  const [priceMin, setPriceMin] = useState(min);
  const [priceMax, setPriceMax] = useState(max);
  const reg = /^\d{0,8}$/;

  const handleChangeMin = function (e: React.ChangeEvent<HTMLInputElement>) {
    if (!reg.test(e.target.value)) return;
    setPriceMin(+e.target.value);
  };

  const handleChangeMax = function (e: React.ChangeEvent<HTMLInputElement>) {
    if (!reg.test(e.target.value)) return;
    setPriceMax(+e.target.value);
  };

  const hendleKeyUp = function () {
    dispatch(
      sort(
        productsCatalog.filter(
          (prod) => prod.price >= priceMin && prod.price <= priceMax
        )
      )
    );
  };

  useEffect(() => {
    setPriceMin(min);
    setPriceMax(max);
  }, [productsCatalog]);

  return (
    <div className={styles.price}>
      <h4 className={styles.subtitle}>Цена ₸</h4>
      <div className={styles.blockPrice}>
        <input
          type='text'
          className={styles.inp}
          onKeyDown={() => dispatch(reset())}
          onKeyUp={hendleKeyUp}
          onChange={(e) => handleChangeMin(e)}
          value={priceMin}
        />
        <span>-</span>
        <input
          type='text'
          className={styles.inp}
          onKeyDown={() => dispatch(reset())}
          onKeyUp={hendleKeyUp}
          onChange={(e) => handleChangeMax(e)}
          value={priceMax}
        />
      </div>
    </div>
  );
}
