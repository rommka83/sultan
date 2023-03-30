import React from 'react';
import { Link } from 'react-router-dom';
import styles from './crumbs.module.css';

interface IProps {
  path: 'catalog' | 'bascet' | 'product' | 'cosmetic';
  name?: string;
}

export function Crumbs({ path, name }: IProps) {
  const renderPath = function () {
    switch (path) {
      case 'catalog':
        return <li className={styles.item}>Каталог</li>;
      case 'bascet':
        return <li className={styles.item}>Корзина</li>;
      case 'product':
        return (
          <>
            <li className={styles.item}>
              <Link to={'/catalog'}>Каталог</Link>
            </li>
            <li className={styles.item}>{name}</li>
          </>
        );
    }
  };

  return (
    <nav>
      <ul className={styles.list}>
        <>
          <li className={styles.item}>
            <Link to={'/'}>Главная</Link>
          </li>
          {renderPath()}
        </>
      </ul>
    </nav>
  );
}
