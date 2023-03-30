import { Back } from 'features/Back';
import { FilterCosmetic } from 'features/FilterCosmetic';
import { Sort } from 'features/Sort';
import { Btn } from 'shared/Btn';
import { SvgIcon } from 'shared/SvgIcon';
import { FiltersBlock } from 'widgets/FiltersBlock';
import styles from './styles/mob.module.css';
import { useState } from 'react';

export function Mob() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={styles.root}>
      <div className={styles.Back}>
        <Back />
      </div>
      <h1 className={styles.title}>Косметика и гигиена</h1>
      {isOpen ? (
        <div className={styles.FiltersBlock}>
          <FiltersBlock />
        </div>
      ) : (
        <span className={`${styles.FiltersBlock} ${styles.span}`}>
          ПОДБОР ПО ПАРАМЕТРАМ
        </span>
      )}
      <div className={`${styles.Btn} ${isOpen && styles.BtnIsOpen}`}>
        <Btn
          icon={<SvgIcon type='arrovBottom' />}
          color='var(--color-6)'
          f={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={styles.FilterCosmetic}>
        <FilterCosmetic type='vertical' />
      </div>
      <div className={styles.sort}>
        <Sort sortList={['Название', 'Цена']} />
      </div>
    </section>
  );
}
