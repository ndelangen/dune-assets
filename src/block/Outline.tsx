// import styled from '@emotion/styled';
// import * as colors from '../presets/colors';
import { FC, PropsWithChildren } from 'react';

import styles from './Outline.module.css';

export const Outline: FC<PropsWithChildren<{ variant: 'normal' | 'example'; center?: boolean }>> = ({
  variant,
  children,
  center = false,
}) => (
  <div className={[styles[variant], center ? styles.center : ''].filter(Boolean).join(' ')}>{children}</div>
);
