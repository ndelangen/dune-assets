import { FC, PropsWithChildren } from 'react';

import styles from './FactionSynopsis.module.css';
import { SideBySide } from './Layout';
import { Text } from './Text';

export const FactionSynopsis: FC<PropsWithChildren<{ flip?: boolean; image: string }>> = ({
  flip,
  image,
  children,
}) => (
  <div className={`${styles.base} ${flip ? styles.flipped : styles.unflipped}`}>
    <div>
      <Text>{children}</Text>
    </div>
    <img src={image} className={styles.image} />
  </div>
);
