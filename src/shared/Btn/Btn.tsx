import React, { ReactElement } from 'react';
import styles from './btn.module.css';

interface IBtn {
  text?: string;
  icon?: ReactElement;
  f?: () => void;
  color?: string;
  sitze?: 'big' | 'small';
  pading?: string;
  disabled?: boolean;
}

export function Btn({
  text,
  icon,
  f,
  color = 'var(--color-5)',
  sitze = 'big',
  pading,
  disabled,
}: IBtn) {
  return (
    <button
      disabled={disabled}
      style={
        !disabled
          ? { backgroundColor: color, padding: pading }
          : { padding: pading }
      }
      onClick={f}
      className={`${styles.btn} ${!text && styles.btnRing} ${
        text && sitze === 'big' && styles.btnBig
      } ${text && sitze === 'small' && styles.btnSmall}`}
    >
      <>
        {text}
        {icon && <div className={styles.icon}>{icon}</div>}
      </>
    </button>
  );
}
