import { IProduct } from 'app/types/product';
import { Sort } from 'features/Sort';
import React from 'react';
import styles from './cataloghead.module.css';

export function CatalogHead() {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Косметика и гигиена</h1>
      <div className={styles.sort}>
        <Sort sortList={['Название', 'Цена']} />
      </div>
      <div className={styles.view}></div>
      <div className={styles.filter}></div>
    </section>
  );
}
