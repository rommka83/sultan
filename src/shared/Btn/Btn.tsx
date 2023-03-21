import React, { ReactElement } from 'react';
import styles from './btn.module.css';

interface IBtn {
  text?: string;
  icon?: ReactElement;
}

export function Btn({ text, icon }: IBtn) {
  return (
    <button
      className={`${styles.btn} ${text ? styles.btnTxt : styles.btnRing}`}
    >
      {text && <span className={styles.text}>{text}</span>}
      {icon && <div className={styles.icon}>{icon}</div>}
    </button>
  );
}
