import { basketAdd } from 'app/store/basketSlice';
import { useAppSelector, useAppDispatch } from 'app/store/hooks';
import { IProductInBasket } from 'app/types/basket';
import { IProduct } from 'app/types/product';
import React from 'react';
import { Link } from 'react-router-dom';
import { Btn } from 'shared/Btn';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './cardproduct.module.css';

interface IProps {
  product: IProduct;
}

export function CardProduct({ product }: IProps) {
  const basket = useAppSelector((state) => state.basket.data);
  const dispatch = useAppDispatch();

  const basketAdded = function () {
    if (basket.generalCount === 0) {
      dispatch(
        basketAdd({
          generalPrice: product.price,
          generalCount: 1,
          productsInBasket: [
            { product: product, price: product.price, count: 1 },
          ],
        })
      );
    } else if (basket.generalCount !== 0) {
      let _oldProd = basket.productsInBasket.find(
        (el: IProductInBasket) => el.product.id === product.id
      );
      if (_oldProd !== undefined) {
        dispatch(
          basketAdd({
            generalPrice: basket.generalPrice + product.price,
            generalCount: basket.generalCount + 1,
            productsInBasket: basket.productsInBasket.map((el) => {
              return el.product.id !== _oldProd?.product.id
                ? el
                : {
                    product,
                    price: _oldProd.price + product.price,
                    count: _oldProd.count + 1,
                  };
            }),
          })
        );
      } else {
        dispatch(
          basketAdd({
            generalPrice: basket.generalPrice + product.price,
            generalCount: basket.generalCount + 1,
            productsInBasket: [
              ...basket.productsInBasket,
              {
                product,
                price: product.price,
                count: 1,
              },
            ],
          })
        );
      }
    }
  };

  return (
    <article className={styles.card}>
      <Link to={`/catalog/${product.barcode}`}>
        <img
          className={styles.img}
          src={product.url}
          alt={product.description}
        ></img>
      </Link>
      <div className={styles.size}>
        <div
          className={
            product.sizeType === 'вес' ? styles.sizeType1 : styles.sizeType2
          }
        >
          {product.sizeType === 'вес' ? (
            <SvgIcon type='boxOpen' />
          ) : (
            <SvgIcon type='bottle' />
          )}
        </div>
        <span className={styles.sizeValue}>
          {product.size} {product.sizeType === 'вес' ? 'г' : 'мл'}
        </span>
      </div>
      <p className={styles.description}>
        <strong>{product.name}</strong>
        {' ' + product.description}
      </p>
      <p className={styles.subtitle}>
        Штрихкод: <span>{product.barcode}</span>
      </p>
      <p className={styles.subtitle}>
        Производитель: <span>{product.manufacturer}</span>
      </p>
      <p className={styles.subtitle}>
        Бренд: <span>{product.brand}</span>
      </p>
      <div className={styles.blockBottom}>
        <span className={styles.price}>{product.price} ₸</span>
        <Btn
          text='В КОРЗИНУ'
          icon={<SvgIcon type='basket' color='#fff' />}
          sitze='small'
          f={basketAdded}
        />
      </div>
    </article>
  );
}
