import React from 'react';
import styles from './counter.module.css';

interface ICounter {
  value: number;
  f1: () => void;
  f2: () => void;
}

export function Counter({ value, f1, f2 }: ICounter) {
  return (
    <div className={styles.counter}>
      <button className={styles.counterBtn} onClick={f1}>
        -
      </button>
      <input
        type='text'
        className={styles.counterValue}
        value={value}
        readOnly
      />
      <button className={styles.counterBtn} onClick={f2}>
        +
      </button>
    </div>
  );
}
