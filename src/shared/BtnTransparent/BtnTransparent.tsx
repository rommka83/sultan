import React, { ReactElement } from 'react';
import styles from './btntransparent.module.css';

interface IBtn {
  text?: string;
  icon?: ReactElement;
  f?: () => void;
}

export function BtnTransparent({ text, icon, f }: IBtn) {
  return (
    <button className={styles.btn} onClick={f}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
}
