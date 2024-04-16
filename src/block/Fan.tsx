import { Children, FC, PropsWithChildren, useCallback, useState } from 'react';

import styles from './Fan.module.css';
import { Wrapper } from './Wrapper';

interface Size {
  width: number;
  height: number;
}

const Relative: FC<
  PropsWithChildren & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => (
  <div className={styles.relative} {...props}>
    {children}
  </div>
);

export const Fan: FC<PropsWithChildren<{ spacing?: number; size: Size }>> = ({
  children,
  spacing = -2,
  size,
}) => {
  const [isHovered, setHovered] = useState(false);
  const exponent = isHovered ? 1.6 : 1;
  const fanOut = useCallback(() => setHovered(true), []);
  const fanIn = useCallback(() => setHovered(false), []);

  const items = Children.toArray(children)
    //@ts-ignore
    .filter((c) => typeof c === 'object' && typeof c.type === 'function')
    .map((value, index, { length }) => (
      <FanItem
        isAbsolute={index !== 0}
        key={index}
        rotation={(((length - 1) / 2) * -1 + index) * spacing * exponent}
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
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ rotation, isAbsolute, children, style, ...props }) => (
  <div
    className={isAbsolute ? styles.itemAbsolute : styles.itemRelative}
    style={{
      transform: `rotateZ(${rotation}deg)`,
    }}
    {...props}
  >
    {children}
  </div>
);
