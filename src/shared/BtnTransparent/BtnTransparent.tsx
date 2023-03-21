import React, { ReactElement } from 'react';
import styles from './btntransparent.module.css';

interface IBtn {
  text?: string;
  icon?: ReactElement;
}

export function BtnTransparent({ text, icon }: IBtn) {
  return (
    <button className={styles.btn}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
}
