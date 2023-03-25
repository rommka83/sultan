import { type } from 'os';
import React from 'react';
import { Btn } from 'shared/Btn';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './cardproduct.module.css';

interface IProps {
  id?: string;
  url: string;
  name: string;
  sizeType: string | null;
  size: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  description: string;
  price: string;
  typeOfCare?: string[];
  cosmeticType?: boolean;
}

export function CardProduct({
  url,
  description,
  sizeType,
  size,
  name,
  barcode,
  manufacturer,
  brand,
  price,
}: IProps) {
  if (sizeType === 'вес') {
  }

  return (
    <article className={styles.card}>
      <img className={styles.img} src={url} alt={description}></img>
      <div className={styles.size}>
        <div
          className={sizeType === 'вес' ? styles.sizeType1 : styles.sizeType2}
        >
          {sizeType === 'вес' ? (
            <SvgIcon type='boxOpen' />
          ) : (
            <SvgIcon type='bottle' />
          )}
        </div>
        <span className={styles.sizeValue}>
          {size} {sizeType === 'вес' ? 'г' : 'мл'}
        </span>
      </div>
      <p className={styles.description}>
        <strong>{name}</strong>
        {' ' + description}
      </p>
      <p className={styles.subtitle}>
        Штрихкод: <span>{barcode}</span>
      </p>
      <p className={styles.subtitle}>
        Производитель: <span>{manufacturer}</span>
      </p>
      <p className={styles.subtitle}>
        Бренд: <span>{brand}</span>
      </p>
      <div className={styles.blockBottom}>
        <span className={styles.price}>{price} ₸</span>
        <Btn
          text='В КОРЗИНУ'
          icon={<SvgIcon type='basket' color='#fff' />}
          sitze='small'
        />
      </div>
    </article>
  );
}
