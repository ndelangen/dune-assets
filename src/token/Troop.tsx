import { FC } from 'react';
import { z } from 'zod';

import { TroopSide } from '../data/objects';
import * as styles from './Troop.module.css';

export const TroopToken: FC<z.infer<typeof TroopSide>> = ({ background, image, star, striped }) => (
  <div className={styles.disc} style={{ background }}>
    <div className={styles.content}>
      <img className={styles.image} src={image} alt="troop" />
      {star && <img src={star} alt="star" />}
    </div>
  </div>
);
