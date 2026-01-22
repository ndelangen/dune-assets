import { FC } from 'react';
import { z } from 'zod';

import { Background as BackGroundType, GRADIENT } from '../data/objects';
import styles from './Background.module.css';

export const Background: FC<z.infer<typeof BackGroundType>> = ({
  colors,
  image,
  opacity = 0, // Set default opacity
  strength = 0, // Set default strength
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600px"
      height="600px"
      viewBox="0 0 100 100"
      className={styles.container}
    >
      <defs>
        <pattern id="texture" width="100" height="100" patternUnits="userSpaceOnUse">
          <g filter={`invert(${1 + strength * 0.01})`}>
            <image xlinkHref={image} width="100" height="100" filter={`brightness(${1 + opacity * 0.01})`} />
          </g>
        </pattern>
        <mask id="texture-mask">
          <rect x="0" y="0" width="100" height="100" fill="url(#texture)" />
        </mask>
        {colors.map((color, i) => {
          if (!GRADIENT.safeParse(color).success) {
            return null;
          }

          const data = GRADIENT.parse(color);
          if (data.type === 'linear') {
            const { angle, stops } = data;

            const radians = (angle * Math.PI) / 180;
            const cos = Math.cos(radians);
            const sin = Math.sin(radians);

            const x1 = 0.5 - cos / 2;
            const y1 = 0.5 + sin / 2;
            const x2 = 0.5 + cos / 2;
            const y2 = 0.5 - sin / 2;
            return (
              <linearGradient key={i} id={`gradient-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}>
                {stops.map(([stopColor, stopScale], j) => (
                  <stop key={j} offset={`${stopScale * 100}%`} stopColor={stopColor} />
                ))}
              </linearGradient>
            );
          }

          if (data.type === 'radial') {
            const { x = 50, y = 50, r = 80, stops } = data;
            return (
              <radialGradient key={i} id={`gradient-${i}`} cx={`${x}%`} cy={`${y}%`} r={`${r}%`}>
                {stops.map(([stopColor, stopScale], j) => (
                  <stop key={j} offset={`${stopScale * 100}%`} stopColor={stopColor} />
                ))}
              </radialGradient>
            );
          }
        })}
      </defs>

      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        fill={typeof colors[0] === 'string' ? colors[0] : 'url(#gradient-0)'}
      />
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        fill={typeof colors[1] === 'string' ? colors[1] : 'url(#gradient-1)'}
        mask="url(#texture-mask)"
      />
    </svg>
  );
};
