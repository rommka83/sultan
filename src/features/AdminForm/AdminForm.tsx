import { nanoid } from '@reduxjs/toolkit';
import {
  localStorageAdded,
  localStorageRedacted,
} from 'app/store/catalogProductsStore';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { resetMultySelect } from 'app/store/multySelectStore';
import { IProduct } from 'app/types/product';
import { Back } from 'features/Back';
import { MyMultySelect } from 'features/MyMultySelect';
import { MySelect } from 'features/MySelect';
import React, { useMemo, useState } from 'react';
import { Btn } from 'shared/Btn';
import styles from './adminform.module.css';

export function AdminForm() {
  const [disabled, setDisabled] = useState(true);
  const [barcodListOpen, setBarcodListOpen] = useState(false);
  const [barcodList, setBarcodList] = useState([]);

  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [barcode, setBarcode] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const multySelectStore = useAppSelector((state) => state.multySelectValue);
  const dispatch = useAppDispatch();

  const added = function () {
    let obj: IProduct = {
      id: nanoid(),
      url,
      name: name.trim(),
      sizeType: document.forms[1].elements[2].getAttribute('value'),
      size: size.trim(),
      barcode: barcode === '' ? String(Date.now()) : barcode,
      manufacturer: manufacturer.trim(),
      brand: brand.trim(),
      description: description.trim(),
      price: +price.trim(),
      typeOfCare: multySelectStore.value.split(','),
      cosmeticType: !disabled,
    };

    dispatch(localStorageAdded(obj));
    dispatch(resetMultySelect());
    setUrl('');
    setName('');
    setSize('');
    setBarcode('');
    setManufacturer('');
    setBrand('');
    setDescription('');
    setPrice('');
    setDisabled(true);
  };

  const searhBarCod = function () {
    let oldData = localStorage.getItem('catalogProduct');
    if (!oldData) return;
    const arr = JSON.parse(oldData)
      .map((e: IProduct) => {
        return e.barcode.indexOf(barcode) > -1 ? e.barcode : null;
      })
      .filter((e: string) => e !== null);
    setBarcodList(arr);
  };

  const searchProduct = function (cod: string) {
    let oldData = localStorage.getItem('catalogProduct');
    if (!oldData) return;
    const arr = JSON.parse(oldData);
    const prod = arr.find((el: IProduct) => el.barcode === cod);
    return { prod, arr };
  };

  const enterBarCod = function (cod: string) {
    const prod = searchProduct(cod)?.prod;
    if (prod === undefined) return;
    setUrl(prod.url);
    setName(prod.name);
    setSize(prod.size);
    setBarcode(prod.barcode);
    setManufacturer(prod.manufacturer);
    setBrand(prod.brand);
    setDescription(prod.description);
    setPrice(String(prod.price));
  };

  const redactedProduct = function () {
    const prod: IProduct = searchProduct(barcode)?.prod;
    const arr = searchProduct(barcode)?.arr;
    if (prod === undefined) return;
    let newArr: IProduct[] = [];
    newArr = arr.map((el: IProduct) => {
      return el.barcode !== prod.barcode
        ? el
        : {
            ...el,
            url,
            name: name.trim(),
            sizeType: document.forms[1].elements[2].getAttribute('value'),
            size: size.trim(),
            barcode: barcode === '' ? String(Date.now()) : barcode,
            manufacturer: manufacturer.trim(),
            brand: brand.trim(),
            description: description.trim(),
            price: +price.trim(),
            typeOfCare: multySelectStore.value.split(','),
            cosmeticType: !disabled,
          };
    });
    dispatch(localStorageRedacted(newArr));
    dispatch(resetMultySelect());
    setUrl('');
    setName('');
    setSize('');
    setBarcode('');
    setManufacturer('');
    setBrand('');
    setDescription('');
    setPrice('');
    setDisabled(true);
  };

  const deletProduct = function () {
    const prod = searchProduct(barcode)?.prod;
    const arr = searchProduct(barcode)?.arr;
    if (prod === undefined) return;
    let newArr: IProduct[] = arr.filter(
      (el: IProduct) => el.barcode !== prod.barcode
    );
    dispatch(localStorageRedacted(newArr));
    dispatch(resetMultySelect());
    setUrl('');
    setName('');
    setSize('');
    setBarcode('');
    setManufacturer('');
    setBrand('');
    setDescription('');
    setPrice('');
    setDisabled(true);
  };

  const nullValidate = useMemo(() => {
    return url === '' ||
      name === '' ||
      size === '' ||
      manufacturer === '' ||
      brand === '' ||
      description === '' ||
      price === ''
      ? false
      : true;
  }, [brand, description, manufacturer, name, price, size, url]);

  return (
    <div className={`${styles.wrapper} container`}>
      <Back />
      <form className={styles.form}>
        <h2 className={styles.title}>
          Добавить, редактировать, удалить товар (поля подсвеченные крассным -
          обязательны к заполнению!)
        </h2>
        <label className={styles.label}>
          Название:
          <input
            type='text'
            className={`${styles.inp} ${name === '' && styles.inpNull}`}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className={styles.label}>
          Url картинки:
          <input
            type='text'
            className={`${styles.inp} ${url === '' && styles.inpNull}`}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          тип размера (вес/объем):
          <MySelect />
        </label>
        <label className={styles.label}>
          размер:
          <input
            type='text'
            className={`${styles.inp} ${size === '' && styles.inpNull}`}
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          штрихкод (EAN-13):
          <input
            type='text'
            className={styles.inp}
            value={barcode}
            onKeyUpCapture={searhBarCod}
            onChange={(e) => {
              setBarcode(e.target.value);
              setBarcodListOpen(true);
            }}
          />
          {barcodListOpen && barcodList.length > 0 && (
            <ul className={styles.barcodList}>
              {barcodList.map((el) => {
                return (
                  <li
                    className={styles.barcodItem}
                    key={el}
                    onClick={() => {
                      enterBarCod(el);
                      setBarcodListOpen(false);
                    }}
                  >
                    {el}
                  </li>
                );
              })}
            </ul>
          )}
        </label>
        <label className={styles.label}>
          производитель:
          <input
            type='text'
            className={`${styles.inp} ${manufacturer === '' && styles.inpNull}`}
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Бренд:
          <input
            type='text'
            className={`${styles.inp} ${brand === '' && styles.inpNull}`}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          описание:
          <input
            type='text'
            className={`${styles.inp} ${description === '' && styles.inpNull}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          цена:
          <input
            type='text'
            className={`${styles.inp} ${price === '' && styles.inpNull}`}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          это средство для ухода?
          <input
            type='checkbox'
            className={styles.chbox}
            checked={!disabled}
            onChange={(e) => {
              e.target.checked ? setDisabled(false) : setDisabled(true);
            }}
          />
        </label>
        <label className={styles.label}>
          тип ухода:
          <MyMultySelect disabled={disabled} />
        </label>
      </form>
      <div className={styles.blockBtn}>
        <Btn text='Добавить' f={added} sitze='small' disabled={!nullValidate} />
        <Btn
          text='Изменить'
          sitze='small'
          f={redactedProduct}
          disabled={!nullValidate}
        />
        <Btn
          text='Удалить'
          sitze='small'
          f={deletProduct}
          disabled={!nullValidate}
        />
      </div>
    </div>
  );
}
