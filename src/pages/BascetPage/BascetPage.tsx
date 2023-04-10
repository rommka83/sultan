import { Desktop, Mobile, Tablet } from 'app/hooks/mediaScrin';
import { basketAdd } from 'app/store/basketSlice';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import { IProductInBasket } from 'app/types/basket';
import { Back } from 'features/Back';
import { Counter } from 'features/Counter';
import { Crumbs } from 'features/Crumbs';
import React, { useState } from 'react';
import { Btn } from 'shared/Btn';
import { SvgIcon } from 'shared/SvgIcon';
import { TypeSize } from 'shared/TypeSize';
import styles from './bascetpage.module.css';

export function BascetPage() {
  const basket = useAppSelector((state) => state.basket.data);
  const dispatch = useAppDispatch();
  const [thankYou, setThankYou] = useState(false);

  const decr = function (e: IProductInBasket) {
    if (e.count > 1) {
      dispatch(
        basketAdd({
          ...basket,
          generalCount: basket.generalCount - 1,
          generalPrice: basket.generalPrice - e.product.price,
          productsInBasket: basket.productsInBasket.map((el) => {
            return el.product.id !== e.product.id
              ? el
              : {
                  ...el,
                  count: el.count - 1,
                  price: el.price - el.product.price,
                };
          }),
        })
      );
    } else {
      delet(e);
    }
  };

  const incr = function (e: IProductInBasket) {
    dispatch(
      basketAdd({
        ...basket,
        generalCount: basket.generalCount + 1,
        generalPrice: basket.generalPrice + e.product.price,
        productsInBasket: basket.productsInBasket.map((el) => {
          return el.product.id !== e.product.id
            ? el
            : {
                ...el,
                count: el.count + 1,
                price: el.price + el.product.price,
              };
        }),
      })
    );
  };

  const delet = function (e: IProductInBasket) {
    dispatch(
      basketAdd({
        ...basket,
        generalCount: basket.generalCount - 1,
        generalPrice: basket.generalPrice - e.product.price,
        productsInBasket: basket.productsInBasket.filter(
          (el) => el.product.id !== e.product.id
        ),
      })
    );
  };

  const checkout = function () {
    dispatch(
      basketAdd({
        generalCount: 0,
        generalPrice: 0,
        productsInBasket: [],
      })
    );
    window.scroll(0, 0);
    setThankYou(true);
    setTimeout(() => {
      setThankYou(false);
    }, 1500);
  };

  return (
    <main className={`${styles.root} container`} data-testid='bascket-page'>
      <Desktop>
        <Crumbs path='bascet' />
      </Desktop>
      <Tablet>
        <Back />
      </Tablet>
      <Mobile>
        <Back />
      </Mobile>
      <h2 className={styles.title}>Корзина</h2>
      <ul className={styles.list}>
        {basket.productsInBasket.map((el) => {
          return (
            <li className={styles.item} key={el.product.id}>
              <img
                src={el.product.url}
                alt={el.product.name}
                className={styles.pic}
              />
              <div className={styles.desc}>
                <TypeSize obj={el.product} />
                <h3 className={styles.subTitle}>{el.product.name}</h3>
                <p className={styles.content}>
                  {el.product.description} Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Libero, vel debitis. Aliquam
                  suscipit nisi neque magni. Molestias ex tenetur nemo sit, rem
                  explicabo harum ullam dolore, aliquid doloribus, dignissimos
                  vero!
                </p>
              </div>
              <div className={styles.counter}>
                <Counter
                  value={el.count}
                  f1={() => decr(el)}
                  f2={() => incr(el)}
                />
              </div>
              <span className={styles.price}>{el.price} ₸</span>
              <div className={styles.del}>
                <Btn icon={<SvgIcon type='delet' />} f={() => delet(el)} />
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.total}>
        <Btn text='Оформить заказ' f={checkout} />
        {thankYou && <span className={styles.thankYou}>Спасибо за заказ!</span>}
        <span className={styles.generalPrice}>{basket.generalPrice} ₸</span>
      </div>
    </main>
  );
}
