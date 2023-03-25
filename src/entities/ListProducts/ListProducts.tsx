import React from 'react';
import styles from './listproducts.module.css';
import { IProduct } from './../../app/types/product';
import { CardProduct } from 'entities/CardProduct';

interface IProps {
  data: IProduct[];
}

export function ListProducts({ data }: IProps) {
  return (
    <ul className={styles.list}>
      {data.map((product) => {
        return (
          <li className={styles.item} key={product.id}>
            <CardProduct
              url={product.url}
              description={product.description}
              sizeType={product.sizeType}
              size={product.size}
              name={product.name}
              barcode={product.barcode}
              manufacturer={product.manufacturer}
              brand={product.brand}
              price={product.price}
            />
          </li>
        );
      })}
    </ul>
  );
}
