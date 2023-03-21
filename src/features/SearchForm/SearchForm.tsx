import React from 'react';
import { Btn } from 'shared/Btn';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './searchform.module.css';

export function SearchForm() {
  return (
    <form className={styles.form}>
      <input
        type='text'
        name='search'
        placeholder='Поиск...'
        className={styles.inp}
      />
      <div className={styles.btn}>
        {<Btn icon={<SvgIcon type='search' />} />}
      </div>
    </form>
  );
}
