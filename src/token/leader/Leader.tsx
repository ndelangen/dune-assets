import { useMemo, type FC } from 'react';
import { z } from 'zod';

import { Leader } from '../../data/objects';
import * as styles from './Leader.module.css';
import { StrokedUse } from '../../utils/StrokedUse';
import { useCountId } from '../../utils/useCountId';

const foreGroundColor = '#ffffff';

export const CustomToken: FC<z.infer<typeof Leader>> = ({ background, image, logo, name, strength }) => {
  const iconSize = { width: 41, height: 41 };
  const iconLocation = { x: 150 - iconSize.width / 2, y: 220 };

  const cid = useCountId();
  const prefix = useMemo(() => `${cid}_`, [cid]);

  const curvedTextPath = `${prefix}curvedTextPath`;

  const discMask = `${prefix}mask-disc`;

  return (
    <div className={styles.disc} style={{ background }}>
      <svg viewBox="0 0 300 300">
        <defs>
          <path id={curvedTextPath} d="M 10 135 m 0 0 a 140 140 0 0 0 280 0" />

          <mask id={discMask} maskUnits="userSpaceOnUse">
            <rect width="300" height="300" fill="black" />
            <circle cx="150" cy="131" fill="white" r="115"></circle>
            <StrokedUse
              xlinkHref={`${logo}#root`}
              {...iconLocation}
              {...iconSize}
              fill="black"
              stroke="black"
              strokeWidth="20%"
            />
            <text
              className={styles.strength}
              fill="black"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16.6px"
              textAnchor="end"
              x="276"
              y="186"
            >
              {strength}
            </text>
          </mask>
        </defs>

        <image height={230} mask={`url(#${discMask})`} width={230} x={35} xlinkHref={image} y={16.6} />
        <circle
          cx="150"
          cy="131"
          fill="transparent"
          id="mainCircle"
          mask={`url(#${discMask})`}
          r="115"
          stroke={foreGroundColor}
          strokeWidth={6.6}
        />

        <text className={styles.strength} textAnchor="end" fill={foreGroundColor} x="276" y="186">
          {strength}
        </text>

        <text>
          <textPath
            className={styles.name}
            fill={foreGroundColor}
            filter={'drop-shadow(0 0 1.75rem rgba(0,0,0,0.6))'}
            startOffset="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            xlinkHref={`#${curvedTextPath}`}
          >
            {name}
          </textPath>
        </text>

        <StrokedUse xlinkHref={`${logo}#root`} {...iconLocation} {...iconSize} fill={foreGroundColor} />
      </svg>
    </div>
  );
};
