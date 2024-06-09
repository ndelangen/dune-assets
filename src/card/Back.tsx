import { type FC } from 'react';
import { z } from 'zod';

import { Spice } from '../data/objects';
import * as styles from './Back.module.css';
import { useCountId } from '../utils/useCountId';

const edgeColor = '#000';
const foreGroundColor = '#F8F6E2';
const highLightColor = '#9E5F00';

export const CardBack: FC<z.infer<typeof Spice>> = ({}) => {
  const prefix = useCountId();

  return (
    <div className={styles.card}>
      <div
        className={styles.bg}
        style={{ backgroundImage: 'url("/generated/utils/background/special.jpg")', filter: 'blur(2px)' }}
      />
      <div
        className={styles.decal_bg_1}
        style={{
          filter: 'drop-shadow(0 0 3px black) drop-shadow(0 0 8px black)',
        }}
      />
      <div
        className={styles.decal_bg_2}
        style={{
          filter: 'drop-shadow(0 0 3px black) drop-shadow(0 0 8px black)',
        }}
      />
    </div>
  );
};
