/* eslint-disable react-hooks/exhaustive-deps */
import { nanoid } from '@reduxjs/toolkit';
import { reset, sort } from 'app/store/catalogProductsStore';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import { checked } from 'app/store/manufaturers';
import { IProduct } from 'app/types/product';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './blockcheckbox.module.css';

export function BlockCheckBox() {
  const productsCatalog = useAppSelector(
    (state) => state.productsCatalog.products
  );
  const manufacturers = useAppSelector(
    (state) => state.manufacturers.manufacturers
  );
  const dispatch = useAppDispatch();
  const [list, setList] = useState(manufacturers.slice(0, 4));

  const [lenght, setLenght] = useState(false);
  const filter = useMemo(() => {
    return manufacturers.filter((e) => e.checked).map((e) => e.manufacturer);
  }, [manufacturers]);

  const handleClick = function () {
    setLenght(!lenght);
    console.log(list.length);
    !lenght
      ? Array.from(list).splice(0, 4)
      : (Array.from(list).length = manufacturers.length);
  };

  useEffect(() => {
    setList(() => {
      return lenght ? manufacturers : manufacturers.slice(0, 4);
    });
    let _arr: IProduct[] = [];

    if (filter.length > 0) {
      productsCatalog
        .map((e) => {
          return filter.indexOf(e.manufacturer) > -1 ? e : null;
        })
        .map((el) => (el !== null ? _arr.push(el) : el));

      dispatch(sort(_arr));
    }
  }, [filter, manufacturers, lenght]);

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {list.map((el) => {
          return (
            <li
              className={styles.item}
              key={nanoid()}
              onClick={(e) => {
                dispatch(reset());
                dispatch(checked(el));
              }}
            >
              <label className={styles.label}>
                <input
                  type='checkbox'
                  className={styles.inp}
                  checked={el.checked}
                  readOnly
                />
                <span>{`${el.manufacturer} (${el.count})`}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <button
        className={`${styles.btn} ${lenght && styles.btn_open}`}
        onClick={handleClick}
      >
        Показать все
      </button>
    </div>
  );
}
