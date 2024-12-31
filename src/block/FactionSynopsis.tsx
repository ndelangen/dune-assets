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
    <SideBySide>
      {[<img src={image} className={styles.image} />, <Text>{children}</Text>][flip ? 'flat' : 'reverse']()}
    </SideBySide>
  </div>
);
