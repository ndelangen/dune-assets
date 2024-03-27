import { type FC } from 'react';
import { z } from 'zod';

import { FactionSide } from '../data/objects';
import * as styles from './Custom.module.css';
import { StrokedUse } from '../utils/StrokedUse';

const foreGroundColor = '#e3dbb3';
const iconSize = { width: 180, height: 180 };
const iconLocation = { x: 150 - iconSize.width / 2, y: 150 - iconSize.height / 2 };

export const CustomToken: FC<z.infer<typeof FactionSide> & { circle: boolean }> = ({
  background,
  image,
  circle,
}) => {
  return (
    <div className={styles.disc} style={{ background }}>
      <svg viewBox="0 0 300 300">
        <g filter={'drop-shadow( 0 0 9px rgba(0, 0, 0, 0.6))'}>
          <StrokedUse xlinkHref={`${image}#root`} {...iconLocation} {...iconSize} fill={foreGroundColor} />
        </g>
        <g filter={'drop-shadow( 0 0 24px rgba(0, 0, 0, 0.6))'}>
          <StrokedUse xlinkHref={`${image}#root`} {...iconLocation} {...iconSize} fill={foreGroundColor} />
        </g>
        {circle && (
          <>
            <g filter={'drop-shadow( 0 0 9px rgba(0, 0, 0, 0.8))'}>
              <circle
                cx="150"
                cy="150"
                fill="transparent"
                id="mainCircle"
                r="138"
                stroke={foreGroundColor}
                strokeWidth={1.3}
              />
            </g>
            <g filter={'drop-shadow( 0 0 24px rgba(0, 0, 0, 0.8))'}>
              <circle
                cx="150"
                cy="150"
                fill="transparent"
                id="mainCircle"
                r="138"
                stroke={foreGroundColor}
                strokeWidth={1.3}
              />
            </g>
          </>
        )}

        <defs>
          <path id="aaa" d="M 50 150 m 0 0 a 100 100 0 0 1 200 0" />
          <path id="bbb" d="M 50 150 m 0 0 a 100 100 0 0 0 200 0" />
        </defs>
        <text>
          <textPath startOffset="50%" dominant-baseline="middle" text-anchor="middle" xlinkHref="#aaa">
            zzzzz zzzzzz
          </textPath>
        </text>
        <text>
          <textPath startOffset="50%" dominant-baseline="middle" text-anchor="middle" xlinkHref="#bbb">
            aaaa aaaa
          </textPath>
        </text>
      </svg>
    </div>
  );
};
