import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { CardProduct } from 'entities/CardProduct';
import { ListProducts } from 'entities/ListProducts';
import { Crumbs } from 'features/Crumbs';
import React from 'react';
import { CatalogHead } from 'widgets/CatalogHead';
import styles from './catalogpage.module.css';

const CatalogPage = () => {
  const productsCatalog = useAppSelector((state) => state.productsCatalog);
  // const dispatch = useAppDispatch();

  return (
    <main className='container'>
      <Crumbs path={'product'} />
      <CatalogHead />
      <ListProducts data={productsCatalog.products} />
    </main>
  );
};

export default CatalogPage;
