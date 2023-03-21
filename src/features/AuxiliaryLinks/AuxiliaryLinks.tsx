import React, { ReactElement } from 'react';
import styles from './auxiliarylinks.module.css';

interface ILayout {
  icon?: ReactElement;
  link: string;
  explanation: string;
  href: string;
}

export function AuxiliaryLinks({ icon, link, explanation, href }: ILayout) {
  return (
    <div className={styles.layout}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <a href={href} className={styles.link}>
        {link}
      </a>
      <span className={styles.explanation}>{explanation}</span>
    </div>
  );
}
