import { useMemo, type FC } from 'react';
import { z } from 'zod';

import { TroopSide } from '../data/objects';
import * as styles from './Troop.module.css';
import { StrokedUse } from '../utils/StrokedUse';
import { useCountId } from '../utils/useCountId';

const foreGroundColor = '#e3dbb3';
const iconSize = { width: 100, height: 100 };
const iconLocation = { x: 50 - iconSize.width / 2, y: 50 - iconSize.height / 2 };

export const TroopToken: FC<z.infer<typeof TroopSide>> = ({ background, image, star, striped }) => {
  const cid = useCountId();
  const prefix = useMemo(() => `${cid}_`, [cid]);

  const stripedMask = `${prefix}striped-mask`;
  const shadeMask = `${prefix}shade-mask`;

  return (
    <div className={styles.disc} style={{ background }}>
      <svg className={styles.content} viewBox="0 0 100 100">
        <defs>
          <mask id={stripedMask} maskUnits="userSpaceOnUse">
            <StrokedUse
              xlinkHref={`${image}#root`}
              {...iconLocation}
              {...iconSize}
              fill="white"
              stroke="white"
            />
            {striped && (
              <>
                <rect fill="black" height="2" width="100" y="20" />
                <rect fill="black" height="2" width="100" y="40" />
                <rect fill="black" height="2" width="100" y="60" />
                <rect fill="black" height="2" width="100" y="80" />
              </>
            )}
          </mask>
          <mask id={shadeMask} maskUnits="userSpaceOnUse">
            <StrokedUse
              xlinkHref={`${image}#root`}
              {...iconLocation}
              {...iconSize}
              fill="white"
              stroke="white"
              strokeWidth="8%"
            />
          </mask>
        </defs>

        {star && (
          <circle
            cx="450"
            cy="450"
            fill={`${foreGroundColor}77`}
            id="mainCircle"
            opacity={0.5}
            r="280"
            stroke={foreGroundColor}
            strokeWidth={24}
          />
        )}

        <rect fill="rgba(0,0,0,0.4)" width="100" height="100" mask={`url(#${shadeMask})`} />
        <rect fill={foreGroundColor} width="100" height="100" mask={`url(#${stripedMask})`} />
      </svg>
    </div>
  );
};
