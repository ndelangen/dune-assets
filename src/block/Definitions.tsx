import { FC, PropsWithChildren } from 'react';

import styles from './Definitions.module.css';

export const Definitions: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className={styles.main}>{children}</div>
);
