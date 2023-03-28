import { reset, sort } from 'app/store/catalogProductsStore';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { checkboxReset } from 'app/store/manufaturers';
import { IProduct } from 'app/types/product';
import React, { useRef, useState } from 'react';
import { Btn } from 'shared/Btn';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './searchform.module.css';

interface IProps {
  type?: 'name' | 'manufacturer';
}

export function SearchForm({ type }: IProps) {
  const productsCatalog = useAppSelector(
    (state) => state.productsCatalog.products
  );
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const [workArr, setWorkArr] = useState<IProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const form = useRef(null);

  document.addEventListener('click', (e: MouseEvent) => {
    e.target !== form.current && setIsOpen(false);
    setValue('');
  });

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  };

  const search = function () {
    value.length >= 2 && type === 'manufacturer'
      ? setWorkArr(
          productsCatalog.filter((prod) =>
            prod.manufacturer.toLowerCase().includes(value.toLowerCase())
          )
        )
      : setWorkArr(
          productsCatalog.filter((prod) =>
            prod.name.toLowerCase().includes(value.toLowerCase())
          )
        );

    workArr.length > 0 && value.length > 2 ? setIsOpen(true) : setIsOpen(false);
  };

  const handleClick = function () {
    dispatch(sort(workArr));
    setValue('');
  };

  return (
    <form
      className={styles.form}
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <input
        type='text'
        name='search'
        placeholder='Поиск...'
        className={styles.inp}
        value={value}
        onKeyUp={search}
        onKeyDown={() => {
          dispatch(reset());
          dispatch(checkboxReset());
        }}
        onChange={(e) => handleChange(e)}
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   handleClick();
        // }}
      />
      <Btn icon={<SvgIcon type='search' />} f={handleClick} />
      {isOpen && (
        <ul className={styles.srarchList}>
          {workArr.map((el) => {
            return (
              <li
                className={styles.srarchItem}
                key={el.id}
                onClick={handleClick}
              >
                {type === 'manufacturer' ? el.manufacturer : el.name}
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
}
