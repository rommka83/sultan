import React, { useEffect, useMemo, useState } from 'react';
import styles from './listproducts.module.css';
import { CardProduct } from 'entities/CardProduct';
import { IProduct } from 'app/types/product';
import { SvgIcon } from 'shared/SvgIcon';
import { nanoid } from '@reduxjs/toolkit';

interface IProps {
  data: IProduct[];
}

export function ListProducts({ data }: IProps) {
  const [number, setNumber] = useState(0);

  const list = useMemo(() => sliceIntoChunks(data, 6), [data]);

  const numbers = useMemo(() => {
    return list.length > 1 ? list.map((_, i) => i) : null;
  }, [list]);

  const myScroll = function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  function sliceIntoChunks(arr: IProduct[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  useEffect(() => {
    setNumber(0);
  }, [data]);

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {(list[number] || list).map((product) => {
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
      {numbers && (
        <ul className={styles.pagesList}>
          <li
            className={`${styles.pagesArrow} ${styles.left}`}
            onClick={() => {
              myScroll();
              setNumber(number === 0 ? 0 : number - 1);
            }}
          >
            <SvgIcon type='arrowLeft' color='var(--color-5)' />
          </li>
          {numbers.map((el) => {
            return (
              <li
                className={`${styles.pagesItem} ${
                  number === el && styles.pagesItemActive
                }`}
                key={nanoid()}
                onClick={() => {
                  myScroll();
                  setNumber(el);
                }}
              >
                {el + 1}
              </li>
            );
          })}
          <li
            className={`${styles.pagesArrow} ${styles.right}`}
            onClick={() => {
              myScroll();
              setNumber(
                number === numbers[numbers.length - 1]
                  ? numbers[numbers.length - 1]
                  : number + 1
              );
            }}
          >
            <SvgIcon type='arrowLeft' color='var(--color-5)' />
          </li>
        </ul>
      )}
    </div>
  );
}
