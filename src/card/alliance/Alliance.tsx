import { useMemo, type FC } from 'react';
import { z } from 'zod';

import { Alliance } from '../../data/objects';
import * as styles from '../Card.module.css';
import * as unique from './Alliance.module.css';
import { MarkdownContent } from '../../utils/MarkdownContent';
import { useCountId } from '../../utils/useCountId';
import { StrokedUse } from '../../utils/StrokedUse';
import { size, FrontDecals } from '../Decals';

const foreGroundColor = '#e3dbb3';

export const AllianceCard: FC<z.infer<typeof Alliance>> = ({
  background,
  logo,
  name,
  decals,
  text,
  troop,
}) => {
  const cid = useCountId();
  const prefix = useMemo(() => `${cid}_`, [cid]);
  const discMask = `${prefix}mask-disc`;

  return (
    <div className={styles.card}>
      <div className={styles.decal_bg_1} />

      {/* decals */}
      {decals.length > 0 && (
        <svg {...size} viewBox="0 0 900 1263" className={unique.overlay}>
          <FrontDecals {...{ decals, prefix }} />
        </svg>
      )}

      {/* troop */}
      <svg className={unique.troop} viewBox="0 0 300 300">
        <StrokedUse
          width="300"
          height="300"
          xlinkHref={`${troop}#root`}
          fill="black"
          stroke={foreGroundColor}
          strokeWidth="3%"
        />
      </svg>

      {/* curve */}
      <svg viewBox="0 0 300 300" className={unique.overlay}>
        <defs>
          <mask id={discMask} maskUnits="userSpaceOnUse">
            <rect width="300" height="300" fill="white" />
            <circle cx="526" cy="20" fill="black" r="425"></circle>
          </mask>
        </defs>

        <image height={300} width={300} mask={`url(#${discMask})`} x={0} xlinkHref={background} y={0} />
      </svg>

      <div className={`${styles.head} ${unique.head}`} />
      <div className={styles.head_shade} />
      <div className={styles.shape} />
      <div className={styles.type}>
        <img src="/vector/icon/alliance.svg" className={unique.typeOverlay} />
        <img src="/vector/icon/alliance.svg" className={unique.typeShade} />
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.subtitle}>Alliance</div>
      <div className={unique.ring} />
      <svg className={unique.logo} viewBox="0 0 300 300">
        <StrokedUse
          width="280"
          height="280"
          x="10"
          y="10"
          xlinkHref={`${logo}#root`}
          fill={foreGroundColor}
          stroke={'black'}
          strokeWidth="7%"
        />
      </svg>

      <div className={styles.body}>
        <MarkdownContent value={text} />
      </div>
    </div>
  );
};
