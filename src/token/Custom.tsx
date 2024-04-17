import { type FC } from 'react';
import { z } from 'zod';

import { FactionSide } from '../data/objects';
import * as styles from './Custom.module.css';
import { StrokedUse } from '../block/StrokedUse';

const foreGroundColor = '#ffffff';

export const CustomToken: FC<
  z.infer<typeof FactionSide> & {
    circle: boolean;
    top?: string;
    bottom?: string;
    size?: { width: number; height: number };
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  }
> = ({ background, image, circle, top, bottom, size, fill, stroke, strokeWidth }) => {
  const iconSize = { width: size?.width || 100, height: size?.width || 100 };
  const iconLocation = { x: 150 - iconSize.width / 2, y: 150 - iconSize.height / 2 };
  return (
    <div className={styles.disc} style={{ background }}>
      <svg viewBox="0 0 300 300">
        <defs>
          {top && <path id="top-text" d="M 50 150 m 0 0 a 100 100 0 0 1 200 0" />}
          {bottom && (
            <>
              <path id="bottom-text-1" d="M 60 150 m 0 0 a 90 90 0 0 0 180 0" />
              <path id="bottom-text-2" d="M 45 150 m 0 0 a 105 105 0 0 0 210 0" />
            </>
          )}
        </defs>

        <g filter={'drop-shadow( 0 0 9px rgba(0, 0, 0, 0.6))'}>
          <StrokedUse
            xlinkHref={`${image}#root`}
            {...iconLocation}
            {...iconSize}
            fill={fill || foreGroundColor}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
        <g filter={'drop-shadow( 0 0 24px rgba(0, 0, 0, 0.6))'}>
          <StrokedUse
            xlinkHref={`${image}#root`}
            {...iconLocation}
            {...iconSize}
            fill={fill || foreGroundColor}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
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

        {top && (
          <g filter="drop-shadow(0 0 5px rgb(0 0 0 / 1))">
            <text className={styles.h1}>
              <textPath
                startOffset="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                xlinkHref="#top-text"
              >
                {top}
              </textPath>
            </text>
          </g>
        )}
        {bottom && (
          <g filter="drop-shadow(0 0 5px rgb(0 0 0 / 1))">
            <text className={styles.h2}>
              <textPath
                startOffset="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                xlinkHref="#bottom-text-1"
              >
                {bottom.split('\n')[0]}
              </textPath>
            </text>
            <text className={styles.h2}>
              <textPath
                startOffset="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                xlinkHref="#bottom-text-2"
              >
                {bottom.split('\n')[1]}
              </textPath>
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
