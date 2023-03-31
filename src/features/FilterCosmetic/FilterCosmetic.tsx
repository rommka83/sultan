import { nanoid } from '@reduxjs/toolkit';
import { filter, reset } from 'app/store/catalogProductsStore';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  changeListManufacturer,
  manufacturerReset,
} from 'app/store/manufaturers';
import { enterType, typesOfCareReset } from 'app/store/typeOfCarSlice';
import { IProduct } from 'app/types/product';
import React from 'react';
import styles from './filtercosmetic.module.css';

interface IProps {
  type?: 'gorizontal' | 'vertical';
}

export function FilterCosmetic({ type = 'gorizontal' }: IProps) {
  const typesOfCare = useAppSelector(
    (state) => state.typesOfCareSlice.typesOfCare
  );
  const dispatch = useAppDispatch();

  const hendleClick = function (e: { activ: boolean; text: string }) {
    let _arr = typesOfCare.map((el) => {
      return el === e ? { ...el, activ: true } : { ...el, activ: false };
    });

    const oldData = localStorage.getItem('catalogProduct');
    let ARR = [];
    if (oldData)
      ARR = JSON.parse(oldData).filter((el: IProduct) => {
        return el.typeOfCare.indexOf(e.text.toLowerCase()) > -1;
      });
    dispatch(changeListManufacturer(ARR));

    dispatch(enterType(_arr));
    dispatch(filter(e.text));
    window.scroll(0, 0);
  };

  return (
    <ul
      className={
        type === 'gorizontal' ? styles.listHead : styles.listVerticalHead
      }
    >
      <>
        {typesOfCare.map((e) => {
          return (
            <li
              className={`${styles.itemHead} ${e.activ && styles.itemActiv}`}
              onClick={() => hendleClick(e)}
              key={nanoid()}
            >
              {e.text}
            </li>
          );
        })}
        <li
          className={styles.itemHead}
          onClick={() => {
            dispatch(typesOfCareReset());
            dispatch(reset());
            dispatch(manufacturerReset());
          }}
          key={nanoid()}
        >
          Сброс фильтров
        </li>
      </>
    </ul>
  );
}
