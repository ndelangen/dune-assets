import { type FC } from 'react';
import { z } from 'zod';

import { Leader } from '../../data/objects';
import * as styles from '../Card.module.css';
import * as unique from './Traitor.module.css';
import { FactionToken } from '../../token/Faction';
import { MarkdownContent } from '../../block/MarkdownContent';

export const TraitorCard: FC<z.infer<typeof Leader> & { owner: string; background: string }> = ({
  background,
  image,
  logo,
  name,
  strength,
  owner,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.decal_bg_1}></div>
      <div className={`${styles.head} ${unique.head}`}></div>
      <div className={styles.head_shade}></div>
      <div className={styles.shape}></div>
      <div className={`${styles.type} ${unique.type}`}>
        <img src="/vector/icon/traitor.svg" className={styles.typeOverlay} />
        <img src="/vector/icon/traitor.svg" className={styles.typeShade} />
      </div>
      <div className={styles.title}>{name}</div>
      <div className={styles.subtitle}>Traitor - {owner}</div>
      <div className={unique.face} style={{ backgroundImage: `url('${image}')` }}></div>
      <div className={unique.strength}>{strength}</div>
      <div className={unique.logo}>
        <FactionToken image={logo} background={background} />
      </div>

      <div className={styles.body}>
        <MarkdownContent
          value={[
            'Reveal when Battle Plans are revealed if this leader is used by your opponent.',
            'You immediately win this battle and lose nothing (even if a Lasgun and Shield are revealed).',
            'Enemy leader is killed and you receive its fighting strength in spice.',
            'Both players lose if both their leaders are traitors, and neither player gets any spice.',
          ].join('\n\n')}
        />
      </div>
    </div>
  );
};
