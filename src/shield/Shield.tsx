import { FC } from 'react';
import { z } from 'zod';

import { Shield } from '../data/objects';
import { shield as size } from '../data/sizes';
import { useCountId } from '../utils/useCountId';
import styles from './Shield.module.css';

// shield

export const ShieldAsset: FC<z.infer<typeof Shield>> = ({ name, leader, logo }) => {
  const prefix = useCountId();

  const textMask = `_${prefix}text-mask`;
  const textShadeMask = `_${prefix}text-shade-mask`;
  const gradient = `_${prefix}gradient`;

  return (
    <div className={styles.shield} style={{ ...size }}>
      <div className={[styles.logo, styles.left].join(' ')}>
        <img src={logo} />
      </div>
      <div className={[styles.logo, styles.right].join(' ')}>
        <img src={logo} />
      </div>
      <img src={leader} className={styles.leader} />
      <div className={styles.overlay} />

      <svg {...size} className={styles.svg}>
        <defs>
          <linearGradient id={gradient} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#faf8eb" />
            <stop offset="100%" stopColor="#cfaf45" />
          </linearGradient>
          <mask id={textMask} maskUnits="userSpaceOnUse">
            <rect fill="black" {...size} />
            <text
              dominantBaseline="middle"
              fill="white"
              fontFamily="C_Desdemona"
              fontSize="65"
              letterSpacing="-0.7"
              style={{ textTransform: 'uppercase' }}
              textAnchor="middle"
              x="50%"
              y={size.height - 50 - 125}
            >
              {name}
            </text>
          </mask>
          <mask id={textShadeMask} maskUnits="userSpaceOnUse">
            <rect fill="black" {...size} />
            <text
              dominantBaseline="middle"
              fill="white"
              fontFamily="C_Desdemona"
              fontSize="65"
              letterSpacing="-0.7"
              style={{ textTransform: 'uppercase' }}
              textAnchor="middle"
              x="50%"
              y={size.height - 50 - 125}
            >
              {name}
            </text>
            <text
              dominantBaseline="middle"
              fill="black"
              fontFamily="C_Desdemona"
              fontSize="65"
              letterSpacing="-0.7"
              style={{ textTransform: 'uppercase' }}
              textAnchor="middle"
              x="50%"
              y={size.height - 50 - 254 / 2}
            >
              {name}
            </text>
          </mask>

          <filter height="300%" id="dropshadow" width="300%" x="-100%" y="-100%">
            <feDropShadow dx="0" dy="0" floodColor="#000000" floodOpacity="1" stdDeviation="8" />
            <feDropShadow dx="0" dy="0" floodColor="#000000" floodOpacity="1" stdDeviation="4" />
            <feDropShadow dx="0" dy="0" floodColor="#000000" floodOpacity="1" stdDeviation="2" />
          </filter>
        </defs>
        <g filter={`url(#dropshadow)`}>
          <text
            dominantBaseline="middle"
            fill="black"
            fontFamily="C_Desdemona"
            fontSize="75"
            letterSpacing="-0.7"
            style={{ textTransform: 'uppercase' }}
            textAnchor="middle"
            x="50%"
            y={size.height - 50 - 125}
          >
            {name}
          </text>
        </g>
        <rect
          fill={`url(#${gradient})`}
          y={size.height - 55 - 150}
          {...size}
          height={70}
          mask={`url(#${textMask})`}
        />
        <g style={{ mixBlendMode: 'overlay' }}>
          <rect
            fill="black"
            y={size.height - 55 - 150}
            {...size}
            height={70}
            mask={`url(#${textShadeMask})`}
          />
        </g>
        <g
          style={{
            mixBlendMode: 'color-burn',
            filter: 'saturate(16.2) contrast(2) grayscale(1)',
          }}
        >
          <image
            {...size}
            mask={`url(#${textMask})`}
            x={0}
            xlinkHref="'/image/shield/shield-base.png"
            y={-40}
          />
        </g>
      </svg>
    </div>
  );
};
