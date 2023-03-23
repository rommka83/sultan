import React, { ReactElement } from 'react';
import styles from './btn.module.css';

interface IBtn {
  text?: string;
  icon?: ReactElement;
  f?: () => void;
  color?: string;
}

export function Btn({ text, icon, f, color = 'var(--color-5)' }: IBtn) {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={f}
      className={`${styles.btn} ${text ? styles.btnTxt : styles.btnRing}`}
    >
      {text && (
        <span className={icon ? styles.text : styles.text1}>{text}</span>
      )}
      {icon ? <div className={styles.icon}>{icon}</div> : null}
    </button>
  );
}
