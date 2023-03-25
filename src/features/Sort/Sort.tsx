/* eslint-disable react-hooks/exhaustive-deps */
import { nanoid } from '@reduxjs/toolkit';
import { sort } from 'app/store/catalogProductsStore';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import React, { useEffect, useState } from 'react';
import styles from './sort.module.css';

interface IProps {
  sortList: string[];
}

export function Sort({ sortList }: IProps) {
  const productsCatalog = useAppSelector(
    (state) => state.productsCatalog.products
  );
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(sortList[0]);
  const [list, setList] = useState(sortList.filter((el) => el !== value));
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState(false);

  const handleClick = function (e: string) {
    setValue(e);
    setList(sortList.filter((el) => el !== e));
    setIsOpen(false);
  };

  useEffect(() => {
    switch (value) {
      case 'Название':
        switch (direction) {
          case false:
            dispatch(
              sort(
                Array.from(productsCatalog).sort((a, b) =>
                  a.name < b.name ? 1 : -1
                )
              )
            );
            break;
          case true:
            dispatch(
              sort(
                Array.from(productsCatalog).sort((a, b) =>
                  a.name > b.name ? 1 : -1
                )
              )
            );
            break;
        }
        break;
      case 'Цена':
        switch (direction) {
          case false:
            dispatch(
              sort(
                Array.from(productsCatalog).sort((a, b) =>
                  +a.price < +b.price ? 1 : -1
                )
              )
            );
            break;
          case true:
            dispatch(
              sort(
                Array.from(productsCatalog).sort((a, b) =>
                  +a.price > +b.price ? 1 : -1
                )
              )
            );
            break;
        }
        break;
    }
  }, [value, direction]);

  return (
    <div className={styles.BlockSort}>
      <span className={styles.label}>Сортировка:</span>
      <div className={styles.sort}>
        <input
          type='text'
          className={styles.inp}
          value={value}
          readOnly
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <ul className={styles.list}>
            {list.map((el) => {
              return (
                <li
                  className={styles.item}
                  onClick={() => handleClick(el)}
                  key={nanoid()}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <button
        className={`${styles.btn} ${direction && styles.btnUp}`}
        onClick={() => setDirection(!direction)}
      ></button>
    </div>
  );
}
