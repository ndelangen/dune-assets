import { FC, PropsWithChildren } from 'react';

import styles from './Text.module.css';

export const Text: FC<PropsWithChildren<{ columns?: number; size?: number }>> = ({
  columns = 1,
  size = 2,
  children,
}) => (
  <div
    className={styles.main}
    style={{
      ...(columns ? { columns, gap: '4vw' } : {}),
      fontSize: `${size}vw`,
      lineHeight: `${size * 1.6}vw`,
    }}
  >
    {children}
  </div>
);

export const NonBreaking: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.nonBreaking}>{children}</div>
);
