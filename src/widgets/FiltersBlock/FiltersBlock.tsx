import { FilterCosmetic } from 'features/FilterCosmetic';
import { FilterManufacturer } from 'features/FilterManufacturer';
import { FilterPrice } from 'features/FilterPrice';
import React from 'react';
import styles from './filtersblock.module.css';

export function FiltersBlock() {
  return (
    <aside className={styles.root}>
      <h3 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
      <FilterPrice />
      <FilterManufacturer />
      <div className={styles.care}>
        <h4 className={styles.subtitle}>Виды ухода</h4>
        <FilterCosmetic type='vertical' />
      </div>
    </aside>
  );
}
