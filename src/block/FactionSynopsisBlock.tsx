import { FC, PropsWithChildren } from 'react';

import styles from './FactionSynopsisBlock.module.css';

export const FactionSynopsisBlock: FC<PropsWithChildren<{ flip?: boolean }>> = ({ flip, children }) => (
  <div className={`${styles.base} ${flip ? styles.flipped : styles.unflipped}`}>{children}</div>
);
