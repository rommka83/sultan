import { Basket } from 'features/Basket';
import React from 'react';
import { Btn } from 'shared/Btn';
import { BtnTransparent } from 'shared/BtnTransparent';
import { Logo } from 'shared/Logo';
import { SvgIcon } from 'shared/SvgIcon';
import { VerticalLine } from 'shared/VerticalLine';
import styles from './mobile.module.css';

export function Mobile() {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.layoutTop}>
          <Btn icon={<SvgIcon type='burger' />} />
          <Logo />
          <Basket />
        </div>
        <div className={styles.layoutBottom}>
          <BtnTransparent
            icon={<SvgIcon type='catalog' color='#3f4e65' />}
            text='Каталог'
          />
          <VerticalLine hight={20} />
          <BtnTransparent
            icon={<SvgIcon type='search' color='#3f4e65' />}
            text='Поиск'
          />
        </div>
      </div>
    </header>
  );
}
