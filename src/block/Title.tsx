import { ComponentProps, FC, PropsWithChildren } from 'react';

import { isLight } from '../utils/contrast';
import styles from './Title.module.css';

type Sizes = 'large' | 'medium' | 'small';

export const Title: FC<PropsWithChildren<{ color: string; size?: Sizes }>> = ({
  color,
  size = 'large',
  children,
}) => (
  <div
    className={`${styles.title} ${styles[size]}`}
    style={{ color: isLight(color) ? 'black' : 'white', backgroundColor: color }}
  >
    {children}
  </div>
);

export const MediumTitle: FC<Omit<ComponentProps<typeof Title>, 'size'>> = (props) => (
  <Title size="medium" {...props} />
);
