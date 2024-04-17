import { FC, PropsWithChildren } from 'react';

import styled from './Layout.module.css';

export const WithBottom: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className={styled.withBottom}>{children}</div>
);

export const SideBySide: FC<PropsWithChildren<{ gap?: number }>> = ({ gap = 4, children }) => (
  <div className={styled.sideBySide} style={{ gap: `${gap}vw` }}>
    {children}
  </div>
);
