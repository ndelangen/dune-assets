import { FC, SVGProps, useMemo } from 'react';
import { z } from 'zod';

import { Decal } from '../data/objects';

const foreGroundColor = '#e3dbb3';
const middleColor = '#847954';

export const size = {
  width: 900,
  height: 1263,
};

const StrokedUse: FC<SVGProps<SVGUseElement>> = ({ stroke, strokeWidth, filter, ...rest }) => (
  <>
    <use {...{ filter }} {...rest} />
    <use {...rest} />
  </>
);

export function FrontDecals({ prefix, decals }: { decals: z.infer<typeof Decal>[]; prefix: string }) {
  const fadedDecals = useMemo(
    () => decals.filter((d) => typeof d !== 'string' && d.muted === true),
    [decals],
  );
  const nonFadedDecals = useMemo(
    () => decals.filter((d) => typeof d === 'string' || d.muted !== true),
    [decals],
  );
  const decalsMask = `${prefix}decals-mask`;
  const decalsFilter = `${prefix}decals-mask`;

  const decalSize = { width: 763, height: 439 };
  const stroked = { filter: `url(#${decalsFilter})` };
  const empty = {};

  return (
    <>
      {nonFadedDecals.length > 0 && (
        <defs>
          <filter id={decalsFilter}>
            <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="6"></feMorphology>
            <feFlood flood-color={foreGroundColor} flood-opacity="1" result="PINK"></feFlood>
            <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
            <feMerge>
              <feMergeNode in="OUTLINE" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}
      {fadedDecals.length > 0 && (
        <>
          <defs>
            <mask id={decalsMask} maskUnits="userSpaceOnUse">
              <rect fill="black" {...size} x={0} y={0} />
              {fadedDecals.map((d, i) => {
                const width = decalSize.width * d.scale;
                const height = decalSize.height * d.scale;
                return (
                  <image
                    key={i}
                    x={size.width / 2 - width / 2 + d.offset[0]}
                    y={940 / 2 - height / 2 + d.offset[1]}
                    width={width}
                    height={height}
                    filter="invert(100%)"
                    xlinkHref={d.id}
                  />
                );
              })}
            </mask>
          </defs>
          <rect fill={middleColor} {...size} mask={`url(#${decalsMask})`} />
        </>
      )}

      {nonFadedDecals.map((d, i) => {
        const width = decalSize.width * d.scale;
        const height = decalSize.height * d.scale;
        return (
          <StrokedUse
            key={i}
            {...(d.outline !== false ? stroked : empty)}
            xlinkHref={`${d.id}#root`}
            x={size.width / 2 - width / 2 + d.offset[0]}
            y={940 / 2 - height / 2 + d.offset[1]}
            width={width}
            height={height}
          />
        );
      })}
    </>
  );
}
