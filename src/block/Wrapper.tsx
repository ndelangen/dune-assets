import { FC, PropsWithChildren } from 'react';

import styles from './Wrapper.module.css';

interface Size {
  width: number;
  height: number;
}

export const Svg: FC<PropsWithChildren & React.SVGProps<SVGSVGElement>> = ({ children, ...props }) => (
  <svg className={styles.svg} {...props}>
    {children}
  </svg>
);

export const Wrapper: FC<PropsWithChildren<{ size: Size }> & React.SVGProps<SVGSVGElement>> = ({
  children,
  size,
  ...props
}) => (
  <Svg {...props} {...size} viewBox={`0 0 ${size.width} ${size.height}`}>
    <foreignObject x="0" y="0" {...size}>
      {children}
    </foreignObject>
  </Svg>
);
