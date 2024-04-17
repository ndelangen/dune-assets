import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Ball.module.css';

export const Ball: FC<
  PropsWithChildren<{
    borderA?: 'dashed' | 'solid';
    borderB?: string;
  }> &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ borderA, borderB, children, ...props }) => (
  <div className={styles.ball} {...props}>
    {borderA && <div className={styles.borderA} style={{ borderStyle: borderA }} />}
    {borderB && <div className={styles.borderB} style={{ color: borderB }} />}
    {children}
  </div>
);
