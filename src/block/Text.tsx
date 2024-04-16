import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Text.module.css';

export const Text: FC<
  PropsWithChildren<{ columns?: number; size?: number }> &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ columns = 1, size = 2, children, style, ...props }) => (
  <div
    className={styles.main}
    style={{
      ...(columns ? { columns, gap: '4vw' } : {}),
      fontSize: `${size}vw`,
      lineHeight: `${size * 1.6}vw`,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

export const NonBreaking: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.nonBreaking}>{children}</div>
);
