import { AuxiliaryLinks } from 'features/AuxiliaryLinks';
import { BackCall } from 'features/BackCall';
import { NavList } from 'features/NavList';
import { SearchForm } from 'features/SearchForm';
import React from 'react';
import { Btn } from 'shared/Btn';
import { Logo } from 'shared/Logo';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.navigation}>
          {
            <AuxiliaryLinks
              icon={<SvgIcon type='navigation' />}
              link={'г. Кокчетав, ул. Ж. Ташенова 129Б'}
              explanation={'(Рынок Восточный)'}
              href={'#'}
            />
          }
        </div>
        <div className={styles.mail}>
          {
            <AuxiliaryLinks
              icon={<SvgIcon type='mail' />}
              link={'opt.sultan@mail.ru'}
              explanation={'На связи в любое время'}
              href={'#'}
            />
          }
        </div>
        <nav className={styles.nav}>{<NavList />}</nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.btnCatalog}>
          <Btn text='Каталог' icon={<SvgIcon type='catalog' />} />
        </div>
        <div className={styles.search}>
          <SearchForm />
        </div>
        <div className={styles.backCall}>
          <BackCall />
        </div>
        <div className={styles.btnPrice}>
          <Btn text='Прайс-лист' icon={<SvgIcon type='download' />} />
        </div>
      </div>
    </header>
  );
}
