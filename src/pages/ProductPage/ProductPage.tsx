import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import { Crumbs } from 'features/Crumbs';
import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Btn } from 'shared/Btn';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './productpage.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { basketAdd } from 'app/store/basketSlice';
import { Link } from 'react-router-dom';
import { TypeSize } from 'shared/TypeSize';
import { Counter } from 'features/Counter';
import { IProductInBasket } from 'app/types/basket';

export function ProductPage() {
  const params = useParams();
  const productsCatalog = useAppSelector(
    (state) => state.productsCatalog.products
  );
  const basket = useAppSelector((state) => state.basket.data);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);
  const [descOpen, setDescOpen] = useState(false);
  const [charOpen, setCharOpen] = useState(false);
  const product = useMemo(() => {
    let _prod = productsCatalog.find((el) => el.barcode === params.product);
    return _prod !== undefined && _prod;
  }, [params.product, productsCatalog]);

  const basketAdded = function () {
    if (basket.generalCount === 0 && product) {
      dispatch(
        basketAdd({
          generalPrice: product.price * value,
          generalCount: value,
          productsInBasket: [
            { product: product, price: product.price * value, count: value },
          ],
        })
      );
    } else if (basket.generalCount !== 0 && product) {
      let _oldProd = basket.productsInBasket.find(
        (el: IProductInBasket) => el.product.id === product.id
      );
      if (_oldProd !== undefined) {
        dispatch(
          basketAdd({
            generalPrice: basket.generalPrice + product.price * value,
            generalCount: basket.generalCount + value,
            productsInBasket: basket.productsInBasket.map((el) => {
              return el.product.id !== _oldProd?.product.id
                ? el
                : {
                    product,
                    price: _oldProd.price + product.price * value,
                    count: _oldProd.count + value,
                  };
            }),
          })
        );
      } else {
        dispatch(
          basketAdd({
            generalPrice: basket.generalPrice + product.price * value,
            generalCount: basket.generalCount + value,
            productsInBasket: [
              ...basket.productsInBasket,
              {
                product,
                price: product.price * value,
                count: value,
              },
            ],
          })
        );
      }
    }
  };

  const decr = function () {
    value > 1 && setValue(value - 1);
  };
  const incr = function () {
    setValue(value + 1);
  };

  return (
    <main className={`${styles.root} container`}>
      {product && (
        <>
          <Crumbs path='product' name={product?.name} />
          <section className={styles.section}>
            <img
              src={product?.url}
              alt={product?.name}
              className={styles.pic}
            />
            <div className={styles.desc}>
              <p className={styles.availability}>В наличии</p>
              <p className={styles.name}>
                <strong>{product?.name}</strong>
                {` ${product?.description}`}
              </p>
              <div className={styles.size}>
                <TypeSize obj={product} />
              </div>
              <div className={styles.blockBascet}>
                <span className={styles.price}>{product?.price} ₸</span>
                <div className={styles.counter}>
                  <Counter value={value} f1={decr} f2={incr} />
                </div>
                <Link to='/catalog'>
                  <Btn
                    text='В корзину'
                    icon={<SvgIcon type='basket' color='var(--color-8)' />}
                    f={basketAdded}
                  />
                </Link>
              </div>
              <ul className={styles.listAction}>
                <li className={`${styles.itemAction} ${styles.share}`}>
                  <SvgIcon type='share' />
                </li>
                <li className={`${styles.itemAction} ${styles.textAction}`}>
                  <div>
                    При покупке от <strong>10 000 ₸</strong> бесплатная доставка
                    по Кокчетаву и области
                  </div>
                </li>
                <li className={`${styles.itemAction} ${styles.priceList}`}>
                  <span>Прайс-лист</span>
                  <SvgIcon type='download' color='var(--color-2)' />
                </li>
              </ul>
              <ul className={styles.descList}>
                <li className={styles.descItem}>
                  Производитель: <span>{product?.manufacturer}</span>
                </li>
                <li className={styles.descItem}>
                  Бренд: <span>{product?.brand}</span>
                </li>
                <li className={styles.descItem}>
                  Артикул: <span>{product?.barcode.slice(0, 5)}</span>
                </li>
                <li className={styles.descItem}>
                  Штрихкод: <span>{product?.barcode}</span>
                </li>
              </ul>
              <div className={styles.description}>
                <button
                  className={`${styles.btn} ${descOpen && styles.btnIsOpen}`}
                  onClick={() => setDescOpen(!descOpen)}
                >
                  Описание
                </button>
                {descOpen && (
                  <p>
                    {product?.description} Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Minus, exercitationem quam
                    commodi earum natus voluptates, ipsa laudantium reiciendis,
                    dicta repudiandae deserunt qui repellat at incidunt?
                    Deserunt facere asperiores nisi. Modi.
                  </p>
                )}
              </div>
              <div className={styles.characteristic}>
                <button
                  className={`${styles.btn} ${charOpen && styles.btnIsOpen}`}
                  onClick={() => setCharOpen(!charOpen)}
                >
                  Характеристики
                </button>
                {charOpen && (
                  <ul>
                    {product !== undefined &&
                      Object.entries(product).map((el) => {
                        return (
                          <li className={styles.descItem} key={nanoid()}>
                            {el[0]}: <span>{el[1]}</span>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
