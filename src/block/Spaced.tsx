import { FC, PropsWithChildren } from 'react';

import styles from './Spaced.module.css';

export const Spaced: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className={styles.main}>{children}</div>
);
