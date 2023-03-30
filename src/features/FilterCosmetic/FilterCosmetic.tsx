import { nanoid } from '@reduxjs/toolkit';
import { filter, reset } from 'app/store/catalogProductsStore';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { checkboxReset } from 'app/store/manufaturers';
import { enterType, typesOfCareReset } from 'app/store/typeOfCarSlice';
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
    dispatch(enterType(_arr));
    dispatch(filter(e.text));
    dispatch(checkboxReset());
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
          }}
          key={nanoid()}
        >
          Сброс фильтров
        </li>
      </>
    </ul>
  );
}
