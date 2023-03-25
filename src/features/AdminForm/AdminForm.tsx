import { nanoid } from '@reduxjs/toolkit';
import { localStorageAdded } from 'app/store/catalogProductsStore';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { resetMultySelect } from 'app/store/multySelectStore';
import { IProduct } from 'app/types/product';
import { Back } from 'features/Back';
import { MyMultySelect } from 'features/MyMultySelect';
import { MySelect } from 'features/MySelect';
import React, { useState } from 'react';
import { Btn } from 'shared/Btn';
import styles from './adminform.module.css';

export function AdminForm() {
  const [disabled, setDisabled] = useState(true);

  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [barcode, setBarcode] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const productsCatalog = useAppSelector((state) => state.productsCatalog);
  const multySelectStore = useAppSelector((state) => state.multySelectValue);
  const dispatch = useAppDispatch();

  const added = function () {
    let obj: IProduct = {
      id: nanoid(),
      url,
      name,
      sizeType: document.forms[1].elements[2].getAttribute('value'),
      size,
      barcode: barcode === '' ? String(Date.now()) : barcode,
      manufacturer,
      brand,
      description,
      price,
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

  return (
    <div className={`${styles.wrapper} container`}>
      <Back />
      <form className={styles.form}>
        <h2 className={styles.title}>Добавить, редактировать, удалить товар</h2>
        <label className={styles.label}>
          Название:
          <input
            type='text'
            className={styles.inp}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Url картинки:
          <input
            type='text'
            className={styles.inp}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          тип размера (вес/объем):
          <MySelect f={() => console.log('ss')} />
        </label>
        <label className={styles.label}>
          размер:
          <input
            type='text'
            className={styles.inp}
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
            onChange={(e) => setBarcode(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          производитель:
          <input
            type='text'
            className={styles.inp}
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Бренд:
          <input
            type='text'
            className={styles.inp}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          описание:
          <input
            type='text'
            className={styles.inp}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          цена:
          <input
            type='text'
            className={styles.inp}
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
        <Btn text='Добавить' f={added} sitze='small' />
        <Btn text='Изменить' sitze='small' />
        <Btn text='Удалить' sitze='small' />
      </div>
    </div>
  );
}
