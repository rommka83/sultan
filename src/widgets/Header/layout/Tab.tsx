import { Basket } from 'features/Basket';
import { NavList } from 'features/NavList';
import { SearchForm } from 'features/SearchForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { Btn } from 'shared/Btn';
import { Logo } from 'shared/Logo';
import { SvgIcon } from 'shared/SvgIcon';
import { VerticalLine } from 'shared/VerticalLine';
import styles from './desctop.module.css';

export function Tab() {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.layoutTop}>
          <VerticalLine hight={40} />
          <nav className={styles.nav}>{<NavList />}</nav>
        </div>
        <div className={styles.layoutBottom}>
          <Logo />
          <div className={styles.btnCatalog}>
            <Link to='/catalog'>
              <Btn text='Каталог' icon={<SvgIcon type='catalog' />} />
            </Link>
          </div>
          <div className={styles.search}>
            <SearchForm />
          </div>
          <div className={styles.basket}>
            <Basket />
          </div>
        </div>
      </div>
    </header>
  );
}
