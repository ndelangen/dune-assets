import { useMemo, type FC } from 'react';
import { z } from 'zod';

import { Treachery } from '../../data/objects';
import * as styles from '../Card.module.css';
import * as unique from './Treachery.module.css';
import { MarkdownContent } from '../../utils/MarkdownContent';
import { useCountId } from '../../utils/useCountId';
import { StrokedUse } from '../../utils/StrokedUse';
import { size, FrontDecals } from '../Decals';

const foreGroundColor = '#e3dbb3';

export const TreacheryCard: FC<z.infer<typeof Treachery>> = ({ name, decals, text, head, icon, subName }) => {
  const cid = useCountId();
  const prefix = useMemo(() => `${cid}_`, [cid]);

  return (
    <div className={styles.card}>
      <div className={styles.decal_bg_1} />

      {/* decals */}
      {decals.length > 0 && (
        <svg {...size} viewBox="0 0 900 1263" className={unique.overlay}>
          <FrontDecals {...{ decals, prefix }} />
        </svg>
      )}

      <div
        className={`${styles.head}`}
        style={{ background: `url('${head}') top center / cover no-repeat` }}
      />
      <div className={styles.head_shade} />
      <div className={styles.shape} />
      <div
        className={`${styles.type}`}
        style={{
          background: `url('${icon[0]}') top center / cover no-repeat`,
        }}
      >
        <img src={icon[1]} className={styles.typeOverlay} />
        <img src={icon[1]} className={styles.typeShade} />
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.subtitle}>{subName}</div>

      <div className={styles.body}>
        <MarkdownContent value={text} />
      </div>
    </div>
  );
};
