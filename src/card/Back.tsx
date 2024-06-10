import { type FC } from 'react';
import { z } from 'zod';

import { CardBack as CardBackType } from '../data/objects';
import * as styles from './Back.module.css';
import { useCountId } from '../utils/useCountId';

const edgeColor = '#000';
const foreGroundColor = '#F8F6E2';
const highLightColor = '#9E5F00';

const size = {
  width: 900,
  height: 1263,
};

export const CardBack: FC<z.infer<typeof CardBackType>> = ({
  image,
  background,
  name,
  imageOffset,
  imageScale,
}) => {
  const prefix = useCountId();

  const gradient = `${prefix}gradient`;
  const textMask = `${prefix}text-mask`;
  const textShadeMask = `${prefix}text-shade-mask`;

  return (
    <div className={styles.card}>
      <div className={styles.bg} style={{ backgroundImage: `url("${background}")`, filter: 'blur(2px)' }} />
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

      <div
        className={styles.icon}
        style={{
          marginLeft: imageOffset[0] - ((imageScale - 1) / 2) * 220,
          marginTop: imageOffset[1] - ((imageScale - 1) / 2) * 220,
          width: imageScale * 220,
          height: imageScale * 220,
        }}
      >
        <img src={image} />
        <img src={image} />
        <img src={image} />
      </div>

      <svg className={styles.svg}>
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
              fontFamily="C_Busorama"
              fontSize="90"
              letterSpacing="-0.7"
              style={{ textTransform: 'uppercase' }}
              textAnchor="middle"
              x="50%"
              y={size.height - 250}
            >
              {name}
            </text>
          </mask>
          <mask id={textShadeMask} maskUnits="userSpaceOnUse">
            <rect fill="black" {...size} />
            <text
              dominantBaseline="middle"
              fill="white"
              fontFamily="C_Busorama"
              fontSize="90"
              letterSpacing="-0.7"
              style={{ textTransform: 'uppercase' }}
              textAnchor="middle"
              x="50%"
              y={size.height - 250}
            >
              {name}
            </text>
            <text
              dominantBaseline="middle"
              fill="black"
              fontFamily="C_Busorama"
              fontSize="90"
              letterSpacing="-0.7"
              style={{ textTransform: 'uppercase' }}
              textAnchor="middle"
              x="50%"
              y={size.height - 254}
            >
              {name}
            </text>
          </mask>

          <filter height="300%" id="dropshadow" width="300%" x="-100%" y="-100%">
            <feDropShadow dx="0" dy="0" floodColor="#000000" floodOpacity="1" stdDeviation="8" />
            <feDropShadow dx="0" dy="0" floodColor="#000000" floodOpacity="1" stdDeviation="4" />
          </filter>
        </defs>
        <g filter={`url(#dropshadow)`}>
          <text
            dominantBaseline="middle"
            fill="black"
            fontFamily="C_Busorama"
            fontSize="90"
            letterSpacing="-0.7"
            style={{ textTransform: 'uppercase' }}
            textAnchor="middle"
            x="50%"
            y={size.height - 250}
          >
            {name}
          </text>
        </g>
        <rect
          fill={`url(#${gradient})`}
          y={size.height - 300}
          {...size}
          height={100}
          mask={`url(#${textMask})`}
        />
        <g style={{ mixBlendMode: 'overlay' }}>
          <rect fill="black" y={size.height - 300} {...size} height={100} mask={`url(#${textShadeMask})`} />
        </g>
      </svg>
    </div>
  );
};
