import { FilterCosmetic } from 'features/FilterCosmetic';
import { Sort } from 'features/Sort';
import React from 'react';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './styles/desc.module.css';

export function Desk() {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Косметика и гигиена</h1>
      <div className={styles.sort}>
        <Sort sortList={['Название', 'Цена']} />
      </div>
      <div className={styles.view}>
        <div className={styles.viewBtn}>
          <SvgIcon color='var(--color-2)' type='burger' />
        </div>
        <div className={`${styles.viewBtn} ${styles.viewBtn_act}`}>
          <SvgIcon color='var(--color-2)' type='catalog' />
        </div>
      </div>
      <div className={styles.filter}>
        <FilterCosmetic />
      </div>
    </section>
  );
}
