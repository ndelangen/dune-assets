import { FC } from 'react';

import styles from './FactionSynopsis.module.css';
import { SideBySide } from './Layout';
import { MarkdownContent } from './MarkdownContent';
import { Text } from './Text';

export const FactionSynopsis: FC<{ flip?: boolean; image: string; text: string }> = ({
  flip,
  text,
  image,
}) => (
  <div className={`${styles.base} ${flip ? styles.flipped : styles.unflipped}`}>
    <SideBySide>
      {[
        <img src={image} className={styles.image} />,
        <Text>
          <MarkdownContent>{text}</MarkdownContent>
        </Text>,
      ][flip ? 'flat' : 'reverse']()}
    </SideBySide>
  </div>
);
