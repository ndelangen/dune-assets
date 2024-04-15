import { FC } from 'react';

import styles from './Ball.module.css';

export const Ball: FC<{
  borderA?: 'dashed' | 'solid';
  borderB?: string;
}> = ({ borderA, borderB }) => (
  <div className={styles.ball}>
    {borderA && <div className={styles.borderA} style={{ borderStyle: borderA }} />}
    {borderB && <div className={styles.borderB} style={{ color: borderB }} />}
  </div>
);
