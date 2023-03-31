/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navlist.module.css';

interface IProps {
  f?: () => void;
}

export function NavList({ f }: IProps) {
  return (
    <ul className={styles.list}>
      <li className={styles.item} onClick={f}>
        <a className={styles.link} href='#'>
          О компании
        </a>
      </li>
      <li className={styles.item} onClick={f}>
        <a className={styles.link} href='#'>
          Доставка и оплата
        </a>
      </li>
      <li className={styles.item} onClick={f}>
        <a className={styles.link} href='#'>
          Возврат
        </a>
      </li>
      <li className={styles.item} onClick={f}>
        <a className={styles.link} href='#'>
          Контакты
        </a>
      </li>
      <li className={styles.item} onClick={f}>
        <Link to='sultan/admin' className={styles.link}>
          Админка
        </Link>
      </li>
    </ul>
  );
}
