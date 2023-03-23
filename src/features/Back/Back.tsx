import React from 'react';
import { Btn } from 'shared/Btn';
import { SvgIcon } from 'shared/SvgIcon';
import styles from './back.module.css';

export function Back() {
  const handleBack = function () {
    window.history.back();
  };
  return (
    <div className={styles.root}>
      <Btn
        icon={<SvgIcon type='arrowLeft' />}
        f={handleBack}
        color='var(--color-6)'
      />
      <span className={styles.text}>НАЗАД</span>
    </div>
  );
}
