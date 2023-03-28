/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Btn } from 'shared/Btn';
import { Logo } from 'shared/Logo';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Logo color='var(--color-8)' />
            <p className={styles.sultanDescription}>
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </p>
            <p className={styles.actionText}>Подпишись на скидки и акции</p>
            <div className={styles.mailInp}>
              <span>Введите ваш E-mail</span>
              <div className={styles.btnInp}>
                <SvgIcon type='arrowLeft' color='var(--color-8)' />
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtytle}>Меню сайта:</h3>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href='#'>О компании</a>
              </li>
              <li className={styles.navItem}>
                <a href='#'>Доставка и оплата</a>
              </li>
              <li className={styles.navItem}>
                <a href='#'>Возврат</a>
              </li>
              <li className={styles.navItem}>
                <a href='#'>Контакты</a>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtytle}>Категории:</h3>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href='#'>Бытовая химия</a>
              </li>
              <li className={styles.navItem}>
                <a href='#'>Косметика и гигиена</a>
              </li>
              <li className={styles.navItem}>
                <a href='#'>Товары для дома</a>
              </li>
              <li className={styles.navItem}>
                <a href='#'>Товары для детей и мам</a>
              </li>
              <li className={styles.navItem}>
                <a href='#'>Посуда</a>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtytle}>Категории:</h3>
            <Btn text='Прайс-лист' icon={<SvgIcon type='download' />} />
            <p className={styles.actionText}>Связь в мессенджерах:</p>
            <ul className={styles.socialList}>
              <li className={styles.socialItem}>
                <SvgIcon type='WA' />
              </li>
              <li className={styles.socialItem}>
                <SvgIcon type='TG' />
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtytle}>Контакты:</h3>
            <a href='#' className={styles.link}>
              +7 (777) 490-00-91
            </a>
            <p className={styles.linkdesc}>время работы: 9:00-20:00</p>
            <a href='#' className={styles.linkSmall}>
              Заказать звонок
            </a>
            <a href='#' className={styles.link}>
              opt.sultan@mail.ru
            </a>
            <p className={styles.linkdesc}>На связи в любое время</p>
            <ul className={styles.manyList}>
              <li className={styles.manyItem}>
                <SvgIcon type='Visa' />
              </li>
              <li className={styles.manyItem}>
                <SvgIcon type='MCard' />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
