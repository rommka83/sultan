import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './myselect.module.css';

const typeOfCare = ['вес', 'объём'];

interface IProps {
  f?: () => void;
}

export function MySelect({ f }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(typeOfCare[0]);
  const [list, setList] = useState(
    typeOfCare.filter((e) => e !== typeOfCare[0])
  );

  const setInputValue = function (el: string) {
    setValue(el);
    setList(() => {
      return typeOfCare.filter((e) => e !== el);
    });
  };

  return (
    <div className={styles.select}>
      <div className={styles.form}>
        <input
          type='text'
          className={styles.inp}
          onClick={() => setIsOpen(!isOpen)}
          value={value}
          readOnly
        />
        <div className={`${styles.arrow} ${isOpen && styles.arrowIsOpen}`}>
          <SvgIcon type='arrovBottom' />
        </div>
      </div>
      {isOpen && (
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
