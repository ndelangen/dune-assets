import { FC, PropsWithChildren } from 'react';

import styles from './Page.module.css';

export const Page: FC<PropsWithChildren<{ pageNumber: number; background: boolean; ratio: number }>> = ({
  background,
  pageNumber,
  ratio,
  children,
}) => (
  <div className={styles.page} style={{ height: `calc(100vw * ${ratio})` }}>
    {children}
    {background && (
      <div
        className={styles.footer}
        style={{
          backgroundPosition: `bottom ${pageNumber % 2 ? 'left' : 'right'}`,
        }}
      ></div>
    )}
  </div>
);
