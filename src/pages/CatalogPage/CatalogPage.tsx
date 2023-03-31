/* eslint-disable react-hooks/exhaustive-deps */
import { reset } from 'app/store/catalogProductsStore';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { typesOfCareReset } from 'app/store/typeOfCarSlice';
import { ListProducts } from 'entities/ListProducts';
import { Crumbs } from 'features/Crumbs';
import React, { useEffect } from 'react';
import { CatalogHead } from 'widgets/CatalogHead';
import { FiltersBlock } from 'widgets/FiltersBlock';
import styles from './catalogpage.module.css';

export function CatalogPage() {
  const productsCatalog = useAppSelector(
    (state) => state.productsCatalog.products
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    productsCatalog.length === 0 &&
      setTimeout(() => {
        dispatch(reset());
        dispatch(typesOfCareReset());
      }, 1500);
  }, [productsCatalog]);
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
      {productsCatalog.length > 0 ? (
        <>
          <div className={styles.listProducts}>
            <ListProducts data={productsCatalog} />
          </div>
        </>
      ) : (
        <div className={styles.noProduct}>
          К сожалению по Вашему запросу ничего не найдено(
        </div>
      )}
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
