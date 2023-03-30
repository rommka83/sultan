import { IProduct } from 'app/types/product';
import React from 'react';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './typesize.module.css';

interface IProps {
  obj: IProduct;
}

export function TypeSize({ obj }: IProps) {
  return (
    <div className={styles.size}>
      <div className={styles.sizeIcon}>
        {obj.sizeType === 'вес' ? (
          <SvgIcon type='boxOpen' />
        ) : (
          <SvgIcon type='bottle' />
        )}
      </div>
      <span className={styles.sizeValue}>
        {`${obj.size} ${obj.sizeType === 'вес' ? 'г' : 'мл'}`}
      </span>
    </div>
  );
}
