import { FC } from 'react';
import { z } from 'zod';

import { Troop } from '../data/objects';
import * as styles from './Troop.module.css';

export const TroopToken: FC<z.infer<typeof Troop>> = ({ background, image, star, striped, back }) => (
  <div className={styles.disc} style={{ background }}>
    <img src={image} alt="troop" />
  </div>
);
