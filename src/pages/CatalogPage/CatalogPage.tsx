import { useAppSelector } from 'app/store/hooks';
import { ListProducts } from 'entities/ListProducts';
import { Crumbs } from 'features/Crumbs';
import React from 'react';
import { CatalogHead } from 'widgets/CatalogHead';
import { FiltersBlock } from 'widgets/FiltersBlock';
import styles from './catalogpage.module.css';

export function CatalogPage() {
  const productsCatalog = useAppSelector((state) => state.productsCatalog);

  return (
    <main className={`${styles.wrapper} container`}>
      <div className={styles.crumbs}>
        <Crumbs path={'product'} />
      </div>
      <div className={styles.catalogHead}>
        <CatalogHead />
      </div>
      <div className={styles.filtersBlock}>
        <FiltersBlock />
      </div>
      <div className={styles.listProducts}>
        <ListProducts data={productsCatalog.products} />
      </div>
      <span className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum
        ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate
        feugiat massa vestibulum duis. Faucibus consectetur aliquet sed
        pellentesque consequat consectetur congue mauris venenatis. Nunc elit,
        dignissim sed nulla ullamcorper enim, malesuada.
      </span>
    </main>
  );
}
