import { type FC } from 'react';
import { z } from 'zod';

import { Spice } from '../data/objects';
import * as styles from './Card.module.css';
import * as unique from './Spice.module.css';
import { MarkdownContent } from '../block/MarkdownContent';
import { useCountId } from '../utils/useCountId';

const edgeColor = '#000';
const foreGroundColor = '#F8F6E2';
const highLightColor = '#9E5F00';

export const SpiceCard: FC<z.infer<typeof Spice>> = ({
  name,
  subName,
  icon,
  text,
  amount,
  highlights,
  overlays,
}) => {
  const prefix = useCountId();
  const decalsFilter = `${prefix}decals-filter`;

  return (
    <div className={styles.card}>
      <div className={`${styles.head} ${unique.head}`} />
      <div className={styles.head_shade} />
      <div className={`${styles.shape} ${unique.shape}`} />
      <div className={`${styles.type} ${unique.type}`}>
        <img src={`/vector/icon/${icon}.svg`} className={unique.typeOverlay} />
        <img src={`/vector/icon/${icon}.svg`} className={unique.typeShade} />
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.subtitle}>{subName}</div>

      <svg
        className={unique.map}
        viewBox="0 0 487.06 487.06"
        xmlSpace="preserve"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <use xlinkHref={'/vector/background/map.svg#root'}></use>
      </svg>

      <svg
        className={unique.map_overlay}
        viewBox="0 0 487.06 487.06"
        xmlSpace="preserve"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <defs>
          <filter id={decalsFilter}>
            <feColorMatrix
              result="CONTRASTED"
              in="SourceAlpha"
              type="matrix"
              values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 34 0"
            />
            <feMorphology in="CONTRASTED" result="DILATED0" operator="dilate" radius="5"></feMorphology>
            <feMorphology in="CONTRASTED" result="DILATED1" operator="dilate" radius="3"></feMorphology>
            <feMorphology in="CONTRASTED" result="DILATED2" operator="dilate" radius="1"></feMorphology>
            <feFlood floodColor={foreGroundColor} floodOpacity="1" result="PINK0"></feFlood>
            <feFlood floodColor={edgeColor} floodOpacity="1" result="PINK1"></feFlood>
            <feFlood floodColor={highLightColor} floodOpacity="1" result="PINK2"></feFlood>
            <feComposite in="PINK0" in2="DILATED0" operator="in" result="OUTLINE0"></feComposite>
            <feComposite in="PINK1" in2="DILATED1" operator="in" result="OUTLINE1"></feComposite>
            <feComposite in="PINK2" in2="DILATED2" operator="in" result="OUTLINE2"></feComposite>
            <feMerge>
              <feMergeNode in="OUTLINE0" />
              <feMergeNode in="OUTLINE1" />
              <feMergeNode in="OUTLINE2" />
            </feMerge>
          </filter>
          <mask id={`${prefix}mask`}>
            {highlights.map((territory) => (
              <use key={territory} xlinkHref={`/vector/background/map.svg#${territory}`}></use>
            ))}
          </mask>
        </defs>

        <g filter={`url(#${decalsFilter})`}>
          <rect width="100%" height="100%" mask={`url(#${prefix}mask)`} fill={edgeColor}></rect>
        </g>

        <use xlinkHref={'/vector/background/map.svg#sectors'}></use>
        {overlays?.map((overlay) => (
          <image
            href={overlay.image}
            x={overlay.offset[0]}
            y={overlay.offset[1]}
            width={overlay.scale}
            height={overlay.scale}
          />
        ))}
      </svg>

      <div className={unique.body}>
        <div>
          <MarkdownContent
            value={
              text ||
              (icon === 'spice-mine'
                ? `Place a **spice mine** of ${amount} on\n${name}`
                : `Add **${amount} spice** to\n${name}`)
            }
          />
        </div>
      </div>

      <div className={unique.count}>{amount}</div>
    </div>
  );
};
