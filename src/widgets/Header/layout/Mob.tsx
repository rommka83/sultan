import { Basket } from 'features/Basket';
import { NavList } from 'features/NavList';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Btn } from 'shared/Btn';
import { BtnTransparent } from 'shared/BtnTransparent';
import { Logo } from 'shared/Logo';
import { SvgIcon } from 'shared/SvgIcon';
import { VerticalLine } from 'shared/VerticalLine';
import styles from './mobile.module.css';

export function Mob() {
  const [isOpen, setIsOpen] = useState(false);
  const hendleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.layoutTop}>
          <Btn icon={<SvgIcon type='burger' />} f={hendleClick} />
          <Logo />
          <Basket />
          {isOpen && (
            <div className={styles.menu}>
              <NavList f={hendleClick} />
            </div>
          )}
        </div>
        <div className={styles.layoutBottom}>
          <Link to='/catalog'>
            <BtnTransparent
              icon={<SvgIcon type='catalog' color='#3f4e65' />}
              text='Каталог'
            />
          </Link>
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
