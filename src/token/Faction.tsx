import { type FC } from 'react';
import { z } from 'zod';

import { FactionSide } from '../data/objects';
import * as styles from './Faction.module.css';
import { StrokedUse } from '../block/StrokedUse';

const foreGroundColor = '#e3dbb3';
const iconSize = { width: 60, height: 60 };
const iconLocation = { x: 50 - iconSize.width / 2, y: 50 - iconSize.height / 2 };

export const FactionToken: FC<z.infer<typeof FactionSide>> = ({ background, image }) => {
  return (
    <div className={styles.disc} style={{ background }}>
      <svg className={styles.content} viewBox="0 0 100 100">
        <>
          <g filter={'drop-shadow( 0 0 3px rgba(0, 0, 0, 0.6))'}>
            <StrokedUse xlinkHref={`${image}#root`} {...iconLocation} {...iconSize} fill={foreGroundColor} />
          </g>
          <g filter={'drop-shadow( 0 0 8px rgba(0, 0, 0, 0.6))'}>
            <StrokedUse xlinkHref={`${image}#root`} {...iconLocation} {...iconSize} fill={foreGroundColor} />
          </g>
          <g filter={'drop-shadow( 0 0 3px rgba(0, 0, 0, 0.8))'}>
            <circle
              cx="50"
              cy="50"
              fill="transparent"
              id="mainCircle"
              r="46"
              stroke={foreGroundColor}
              strokeWidth={1.3}
            />
          </g>
          <g filter={'drop-shadow( 0 0 8px rgba(0, 0, 0, 0.8))'}>
            <circle
              cx="50"
              cy="50"
              fill="transparent"
              id="mainCircle"
              r="46"
              stroke={foreGroundColor}
              strokeWidth={1.3}
            />
          </g>
        </>
      </svg>
    </div>
  );
};
