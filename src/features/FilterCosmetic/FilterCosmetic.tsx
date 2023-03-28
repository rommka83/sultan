import { nanoid } from '@reduxjs/toolkit';
import { filter, reset } from 'app/store/catalogProductsStore';
import { useAppDispatch } from 'app/store/hooks';
import React from 'react';
import styles from './filtercosmetic.module.css';

const typesOfCare = [
  { activ: false, text: 'Уход за телом' },
  { activ: false, text: 'Уход за руками' },
  { activ: false, text: 'Уход за ногами' },
  { activ: false, text: 'Уход за лицом' },
  { activ: false, text: 'Уход за волосами' },
  { activ: false, text: 'Средства для загара' },
  { activ: false, text: 'Средства для бритья' },
  { activ: false, text: 'Подарочные наборы' },
  { activ: false, text: 'Гигиеническая продукция' },
  { activ: false, text: 'Гигиена полости рта' },
  { activ: false, text: 'Бумажная продукция' },
];
interface IProps {
  type?: 'gorizontal' | 'vertical';
}

export function FilterCosmetic({ type = 'gorizontal' }: IProps) {
  const dispatch = useAppDispatch();

  const hendleClick = function (e: { activ: boolean; text: string }) {
    typesOfCare.map((el) => {
      el === e ? (el.activ = true) : (el.activ = false);
    });
    dispatch(filter(e.text));
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
            typesOfCare.map((e) => (e.activ = false));
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
