import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

export function Home() {
  return (
    <main className={`${styles.root} container`}>
      <Link to='catalog'>
        <div className={styles.message}>
          Страница в разработке, для входа в каталог кликните на элемент или
          кнопку "Каталог" в шапке.
        </div>
      </Link>
    </main>
  );
}
