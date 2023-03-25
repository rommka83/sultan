import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  resetMultySelect,
  setMultySelectValue,
} from 'app/store/multySelectStore';
import React, { useState } from 'react';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './myselect.module.css';

const typeOfCare = [
  'уход за телом',
  'уход за руками',
  'уход за ногами',
  'уход за лицом',
  'уход за волосами',
  'средства для загара',
  'средства для бритья',
  'подарочные наборы',
  'гигиеническая продукция',
  'гигиена полости рта',
  'бумажная продукция',
];

interface IProps {
  disabled?: boolean;
}

export function MyMultySelect({ disabled = true }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(typeOfCare);

  const multySelectStore = useAppSelector((state) => state.multySelectValue);
  const dispatch = useAppDispatch();

  const setInputValue = function (el: string) {
    dispatch(setMultySelectValue(el));
    setList(() => {
      return list.filter((e) => e !== el);
    });
  };
  return (
    <div className={styles.select}>
      <div className={styles.form}>
        <input
          type='text'
          className={styles.inp}
          onClick={() => setIsOpen(!isOpen)}
          value={multySelectStore.value}
          readOnly
          disabled={disabled}
        />
        <div
          className={`${styles.arrow} ${
            isOpen && list.length !== 0 && styles.arrowIsOpen
          }`}
        >
          <SvgIcon type='arrovBottom' />
        </div>
        <button
          className={styles.reset}
          onClick={(e) => {
            e.preventDefault();
            setList(typeOfCare);
            dispatch(resetMultySelect());
          }}
        >
          сбросить типы
        </button>
      </div>
      {isOpen && list.length !== 0 && (
        <ul className={styles.list}>
          {list.map((el) => {
            return (
              <li
                className={styles.item}
                onClick={(e) => {
                  e.preventDefault();
                  setInputValue(el);
                  setIsOpen(false);
                }}
                key={nanoid()}
              >
                {el}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
