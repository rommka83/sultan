/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './navlist.module.css';

export function NavList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href='#'>
          О компании
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href='#'>
          Доставка и оплата
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href='#'>
          Возврат
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href='#'>
          Контакты
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href='#'>
          Админка
        </a>
      </li>
    </ul>
  );
}
