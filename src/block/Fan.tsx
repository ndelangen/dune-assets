import {
  Children,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';

import styles from './Fan.module.css';
import { Wrapper } from './Wrapper';

interface Size {
  width: number;
  height: number;
}

const Relative: FC<PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <div className={styles.relative} {...props}>
    {children}
  </div>
);

export const Fan: FC<
  PropsWithChildren<{ spacing?: number; size: Size }> &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, spacing = -2, size, ...props }) => {
  const [isHovered, setHovered] = useState(false);
  const exponent = isHovered ? 1.6 : 1;
  const fanOut = useCallback(() => setHovered(true), []);
  const fanIn = useCallback(() => setHovered(false), []);

  const items = Children.toArray(children).map((value, index, { length }) => (
    <FanItem
      isAbsolute={index !== 0}
      key={index}
      rotation={(((length - 1) / 2) * -1 + index) * spacing * exponent}
      {...props}
    >
      <Wrapper size={size}>{value}</Wrapper>
    </FanItem>
  ));

  if (items.length === 0) {
    return null;
  }

  return (
    <Relative onMouseEnter={fanOut} onMouseLeave={fanIn}>
      {items}
    </Relative>
  );
};

const FanItem: FC<
  PropsWithChildren<{ rotation: number; isAbsolute: boolean }> &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ rotation, isAbsolute, children, style, ...props }) => (
  <div
    className={isAbsolute ? styles.itemAbsolute : styles.itemRelative}
    style={{
      transform: `rotateZ(${rotation}deg)`,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);
