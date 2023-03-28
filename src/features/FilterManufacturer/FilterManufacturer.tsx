import { BlockCheckBox } from 'features/BlockCheckBox';
import { SearchForm } from 'features/SearchForm';
import React from 'react';
import styles from './filtermanufacturer.module.css';

export function FilterManufacturer() {
  return (
    <div className={styles.manufacturer}>
      <h4 className={styles.subtitle}>Производитель</h4>
      <SearchForm type='manufacturer' />
      <BlockCheckBox />
    </div>
  );
}
