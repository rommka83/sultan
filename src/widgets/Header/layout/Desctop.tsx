import { AuxiliaryLinks } from 'features/AuxiliaryLinks';
import { BackCall } from 'features/BackCall';
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

export function Desctop() {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.layoutTop}>
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
          <VerticalLine hight={40} />
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
          <div className={styles.backCall}>
            <BackCall />
          </div>
          <div className={styles.btnPrice}>
            <VerticalLine hight={50} />
            <Btn text='Прайс-лист' icon={<SvgIcon type='download' />} />
            <VerticalLine hight={50} />
          </div>
          <div className={styles.basket}>
            <Basket />
          </div>
        </div>
      </div>
    </header>
  );
}
